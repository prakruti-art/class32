const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var engine, world;
var ground
var circle, slingShot;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var score = 0;

function preload() {
    getBackgroundImg;
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    box1 = new Box(460,100,70,70);
    box2 = new Box(530,430,70,70);
    box3 = new Box(460,430,70,70);
    box4 = new Box(390,430,70,70);
    box5 = new Box(600,360,70,70);
    box6 = new Box(530,360,70,70);
    box7 = new Box(460,360,70,70);
    box8 = new Box(390,360,70,70);
    box9 = new Box(320,360,70,70);

    circle= new Circle(200,300,20)
  
    slingshot = new SlingShot(circle.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);

    text("Score: " + score, width-300, 50)

    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    


    ground.display();
    circle.display();

    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attatch(circle.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=18){
        bgColor = (yellow);
    }
    else{
        background (black);
    }
}