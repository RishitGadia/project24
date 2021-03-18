
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rubbberball;
 var stoney, ground,hammery;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
rubberball=new Rubber(500,400,50);
stoney= new Stone(400,400,100,150);
ground=new Plane(300,700,1000,50);
hammery=new Hammer(500,250);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  rubberball.display();
  stoney.display();
  ground.display();
  hammery.display();
  drawSprites();
 
}



