var ram, seetha, krishna, geetha, manoj, vishal, ankush, mangala, murthy;
var ramImg, seethaImg, krishnaImg, geethaImg, manojImg, vishalImg, ankushImg, mangalaImg, murthyImg;
var nextButton;
var intro1, intro2, intro3, intro4, intro5, intro6, intro7, intro8, intro9;
var INTRO1 = 1;
var INTRO2 = 2;
var INTRO3 = 3;
var INTRO4 = 4;
var INTRO5 = 5;
var INTRO6 = 6;
var INTRO7 = 7;
var INTRO8 = 8;
var INTRO9 = 9;
var ENDINTRO = 10;
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
  intro1 = new Intro1();
  intro2 = new Intro2();
  intro3 = new Intro3();
  intro4 = new Intro4();
  intro5 = new Intro5();
  intro6 = new Intro6();
  intro7 = new Intro7();
  intro8 = new Intro8();
  intro9 = new Intro9();
}

function draw() {
  background(greenBg); 
  drawSprites();

  nextButton=createButton("Next");
  nextButton.position(750,10);

  if(gameState===INTRO1){

    ram = createSprite(400, 250, 50, 50);
    ram.addImage(ramImg);
    //ram.visible = true;
    ram.scale=0.5;

     nextButton.mousePressed(()=>{
       ram.visible = false;
       gameState = INTRO2;
    });

  }

  if(gameState === INTRO2){
    console.log("hello");
    ram.visible=false;
    seetha = createSprite(400,250,50,50);
    seetha.addImage(seethaImg);
    seetha.visible = true;
    seetha.scale=0.5;

    nextButton.mousePressed(()=>{
      seetha.visible = false;
      gameState = INTRO3;
    });
  }

  if(gameState === INTRO3){

    krishna = createSprite(400,250,50,50);
    krishna.addImage(krishnaImg);
    krishna.visible = true;
    krishna.scale=0.5;

    nextButton.mousePressed(()=>{
       krishna.visible = false;
       gameState = INTRO4;
    });
  }

  if(gameState === INTRO4){
    geetha = createSprite(400,250,50,50);
    geetha.addImage(geethaImg);
    geetha.visible = true;
    geetha.scale=0.5;

    nextButton.mousePressed(()=>{
        geetha.visible = false;
        gameState = INTRO5;
    });
  }

  if(gameState === INTRO5){
    manoj = createSprite(400,250,50,50);
    manoj.addImage(manojImg);
    manoj.visible = true;
    manoj.scale=0.5;

    nextButton.mousePressed(()=>{
        manoj.visible = false;
        gameState = INTRO6;
    });
  }

  if(gameState === INTRO6){
    vishal = createSprite(400,250,50,50);
    vishal.addImage(vishalImg);
    vishal.visible = true;
    vishal.scale=0.5;

    nextButton.mousePressed(()=>{
      vishal.visible = false;
      gameState = INTRO7;
    });
  }

  if(gameState === INTRO7){
    ankush = createSprite(400,250,50,50);
    ankush.addImage(ankushImg);
    ankush.visible = true;
    ankush.scale=0.5;

    nextButton.mousePressed(()=>{
      ankush.visible = false;
      gameState = INTRO8;
    })
  }

  if(gameState === INTRO8){
    mangala = createSprite(400,250,50,50);
    mangala.addImage(mangalaImg);
    mangala.visible = true;
    mangala.scale=0.5;

    nextButton.mousePressed(()=>{
      mangala.visible = false;
      gameState = INTRO9
    });
  }

  if(gameState === INTRO9){
    murthy = createSprite(400,250,50,50);
    murthy.addImage(murthyImg);
    murthy.visible = true;
    murthy.scale=0.5;

    nextButton.mousePressed(()=>{
      murthy.visible = false;
      gameState = ENDINTRO;
    });
  }

  intro1.display();
  intro2.display();
  intro3.display();
  intro4.display();
  intro5.display();
  intro6.display();
  intro7.display();
  intro8.display();
  intro9.display();
    
  }
