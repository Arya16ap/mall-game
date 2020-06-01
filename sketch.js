var road,roadImage;
var car,carImage;
var mallb;
gameState = "rm";
var isenser;
var mallE,mallEImage;
var malli,malliImage;
var mallieb;
var b1,b2,b3;
var barbie,barbieImage;
var cake , cakeImage;
var oveno,ovenc,ovenoImage,ovencImage;
var plate,plateImage;
var sugar;
var maida;

function preload(){
roadImage = loadImage("road.jpg");
carImage = loadImage("car.png");
mallEImage = loadImage("mall entrance.jpg");
malliImage = loadImage("malll.jpg");
barbieImage = loadImage("barbie.png");
cakeImage = loadImage("cake.png");
ovenoImage = loadImage("oven open.png");
ovencImage = loadImage("oven colsed.jpg");
plateImage = loadImage("plate.png");

}


function setup() {
  createCanvas(600,600);
  road = createSprite(300,300,600,600);
  road.addImage(roadImage);
  road.scale = 2.5;

  car = createSprite(500,200,20,20);
  car.addImage(carImage);
  car.scale= 0.16;

  isenser = createSprite(150,200,50,50);
  isenser.shapeColor = "red";

  mallb = createSprite(310,130,30,30);
  mallb.shapeColor = "red";

  mallE = createSprite(300,300,20,20);
  mallE.shapeColor = "pink";
  mallE.addImage(mallEImage);
  mallE.scale = 2.5;
  mallE.visible = false;
  

  malli = createSprite(300,300,20,20);
  malli.shapeColor = "pink";
  malli.addImage(malliImage);
  malli.scale = 2.5;
  malli.visible = false;

  mallieb = createSprite(250,200,20,20);
  mallieb.shapeColor = "red";
  mallieb.visible = false;

  b1 = createSprite(350,400,30,30);
  b1.visible = false;
  b1.shapeColor = "red";

  b2 = createSprite(350,100,30,30);
  b2.visible = false;
  b2.shapeColor = "red";

  b3 = createSprite(150,400,30,30);
  b3.visible = false;
  b3.shapeColor = "red";

  barbie = createSprite(200,200,20,20);
  barbie.addImage(barbieImage);
  barbie.scale = 0.16;
  barbie.visible = false;

  cake = createSprite(200,200,20,20);
  cake.addImage(cakeImage);
  cake.visible = false;
  cake.scale = 0.3;


  plate = createSprite(100,100,20,20);
  plate.addImage(plateImage);
  plate.visible = false;

  oveno = createSprite(300,300,20,20);
  oveno.addImage(ovenoImage);
  oveno.visible = false;

  ovenc = createSprite(300,300,20,20);
  ovenc.addImage(ovencImage);
  ovenc.visible = false;

  maida = createSprite(500,500,30,30);
  maida.shapeColor = "purple";
  maida.visible = false;


  sugar = createSprite(400,400,20,20);
  sugar.shapeColor = "white";
  sugar.visible = false;

}

function draw() {
  if(gameState === "rm"){
    if(mousePressedOver(isenser)){
      car.velocityX = -3;
    }

    if(keyDown("space")){
      car.velocityX = 0;
    }

    if(mousePressedOver(mallb)){
      isenser.visible  = false;
      car.visible = false;
      road.visible = false;
      mallb.visible = false;
      
      mallE.visible = true;
      mallieb.visible = true;
    }
  
if(mousePressedOver(mallieb)){
  mallieb.visible = false;
  mallE.visible = false;
  malli.visible= true;
  b1.visible = true;
  b2.visible = true;
  b3.visible = true;
  barbie.visible = true;

  }
  if(mousePressedOver(b1)){
    malli.visible = false;
    barbie.visible = false;
    b2.visible = false;
    b3.visible = false;
    b1.visible = false;
    oveno.visible = true;
    plate.visible = true;
    maida.visible = true;
    sugar.visible = true;
    
  }
  sugar.x = World.mouseX;
    sugar.y = World.mouseY;
    if(sugar.collide(maida)){
      sugar.shapeColor = "brown";
      maida.visible = false;
    }
    if(mousePressedOver(plate)){
      sugar.visible = false;
      cake.visible = true;
    }
    cake.x = World.mouseX;
    cake.y = World.mouseY;

    if(mousePressedOver(oveno)){
      ovenc.visible = true;
      oveno.visible = false;
    }

    if(mousePressedOver(ovenc))
    gameState = "2";
  }

  if(gameState === "2" ){
    cake.x = 300;
    cake.y = 300;
    ovenc.visible = false;
    plate.visible = false;
  }
   background("black");
  
  drawSprites();
}
