var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var database;

var form, player, game;

var players, player1,player2;
var enemies,enemy1,enemy2,enemy3,enemy4;
var bulletGroup;

//var track, car1_img, car2_img, car3_img, car4_img;

/*function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
}*/
function preload(){
  player1img = loadImage("images/armyman.jpg");
  player2img = loadImage("images/player2.jpg");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  bulletGroup = new Group();
}




function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }

if(bulletGroup.isTouching(enemy1)){
  enemy1.remove();
}

if(bulletGroup.isTouching(enemy2)){
  enemy2.remove();
}

if(bulletGroup.isTouching(enemy3)){
  enemy3.remove();
}

if(bulletGroup.isTouching(enemy4)){
  enemy4.remove();
}
}
