
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stand1, stand2, stand3;
var world, engine;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10,block11,block12, block13, block14;
var ball, ballImage;
var slingshot;


function preload()
{
 ballImage = loadImage("polygon.png");
}

function setup() {
	createCanvas(1500, 500);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	ball = Bodies.circle(50,200,10);
	World.add(world, ball);

	slingshot = new Slingshot(this.ball, {x: 100, y: 200});

	stand1 = new Ground(600,285,200,10);
  	stand2 = new Ground(900,195,200,10);
  	stand3 = new Ground(750, 400, 1500, 10)

	  
	block1 = new Block(600,260,30,40);
	block2 = new Block(570,260,30,40);
	block3 = new Block(540,260,30,40);
	block4 = new Block(630,260,30,40);
	block5 = new Block(660,260,30,40);
  
  
	block6 = new Block(585,220,30,40);
	block7 = new Block(555,220,30,40);
	block8 = new Block(615,220,30,40);
	block9 = new Block(645,220,30,40);
  
  
  
	bolck10 = new Block(600,170,30,40);
	block11 = new Block(570,180,30,40);
	block12 = new Block(630,180,30,40);
  
  
	block13 = new Block(600,140,30,40);

  	block14 = new Block(900,170,30,40);
  	block15 = new Block(930,170,30,40);
  	block16 = new Block(870,170,30,40);
  	block17 = new Block(840,170,30,40);
  	block18 = new Block(960,170,30,40);

  	block19 = new Block(900,140,30,40);
  	block20 = new Block(930,140,30,40);
  	block21 = new Block(870,140,30,40);

  	block22 = new Block(900,110,30,40);
  
}


function draw() {
  rectMode(CENTER);
  background(175);
  Engine.update(engine);

 	stand1.display();
 	stand2.display();
 	stand3.display();
  
	fill("lightBlue");
 	block1.display();
 	block2.display();
 	block3.display();
 	block4.display();
	block5.display();
	
	fill("lightPink");
	block6.display();
 	block7.display();
 	block8.display();
 	block9.display();
	
	fill("lightGreen");
	bolck10.display();
	block11.display();
	block12.display();
	 
	fill("grey");
 	block13.display();

	fill("lightBlue");
  	block14.display();
  	block15.display();
  	block16.display();
  	block17.display();
	block18.display();

	fill("lightGreen");
	block19.display();
 	block20.display();
	block21.display();

	fill("lightPink");
	block22.display();
	  
	slingshot.display();
	
	
	imageMode(CENTER);
	image(ballImage, ball.position.x, ball.position.y, 40, 40);
}

function mouseDragged(){
	Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
slingshot.fly();
}


