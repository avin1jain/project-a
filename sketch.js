
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint


var engine, world;


function preload()
{

}

function setup() {
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	createCanvas(1200, 600);

}


function draw() {


  drawSprites();

}

