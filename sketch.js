var ram, seetha, krishna, geetha, manoj, vishal, ankush, mangala, murthy;
var ramImg, seethaImg, krishnaImg, geethaImg, manojImg, vishalImg, ankushImg, mangalaImg, murthyImg;
var nextButton;
var text1, text2, text3, text4;
var INTRO1 = 1;
var INTRO2 = 2;
var gameState = INTRO1;

function preload(){
  ramImg = loadImage("Ram.gif");
  seethaImg= loadImage("Seetha.gif");
  krishnaImg = loadImage("Krishna.gif");
  geethaImg=loadImage("Geetha.gif");
  manojImg=loadImage("Manoj.gif");
  vishalImg=loadImage("Vishal.gif");
  ankushImg=loadImage("Ankush.gif");
  mangalaImg=loadImage("Mangala.gif");
  murthyImg=loadImage("Murthy.gif");
  greenBg=loadImage("greenarybg.jpg");
}

function setup() {
  createCanvas(800,400);
}

function draw() {
  background(greenBg); 
  drawSprites();

  nextButton=createButton("Next");
  nextButton.position(750,10);

  if(gameState===INTRO1){

    ram = createSprite(400, 250, 50, 50);
    ram.addImage(ramImg);
    ram.scale=0.5;

     fill("white");
     text1=createElement("h3","Hi I'am Ram. I'am very scared of future after seeing the dream!!! So we only have the ");
     text1.position(10, 25);

     text2=createElement("h3","responsibility to save this beautiful and greenary environment. Because of trees only we ");
     text2.position(10, 50);

     text3=createElement("h3","get oxygen and water, and there is also a threat of global warming. ");
     text3.position(10,75);

     text4=createElement("h3","So we should save our nature. Come lets move into the game.");
     text4.position(10,100);

     nextButton.mousePressed(()=>{
       text1.hide();
       text2.hide();
       text3.hide();
       text4.hide();
       gameState = INTRO2;
    });

  }

  if(gameState === INTRO2){
    seetha = createSprite(400,250,50,50);
    seetha.addImage(seethaImg);
    seetha.scale=0.5;
  }
    
  }
