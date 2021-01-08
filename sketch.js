const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var myEngine, myWorld;
var box1, box2, box3, box4, box5;
var log1, log2, log3, log4;
var ground;
var pig1,pig2;
var bird;
var bg;

function preload(){

  bg=loadImage("sprites/bg.png");
}
function setup() {
  createCanvas(1200,400);

  

  myEngine = Engine.create();
  myWorld = myEngine.world;

  box1 = new Box(700,355,70,70);
  box2 = new Box(920,355,70,70);
  pig1 = new Pig(810,355);
  log1 = new Log(810,320,300,PI/2);

  box3 = new Box(700,285,70,70);
  box4 = new Box(920,285,70,70);
  pig2 = new Pig(810,285);
  log2 = new Log(810,250,300,PI/2);
  
  box5 = new Box(810,205,70,70);
  log3 = new Log(775,170,150,PI/4);
  log4 = new Log(895,170,150,-PI/4);

  bird = new Bird(200,200);
  ground = new Ground(600,390,width,20);
}

function draw() {
  background(bg);
  
  Engine.update(myEngine);

  box1.display();
  box2.display();
  pig1.display();
  log1.display();

  box3.display();
  box4.display();
  pig2.display();
  log2.display();

  box5.display();
  log3.display();
  log4.display();

  bird.display();
  ground.display();
}