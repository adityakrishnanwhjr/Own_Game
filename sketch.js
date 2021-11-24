const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ram, seetha, krishna, geetha, manoj, vishal, ankush, mangala, murthy, bg, ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10, dustbin1, ground1, tree1, tree2, tree3, tree4, tree5, tree6, tree7, tree8, tree9, tree10, level3Img, tips;
var ramImg, seethaImg, krishnaImg, geethaImg, manojImg, vishalImg, ankushImg, mangalaImg, level1Img, treeImg, fruitPeelImg, plasticCanImg, paperImg, plasticBag, juteBag, tipsImg;
var greenBg, greenGarden;
var winningSound;
var nextButton, plantTrees;
var score = 0;
var treeScore = 0;
var level3Score = 0;
var intro1, intro2, intro3, intro4, intro5, intro6, intro7, intro8, intro9, gameIntro1, l1, l2, l3;
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
var INSTRUCTION = 11;
var LEVEL1 = 12;
var LEVEL1PLAY = 13;
var LEVEL2 = 14;
var LEVEL2PLAY = 15;
var LEVEL3 = 16;
var LEVEL3PLAY = 17;
var ASKINGNAME = 18;
var ASKINGNAMEEND = 19;
var TIPS = 20;
var TIPS2 = 21;
var THANKYOU = 22;
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
  greenGarden=loadImage("greengarden.jpg");
  treeImg=loadImage("tree.gif");
  fruitPeelImg=loadImage("bananaPeel.png");
  plasticCanImg=loadImage("plasticCan.jpg");
  paperImg=loadImage("paper.png");
  plasticBag=loadImage("plasticBag.jpeg");
  juteBag=loadImage("juteBag.jpg");
  tipsImg=loadImage("tips.jpeg")
  winningSound=loadSound("winningSound.mp3");
}

