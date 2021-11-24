class gameIntro{
    constructor(){
        this.text1 = createElement("h3");
        this.text2 = createElement("h3");
        this.text3 = createElement("h2");
        this.text4 = createElement("h3");
        this.text5 = createElement("h3");
        this.text6 = createElement("h3");
        this.text7 = createElement("h3");
    }

    display(){
        if(gameState === ENDINTRO){
          this.text1.html("These are my lovely family members and neighbours. My family members and neighbours");
          this.text1.position(10,25);

          this.text2.html("are going to help me to clean my house and environment.");
          this.text2.position(10,50);
        }
        
        if(gameState === INSTRUCTION){
            this.text1.hide();
            this.text2.hide();

            this.text3.html("Game Instructions");
            this.text3.position(400,15);

            this.text4.html("1. This game totally contains 3 levels.");
            this.text4.position(10,40);

            this.text5.html("2. Each level has a specific target. If you reach the target, you will reach the next level.");
            this.text5.position(10,65);

            this.text6.html("3. This game has a scoring system for each level. So you can keep a check on your score.");
            this.text6.position(10,90);

            this.text7.html("4. If you finish the 5th level, then game will be finished and you will be appreciated.");
            this.text7.position(10,115);
        }

        if(gameState === LEVEL1){
            this.text3.hide();
            this.text4.hide();
            this.text5.hide();
            this.text6.hide();
            this.text7.hide();
        }
    }
}