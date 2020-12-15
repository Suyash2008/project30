const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var gamestates = "onsling";

function preload(){
}

function setup(){
  createCanvas(1200,600);
  
  engine = Engine.create();
  world = engine.world;
  
  angleMode(RADIANS)
  shootblock = new Shootblock(200,300,40,40)
  chain = new Chain(shootblock.body,{x:200,y:300})
  ground = new Ground(600,600,1200,100)
  platform = new Ground(600,400,300,20)
  box = new Box(480,360,40,50)
  box2 = new Box(525,360,40,50)
  box3 = new Box(570,360,40,50)
  box4 = new Box(615,360,40,50)
  box5 = new Box(660,360,40,50)
  box6 = new Box(705,360,40,50)
  box7 = new Box(500,300,40,50)
  box8 = new Box(545,300,40,50)
  box9 = new Box(590,300,40,50)
  box10 = new Box(635,300,40,50)
  box11 = new Box(680,300,40,50)
  box12 = new Box(520,220,40,50)
  box13 = new Box(565,220,40,50)
  box14 = new Box(610,220,40,50)
  box15 = new Box(655,220,40,50)
  box16 = new Box(540,160,40,50)
  box17 = new Box(585,160,40,50)
  box18 = new Box(630,160,40,50)
  box19 = new Box(560,100,40,50)
  box20 = new Box(604,100,40,50)
  box21 = new Box(580,40,40,50)
}
function draw(){
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  text(mouseX,200,50);
  text(mouseY,250,50);
  shootblock.display();
  chain.display();
  ground.display();
  platform.display();
  box.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  
}
function mouseDragged(){
  if(gamestates != "flying"){
  Matter.Body.setPosition(shootblock.body,{x:mouseX,y:mouseY})
}
}
function mouseReleased(){
  chain.fly();
  gamestates = "flying";
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(shootblock.body,{x:200,y:300})
    chain.attach(shootblock.body);
    gamestates = "onsling"
  }
}