function setup() {
  createCanvas(800,400);
  var engine = Engine.create();
  world = engine.world;

  intro1 = new Intro1();
  intro2 = new Intro2();
  intro3 = new Intro3();
  intro4 = new Intro4();
  intro5 = new Intro5();
  intro6 = new Intro6();
  intro7 = new Intro7();
  intro8 = new Intro8();
  intro9 = new Intro9();
  gameIntro1 = new gameIntro();
  l1 = new level1();
  l2 = new level2();
  l3 = new level3();

  ball1 = new crumpledBall(random(100,150),0,30);
  ball2 = new crumpledBall(random(100,150),0,30);
  ball3 = new crumpledBall(random(100,150),0,30);
  ball4 = new crumpledBall(random(100,150),0,30);
  ball5 = new crumpledBall(random(100,150),0,30);
  ball6 = new crumpledBall(random(100,150),0,30);
  ball7 = new crumpledBall(random(100,150),0,30);
  ball8 = new crumpledBall(random(100,150),0,30);
  ball9 = new crumpledBall(random(100,150),0,30);
  ball10 = new crumpledBall(random(100,150),0,30);

  dustbin1 = new dustbin(700,375); 
  ground1 = new ground(400,405,3200,10);

  Engine.run(engine);  
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
       //ram.visible = false;
       bg = createSprite(800,400,400,200)
       bg.addImage(greenBg);
       bg.scale = 2.7;
       gameState = INTRO2;
    });

  }

  if(gameState === INTRO2){
    console.log("hello");
    ram.visible=false;
    seetha = createSprite(400,250,50,50);
    seetha.addImage(seethaImg);
    //seetha.visible = true;
    seetha.scale=0.5;

    nextButton.mousePressed(()=>{
      //seetha.visible = false;
      bg = createSprite(800,400,400,200)
      bg.addImage(greenBg);
      bg.scale = 2.7;
      gameState = INTRO3;
    });
  }

  if(gameState === INTRO3){

    krishna = createSprite(400,250,50,50);
    krishna.addImage(krishnaImg);
    //krishna.visible = true;
    krishna.scale=0.5;

    nextButton.mousePressed(()=>{
       //krishna.visible = false;
       bg = createSprite(800,400,400,200)
       bg.addImage(greenBg);
       bg.scale = 2.7;
       gameState = INTRO4;
    });
  }

  if(gameState === INTRO4){
    geetha = createSprite(400,250,50,50);
    geetha.addImage(geethaImg);
    //geetha.visible = true;
    geetha.scale=0.5;

    nextButton.mousePressed(()=>{
        //geetha.visible = false;
        bg = createSprite(800,400,400,200)
        bg.addImage(greenBg);
        bg.scale = 2.7;
        gameState = INTRO5;
    });
  }

  if(gameState === INTRO5){
    manoj = createSprite(400,250,50,50);
    manoj.addImage(manojImg);
    //manoj.visible = true;
    manoj.scale=0.5;

    nextButton.mousePressed(()=>{
        //manoj.visible = false;
        bg = createSprite(800,400,400,200)
        bg.addImage(greenBg);
        bg.scale = 2.7;
        gameState = INTRO6;
    });
  }

  if(gameState === INTRO6){
    vishal = createSprite(400,250,50,50);
    vishal.addImage(vishalImg);
    //vishal.visible = true;
    vishal.scale=0.5;

    nextButton.mousePressed(()=>{
      //vishal.visible = false;
      bg = createSprite(800,400,400,200)
      bg.addImage(greenBg);
      bg.scale = 2.7;
      gameState = INTRO7;
    });
  }

  if(gameState === INTRO7){
    ankush = createSprite(400,250,50,50);
    ankush.addImage(ankushImg);
    //ankush.visible = true;
    ankush.scale=0.5;

    nextButton.mousePressed(()=>{
      //ankush.visible = false;
      bg = createSprite(800,400,400,200)
      bg.addImage(greenBg);
      bg.scale = 2.7;
      gameState = INTRO8;
    })
  }

  if(gameState === INTRO8){
    mangala = createSprite(400,250,50,50);
    mangala.addImage(mangalaImg);
    //mangala.visible = true;
    mangala.scale=0.5;

    nextButton.mousePressed(()=>{
      //mangala.visible = false;
      bg = createSprite(800,400,400,200)
      bg.addImage(greenBg);
      bg.scale = 2.7;
      gameState = INTRO9;
    });
  }

  if(gameState === INTRO9){
    murthy = createSprite(400,250,50,50);
    murthy.addImage(murthyImg);
    //murthy.visible = true;
    murthy.scale=0.5;

    nextButton.mousePressed(()=>{
      //murthy.visible = false;
      bg = createSprite(800,400,400,200)
      bg.addImage(greenBg);
      bg.scale = 2.7;
      gameState = ENDINTRO;
    });
  }

  if(gameState === ENDINTRO){
    ram = createSprite(400, 300, 50, 50);
    ram.addImage(ramImg);
    //ram.visible = true;
    ram.scale=0.5;

    nextButton.mousePressed(()=>{
      //ram.visible = false;
      bg = createSprite(800,400,400,200)
      bg.addImage(greenBg);
      bg.scale = 2.7;
      gameState = INSTRUCTION;
    });
  }

  if(gameState === INSTRUCTION){
      nextButton.mousePressed(()=>{
        gameState = LEVEL1;
      });
  }

  if(gameState === LEVEL1){
      bg = createSprite(400,200,500,250)
      bg.addImage(greenGarden);
      bg.scale = 1.25;
    }

  if(gameState === LEVEL1PLAY){
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    ball6.display();
    ball7.display();
    ball8.display();
    ball9.display();
    ball10.display();
    dustbin1.display();

    textSize=35;
    text("Score: " + score, 650,25);

    if(score === 0){
      level1Img = createSprite(100,300);
      level1Img.addAnimation("normal", vishalImg);
      level1Img.scale = 0.5
    }

    if(keyCode === 32 && score === 0){
      Matter.Body.setPosition(ball1.body,{x:200, y:400});
    }

    if(gameState === LEVEL1PLAY && score === 0 && ball1.body.position.x > 540 && ball1.body.position.x < 610){
      Matter.Body.setPosition(ball1.body,{x:575, y:400});
      score = 1;
    }

    if(score === 1){
      level1Img.addAnimation("normal",ankushImg);
    }

    if(keyCode === 32 && score === 1){
      Matter.Body.setPosition(ball2.body,{x:200, y:400});
    }

    if(gameState === LEVEL1PLAY && score === 1 && ball2.body.position.x > 540 && ball2.body.position.x < 610){
      Matter.Body.setPosition(ball2.body,{x:575, y:400});
      score = 2;
    }

    if(score === 2){
      level1Img.addAnimation("normal",mangalaImg);
    }

    if(keyCode === 32 && score === 2){
      Matter.Body.setPosition(ball3.body,{x:200, y:400});
    }

    if(gameState === LEVEL1PLAY && score === 2 && ball3.body.position.x > 540 && ball3.body.position.x < 610){
      Matter.Body.setPosition(ball3.body,{x:575, y:400});
      score = 3;
    }

    if(score === 3){
      level1Img.addAnimation("normal", vishalImg);
    }

    if(keyCode === 32 && score === 3){
      Matter.Body.setPosition(ball4.body,{x:200, y:400});
    }

    if(gameState === LEVEL1PLAY && score === 3 && ball4.body.position.x > 540 && ball4.body.position.x < 610){
      Matter.Body.setPosition(ball4.body,{x:575, y:400});
      score = 4;
    }

    if(score === 4){
      level1Img.addAnimation("normal",ankushImg);
    }

    if(keyCode === 32 && score === 4){
      Matter.Body.setPosition(ball5.body,{x:200, y:400});
    }

    if(gameState === LEVEL1PLAY && score === 4 && ball5.body.position.x > 540 && ball5.body.position.x < 610){
      Matter.Body.setPosition(ball5.body,{x:575, y:400});
      score = 5;
    }

    if(score === 5){
      level1Img.addAnimation("normal",mangalaImg);
    }

    if(keyCode === 32 && score === 5){
      Matter.Body.setPosition(ball6.body,{x:200, y:400});
    }

    if(gameState === LEVEL1PLAY && score === 5 && ball6.body.position.x > 540 && ball5.body.position.x < 610){
      Matter.Body.setPosition(ball6.body,{x:575, y:400});
      score = 6;
    }

    if(score === 6){
      level1Img.addAnimation("normal",vishalImg);
    }

    if(keyCode === 32 && score === 6){
      Matter.Body.setPosition(ball7.body,{x:200, y:400});
    }

    if(gameState === LEVEL1PLAY && score === 6 && ball7.body.position.x > 540 && ball7.body.position.x < 610){
      Matter.Body.setPosition(ball7.body,{x:575, y:400});
      score = 7;
    }

    if(score === 7){
      level1Img.addAnimation("normal",ankushImg);
    }

    if(keyCode === 32 && score === 7){
      Matter.Body.setPosition(ball8.body,{x:200, y:400});
    }

    if(gameState === LEVEL1PLAY && score === 7 && ball8.body.position.x > 540 && ball8.body.position.x < 610){
      Matter.Body.setPosition(ball8.body,{x:575, y:400});
      score = 8;
    }

    if(score === 8){
      level1Img.addAnimation("normal",mangalaImg);
    }

    if(keyCode === 32 && score === 8){
      Matter.Body.setPosition(ball9.body,{x:200, y:400});
    }

    if(gameState === LEVEL1PLAY && score === 8 && ball9.body.position.x > 540 && ball9.body.position.x < 610){
      Matter.Body.setPosition(ball9.body,{x:575, y:400});
      score = 9;
    }

    if(score === 9){
      level1Img.addAnimation("normal",vishalImg);
    }

    if(keyCode === 32 && score === 9){
      Matter.Body.setPosition(ball10.body,{x:200, y:400});
    }

    if(gameState === LEVEL1PLAY && score === 9 && ball10.body.position.x > 540 && ball10.body.position.x < 610){
      Matter.Body.setPosition(ball10.body,{x:575, y:400});
      score = 10;
    }

    if(score === 10){
      winningSound.play();
      bg = createSprite(400,200,500,250)
      bg.addImage(greenGarden);
      bg.scale = 1.25;

      nextButton.mousePressed(()=>{
        gameState = LEVEL2;
      });
    }

    if(score === 0 && ball1.body.position.x < 540 && ball1.body.position.x > 610){
      score = 0;
    }

    if(score === 1 && ball2.body.position.x < 540 && ball2.body.position.x > 610){
      score = 1;
    }

    if(score === 2 && ball3.body.position.x < 540 && ball3.body.position.x > 610){
      score = 2;
    }

    if(score === 3 && ball4.body.position.x < 540 && ball4.body.position.x > 610){
      score = 3;
    }

    if(score === 4 && ball5.body.position.x < 540 && ball5.body.position.x > 610){
      score = 4;
    }

    if(score === 5 && ball6.body.position.x < 540 && ball6.body.position.x > 610){
      score = 5;
    }

    if(score === 6 && ball7.body.position.x < 540 && ball7.body.position.x > 610){
      score = 6;
    }

    if(score === 7 && ball8.body.position.x < 540 && ball8.body.position.x > 610){
      score = 7
    }

    if(score === 8 && ball9.body.position.x < 540 && ball9.body.position.x > 610){
      score = 8;
    }

    if(score === 9 && ball10.body.position.x < 540 && ball10.body.position.x > 610){
      score = 9;
    }
  
  }

  if(gameState === LEVEL2PLAY){
      //plantTrees = createButton("Plant Trees");
      //plantTrees.position(650,10);
      text("Score : " + treeScore, 550,25);

     //plantTrees.mousePressed(()=>{
      //tree1 = createSprite(random(100,700),random(225,400),70,100);
      //tree1.addImage(treeImg);
      //tree1.scale = 0.5;
      //treeScore = treeScore + 5; 
    //})

    if(treeScore > 49){
      nextButton.mousePressed(()=>{
        gameState = LEVEL3;
      });
    } 
  }

  if(gameState === LEVEL3){
    bg = createSprite(400,200,500,250);
    bg.addImage(greenGarden);
    bg.scale = 1.25;
  }

  if(gameState === LEVEL3PLAY){
    text("Score : " + level3Score,550,25);
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
  gameIntro1.display();
  l1.display();
  ground1.display();
  l2.display();
  l3.display();

}

