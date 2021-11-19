class level3{
    constructor(){
        this.text1 = createElement("h1");
        this.text2 = createElement("h1");
        this.text3 = createElement("h3");
        this.text4 = createElement("h3");
        this.text5 = createElement("h3");
        this.text6 = createElement("h3");
        this.text7 = createElement("h3");
        this.text8 = createElement("h3");
        this.text9 = createElement("h3");
        this.text10 = createElement("h3");
        this.text11 = createElement("h3");
        this.text12 = createElement("h3");
        this.text13 = createElement("h3");
        this.text14 = createElement("h3");
        this.text15 = createElement("h3");
        this.text16 = createElement("h3");
        this.text17 = createElement("h3");
        this.text18 = createElement("h3");
        this.text19 = createElement("h3");
        this.text20 = createElement("h3");
        this.text21 = createElement("h3");
        this.text22 = createElement("h3");
        this.text23 = createElement("h3");
        this.text24 = createElement("h1");
        this.biodegradable = createButton("Biodegradable");
        this.nonbiodegradable = createButton("Non Biodegradable");
    }

    display(){
        if(gameState === LEVEL3){
            this.text1.html("LEVEL 3");
            this.text1.position(375,25);

            this.text2.html("Instructions");
            this.text2.position(350,75);

            this.text3.html("You know that Biodegradable things should be thrown in the green bin and Non-Biodegradable");
            this.text3.position(10,125);

            this.text4.html("things should be thrown in the blue bin. Manoj, Geetha and Murthy have collected all the wastes");
            this.text4.position(10,145);
            
            this.text5.html("from their garden. But they have to put those wastes into two seperate dustbins to classify them as");
            this.text5.position(10,165);

            this.text6.html("Biodegradable or Non-Biodegradable. Can you help them ?");
            this.text6.position(10,185);

            this.text7.html("1. Some waste things will shown on the screen.")
            this.text7.position(10,215);

            this.text8.html("2. There will be two buttons on the screen: 'Biodegradable' and 'Non-Biodegradable'.");
            this.text8.position(10,235);

            this.text9.html("3. If a biodegradable waste is shown on the screen, then you should click the button");
            this.text9.position(10,255);

            this.text10.html("'Biodegradable'. If a Non-Biodegradable waste is shown on the screen, then you should click");
            this.text10.position(10,275);

            this.text11.html("the button 'Non-Biodegrable'.");
            this.text11.position(10,295);

            this.text12.html("4. For each correct answer 1 point will be awarded");
            this.text12.position(10,315);

            this.text13.html("5. If you score 10 points, the level will be completed.");
            this.text13.position(10,335);

            nextButton.mousePressed(()=>{
                this.text1.hide();
                this.text2.hide();
                this.text3.hide();
                this.text4.hide();
                this.text5.hide();
                this.text6.hide();
                this.text7.hide();
                this.text8.hide();
                this.text9.hide();
                this.text10.hide();
                this.text11.hide();
                this.text12.hide();
                this.text13.hide();
                gameState = LEVEL3PLAY;
            })
        }

        if(gameState === LEVEL3PLAY){
            this.biodegradable.position(200,300);
            this.nonbiodegradable.position(400,300);
            
            if(level3Score === 0){
                level3Img=createSprite(400,100,50,50);
                level3Img.addImage(fruitPeelImg);
                level3Img.scale = 0.25;
                this.text14.html("Banana Peel");
                this.text14.position(600,100)

                this.biodegradable.mousePressed(()=>{
                    level3Score = 1;
                    this.text14.hide();
                    this.text15.hide();
                    bg = createSprite(400,200,500,250);
                    bg.addImage(greenGarden);
                    bg.scale = 1.25;
                })

                this.nonbiodegradable.mousePressed(()=>{
                    level3Score = 0;
                    this.text15.html("Oops! It's wrong. Try again.");
                    this.text15.position(300,200);
                })
            }

            if(level3Score === 1){
                level3Img=createSprite(400,100,50,50);
                level3Img.addImage(plasticCanImg);
                level3Img.scale = 0.3;
                this.text16.html("Plastic can");
                this.text16.position(600,100);

                this.nonbiodegradable.mousePressed(()=>{
                    level3Score = 2;
                    this.text16.hide();
                    this.text17.hide();
                    bg = createSprite(400,200,500,250);
                    bg.addImage(greenGarden);
                    bg.scale = 1.25;
                })

                this.biodegradable.mousePressed(()=>{
                    level3Score = 1;
                    this.text17.html("Oops! It's wrong. Try again.");
                    this.text17.position(300,200);
                })
            }

            if(level3Score === 2){
                level3Img=createSprite(400,100,50,50);
                level3Img.addImage(paperImg);
                level3Img.scale = 0.5;
                this.text18.html("Paper");
                this.text18.position(600,100);

                this.biodegradable.mousePressed(()=>{
                    level3Score = 3;
                    this.text18.hide();
                    this.text19.hide();
                    bg = createSprite(400,200,500,250);
                    bg.addImage(greenGarden);
                    bg.scale = 1.25;
                })

                this.nonbiodegradable.mousePressed(()=>{
                    level3Score = 2;
                    this.text19.html("Oops! It's wrong. Try again.");
                    this.text19.position(300,200);
                })
            }

            if(level3Score === 3){
                level3Img=createSprite(400,100,50,50);
                level3Img.addImage(plasticBag);
                level3Img.scale = 0.5;
                this.text20.html("Plastic bag");
                this.text20.position(600,100);

                this.nonbiodegradable.mousePressed(()=>{
                    level3Score = 4;
                    this.text20.hide();
                    this.text21.hide();
                    bg = createSprite(400,200,500,250);
                    bg.addImage(greenGarden);
                    bg.scale = 1.25;
                })

                this.biodegradable.mousePressed(()=>{
                    level3Score = 3;
                    this.text21.html("Oops! It's wrong. Try again.");
                    this.text21.position(300,200);
                })
            }

            if(level3Score === 4){
                level3Img=createSprite(400,100,50,50);
                level3Img.addImage(juteBag);
                level3Img.scale = 0.3;
                this.text22.html("Jute bag");
                this.text22.position(600,100);

                this.biodegradable.mousePressed(()=>{
                    level3Score = 5;
                    this.text22.hide();
                    this.text23.hide();
                    bg = createSprite(400,200,500,250);
                    bg.addImage(greenGarden);
                    bg.scale = 1.25;
                })

                this.nonbiodegradable.mousePressed(()=>{
                    level3Score = 4;
                    this.text23.html("Oops! It's wrong. Try again.");
                    this.text23.position(300,200);
                })
            }

            if(level3Score === 5){
                this.biodegradable.hide();
                this.nonbiodegradable.hide();
                this.text24.html("LEVEL COMPLETED");
                this.text24.position(300,200);
                winningSound.play();
            }
        }
    }
}