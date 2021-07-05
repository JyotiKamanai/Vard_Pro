/*
Mario
Ground
*/ 

var ground, groundImage;
var iground;
var mario, marioStandingImage, marioAnimation, marioAttacked;
var gameState = 0;
var victory,victoryImage;
var bowser;
var turtle;
var mushroom;
var obstaclesGroup;
var live = 2;

function preload(){
  groundImage = loadImage("Images/Images for background and decoration/backg.jpg");
  marioStandingImage = loadAnimation("Images/Mario/km_0.png","Images/Mario/km_0.png");
  marioAnimation = loadAnimation("Images/Mario/km_4.png","Images/Mario/km_3.png","Images/Mario/km_2.png","Images/Mario/km_1.png")
  //victoryImage = loadImage("Images/Images for background and decoration/Victory.png")
  bowser = loadAnimation("Images/Bowser/Bowser_1.png","Images/Bowser/Bowser_2.png");
  turtle = loadAnimation("Images/Turtle/kacsa_teknos_1.png","Images/Turtle/kacsa_teknos_1.png");
  mushroom = loadImage("Images/Mushroom/Mushroom_1.png");
  marioAttacked = loadAnimation("Images/Mario/mh.png")
}

function setup(){
  createCanvas(displayWidth,displayHeight);
 
//Creating Invisible ground and giving its functions
iground = createSprite(0,displayHeight-220,displayWidth,8);
iground.shapecolor = "black";
 iground.visible = false;

//Creating ground and giving its functions
 ground = createSprite(0,displayHeight-500,displayWidth,1000);
 ground.addImage("GROUND",groundImage);
 ground.scale = 1.3;
 ground.velocityX = -8; 
 
//Creating the PC(Mario) and giving it the image
 mario = createSprite(75,displayHeight-275);
 mario.scale = 1.2;
 mario.addAnimation("Running",marioAnimation);

// Creating the group for the obstacles i.e turtle and bowser
 obstaclesGroup = new Group();

}

function draw(){
background("white");



drawSprites();
}