function keyPressed(){
  if(gameState === LEVEL1PLAY && keyCode === UP_ARROW && score === 0){
    Matter.Body.applyForce(ball1.body, ball1.body.position, {x:100, y:-100});
  }

  if(gameState === LEVEL1PLAY && keyCode === UP_ARROW && score === 1){
    Matter.Body.applyForce(ball2.body, ball2.body.position, {x:100, y:-100});
  }

  if(gameState === LEVEL1PLAY && keyCode === UP_ARROW && score === 2){
    Matter.Body.applyForce(ball3.body, ball3.body.position, {x:100, y:-100});
  }

  if(gameState === LEVEL1PLAY && keyCode === UP_ARROW && score === 3){
    Matter.Body.applyForce(ball4.body, ball4.body.position, {x:100, y:-100});
  }

  if(gameState === LEVEL1PLAY && keyCode === UP_ARROW && score === 4){
    Matter.Body.applyForce(ball5.body, ball5.body.position, {x:100, y:-100});
  }

  if(gameState === LEVEL1PLAY && keyCode === UP_ARROW && score === 5){
    Matter.Body.applyForce(ball6.body, ball6.body.position, {x:100, y:-100});
  }

  if(gameState === LEVEL1PLAY && keyCode === UP_ARROW && score === 6){
    Matter.Body.applyForce(ball7.body, ball7.body.position, {x:100, y:-100});
  }

  if(gameState === LEVEL1PLAY && keyCode === UP_ARROW && score === 7){
    Matter.Body.applyForce(ball8.body, ball8.body.position, {x:100, y:-100});
  }

  if(gameState === LEVEL1PLAY && keyCode === UP_ARROW && score === 8){
    Matter.Body.applyForce(ball9.body, ball9.body.position, {x:100, y:-100});
  }

  if(gameState === LEVEL1PLAY && keyCode === UP_ARROW && score === 9){
    Matter.Body.applyForce(ball10.body, ball10.body.position, {x:100, y:-100});
  }
}