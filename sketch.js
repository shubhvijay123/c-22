//name spaceing
const World=Matter.World;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
//1:create the Engine
//2:acessing the sEngine
//upadating the engine

var sEngine,ball,sWorld

function setup() {
sEngine=Engine.create();
sWorld=sEngine.world

  createCanvas(800,400);
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(width/2,height-10,width,5,options)
  World.add(sWorld,ground)
  var ball_options={
    restitution:1
  }
 ball= Bodies.circle(400,200,25,ball_options)
 World.add(sWorld,ball)
}

function draw() {
  background(0);  
  Engine.update(sEngine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,width,5)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,25,25)
  drawSprites();
}