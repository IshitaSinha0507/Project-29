const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2,ground3;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12,block13;
var block14,block15,block16,block17;
var block18,block19,block20;
var block21,block22
var block23,block24,block25,block26,block27;
var block28,block29,block30;
var block31,block32,block33;
var polygonImg,polygon;
var slingShot;

function preload(){
  
}

function setup(){
    var canvas = createCanvas(1100,600);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground1 = new Ground(550,height,1100,20);
    ground2 = new Ground(475,470,320,10);
    ground3 = new Ground(900,350,250,10);

    block1 = new Block(450,440,40,50);
    block2 = new Block(460,450,40,50);
    block3 = new Block(470,450,40,50);
    block4 = new Block(480,450,40,50);
    block5 = new Block(490,450,40,50);
    block6 = new Block(500,450,40,50);
    block7 = new Block(510,450,40,50);

    block8 = new Block(500,390,40,50);
    block9 = new Block(540,390,40,50);
    block10 = new Block(460,390,40,50);
    block11 = new Block(580,390,40,50);
    block12 = new Block(420,390,40,50);
    block13 = new Block(380,390,40,50);

    block14 = new Block(430,340,40,50);
    block15 = new Block(470,340,40,50);
    block16 = new Block(510,340,40,50);
    block17 = new Block(550,340,40,50);

    block18 = new Block(490,300,40,50);
    block19 = new Block(450,300,40,50);
    block20 = new Block(530,300,40,50);

    block21 = new Block(510,260,40,50);
    block22 = new Block(470,260,40,50);

    block23 = new Block(900,340,40,50);
    block24 = new Block(940,340,40,50);
    block25 = new Block(980,340,40,50);
    block26 = new Block(860,340,40,50);
    block27 = new Block(820,340,40,50);

    block28 = new Block(900,300,40,50);
    block29 = new Block(860,300,40,50);
    block30 = new Block(940,300,40,50);

    block31 = new Block(930,260,40,50);
    block32 = new Block(890,260,40,50);

    block33 = new Block(910,220,40,50);

    polygon = new Polygon(150,200,20,20);

    slingShot = new Slingshot(polygon.body,{x:100, y:250});
    
}

function draw(){
    background(55,43,43);
    Engine.update(engine);

    textSize(25);
  fill("white")
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,100);

    ground1.display();
    ground2.display();
    ground3.display();

    fill("skyblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill("lightpink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();

    fill("lightgreen");
    block14.display();
    block15.display();
    block16.display();
    block17.display();

    fill("orange");
    block18.display();
    block19.display();
    block20.display();

    fill("red");
    block21.display();
    block22.display();

    fill("grey");
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();

    fill("skyblue");
    block28.display();
    block29.display();
    block30.display();

    fill("green");
    block31.display();
    block32.display();

    fill("yellow");
    block33.display();

    slingShot.display();
    polygon.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly()
}

