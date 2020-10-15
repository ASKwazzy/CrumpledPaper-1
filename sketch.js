
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin, dustbin2, dustbin3, ground, paper;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 690, 800, 20);

	dustbin = new Log(650,670,200,20);
	dustbin2 = new Log(550,620,20,100);
	dustbin3 = new Log(750,620,20,100);

	paper = new Paper(200,670,15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y:-35});
	}
}

