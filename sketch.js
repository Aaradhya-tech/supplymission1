const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies;

var myengine,myworld;
var ground,package;

function setup() {
  createCanvas(800,400);

  myengine = Engine.create(); 
  myworld = myengine.world; 
  
  object_options = { 
    isStatic: true 
  } 
  
  ground = Bodies.rectangle(400,380,800,20,object_options); 
  World.add(myworld,ground); 
  

  ball_options = { 
    restitution: 1
  } 

  package = Bodies.circle(400,50,50,ball_options);
  World.add(myworld,package);
  
}

function draw() {
  background(0); 
  Engine.update(myengine); 

  fill("red")
  ellipse(package.position.x,package.position.y,50,50);
 
  fill("yellow")
  rect(350,48,100,80);

  fill("green")
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,800,20); 
  
  fill("white");
  textSize(24);
 text("Yellow box represents airplane", 5,20);
 text(" Red circle represents package", 5,50);
  
  drawSprites();
}