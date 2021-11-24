class level2{
    constructor(){
        this.text1 = createElement("h1");
        this.text2 = createElement("h1");
        this.text3 = createElement("h3");
        this.text4 = createElement("h3");
        this.text5 = createElement("h3");
        this.text6 = createElement("h3");
        this.text7 = createElement("h3");
        this.text8 = createElement("h1");
        this.plantTrees = createButton("Plant Trees");
    }

    display(){
        if(gameState === LEVEL2){
            this.text1.html("LEVEL 2");
            this.text1.position(375,25);
            this.text2.html("Instructions");
            this.text2.position(350,75);
            this.text3.html("There are very few trees in Ram's garden. So Ram's parents Seetha and Krishna plan to plant");
            this.text3.position(10,125);
            this.text4.html("trees in their garden. Can you help them ?");
            this.text4.position(10,150);
            this.text5.html("1. There will be a button at the top of the screen named as 'Plant Trees'. If you click that button");
            this.text5.position(10,175);
            this.text6.html("a new tree will be planted in the garden.");
            this.text6.position(10,200);
            this.text7.html("2. For each tree 5 points will be awarded. If you score 50 points, this level be completed.")
            this.text7.position(10,225);

            nextButton.mousePressed(()=>{
                this.text1.hide();
                this.text2.hide();
                this.text3.hide();
                this.text4.hide();
                this.text5.hide();
                this.text6.hide();
                this.text7.hide();
                gameState = LEVEL2PLAY; 
            });
        }

        if(gameState === LEVEL2PLAY){
            this.plantTrees.position(650,10);
            seetha = createSprite(200,250,50,50);
            seetha.addImage(seethaImg);
            //seetha.visible = true;
            seetha.scale=0.5;

            krishna = createSprite(150,250,50,50);
            krishna.addImage(krishnaImg);
            krishna.scale=0.5;
        
            this.plantTrees.mousePressed(()=>{
                tree1 = createSprite(random(100,700),random(225,400),70,100);
                tree1.addImage(treeImg);
                tree1.scale = 0.5;
                treeScore = treeScore + 5; 
              })

            if(treeScore > 49){
                this.plantTrees.hide();
                this.text8.html("LEVEL COMPLETED");
                this.text8.position(300,200);
                winningSound.play();
            }
        }

        if(gameState === LEVEL3){
            this.text8.hide();
        }
    }
}