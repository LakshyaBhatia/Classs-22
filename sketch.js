const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine;
var world;

var box;
var ground;
var ball;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  box = Bodies.rectangle(400,100,50,50);
  World.add(world, box);

var ground_options = {

isStatic : true 

}
  ground = Bodies.rectangle(400,360,1000,20,ground_options);
  World.add(world, ground);

var icecream = {

  restitution : 1.1
}


  ball = Bodies.circle(200,50,30,icecream);
  World.add(world, ball);
}
function draw() {
  background("green"); 
  Engine.update(engine);


  rectMode(CENTER);

  
  rect(box.position.x,box.position.y,50,50);
  rect(ground.position.x,ground.position.y,1000,20)


  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30)

  drawSprites();
}