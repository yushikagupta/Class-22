const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies

var engine, world
var ball, ground




function setup() {
  createCanvas(800,400);

 engine = Engine.create();
 world = engine.world

 var options = {
 isStatic: true
 }
 ground = Bodies.rectangle(50,380, 400,20, options)
World.add(world,ground)

var options = {
  restitution: 0.7
}
ball= Bodies.circle(100, 50, 25, options)
World.add(world, ball)

}

function draw() {
  
  background("black");  
 Engine.update(engine)

 rectMode(CENTER)
 fill("red")
 rect(ground.position.x, ground.position.y, 400, 20);

 ellipseMode(RADIUS)
 fill("green")
 ellipse(ball.position.x, ball.position.y, 25)


}