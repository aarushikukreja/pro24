
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground
var dustbinLeft, dustbinRight, dustbinBottom


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper= new Paper(50, 100, 20)
ground= new Ground(400, 690, 800, 15)
dustbinLeft= new Dustbin(600,675,200,20);
dustbinRight= new Dustbin(710,635,20,100);
dustbinBottom= new Dustbin(490,635,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbinLeft.display()
  dustbinRight.display()
  dustbinBottom.display()
  ground.display()
	  paper.display()
  
  drawSprites();
 
}
 function keyPressed(){
	 if(keyCode === UP_ARROW){
		 Matter.Body.applyForce(paper.body, paper.body.position, {x:60, y:-60 })
	 }
 }


