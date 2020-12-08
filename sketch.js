
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Object1,Object2,Object3, Object4,Object5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	roofObject=new Roof(750,50,0,20);

	CircleDiameter=40;

	startCirclePositionX=width/2;
	startCirclePositionY=height/4+500;
	Object1=new Circle(startCirclePositionX-CircleDiameter*2,startCirclePositionY,CircleDiameter);
	Object2=new Circle(startCirclePositionX-CircleDiameter,startCirclePositionY,CircleDiameter);
	Object3=new Circle(startCirclePositionX,startCirclePositionY,CircleDiameter);
	Object4=new Circle(startCirclePositionX+CircleDiameter,startCirclePositionY,CircleDiameter);
	Object5=new Circle(startCirclePositionX+CircleDiameter*2,startCirclePositionY,CircleDiameter);
	
	rope1=new Rope(Object1.body,roofObject.body,-CircleDiameter*2, 0)
	rope2=new Rope(Object2.body,roofObject.body,-CircleDiameter*1, 0)
	rope3=new Rope(Object3.body,roofObject.body,0, 0)
	rope4=new Rope(Object4.body,roofObject.body,CircleDiameter*1, 0)
	rope5=new Rope(Object5.body,roofObject.body,CircleDiameter*2, 0)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(600);
  roofObject.display();
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  Object1.display();
  Object2.display();
  Object3.display();
  Object4.display();
  Object5.display();
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(Object1.body,Object1.body.position,{x:-50,y:-45});

	}
}
