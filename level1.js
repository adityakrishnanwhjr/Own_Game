class level1{
    constructor(){
        this.text1 = createElement("h1");
        this.text2 = createElement("h1");
        this.text3 = createElement("h3");
        this.text4 = createElement("h3");
        this.text5 = createElement("h3");
        this.text6 = createElement("h3");
        this.text7 = createElement("h1");
        this.text8 = createElement("h3")
        this.text9 = createElement("h3")
    }

    display(){
        if(gameState === LEVEL1){
            this.text1.html("LEVEL1");
            this.text1.position(375,25);
            this.text2.html("Instructions");
            this.text2.position(350,75)
            this.text8.html("Vishal, Ankush and Mangala are throwing the waste in dustbin. Please help them to put the waste");
            this.text8.position(10,125)
            this.text9.html("in the dustbin");
            this.text9.position(10,150)
            this.text3.html("1. Press space bar to bring the crumpled ball in position.");
            this.text3.position(10,175);
            this.text4.html("2. Then press the up arrow key to throw the crumpled ball in the dustbin.")
            this.text4.position(10,200);
            this.text5.html("3. There is also a scoring system. If you put 1 crumpled ball in the dustbin, the score will be");
            this.text5.position(10,225);
            this.text6.html("incremented by 1. If you score 10 points, this level will be completed.")
            this.text6.position(10,250);

            nextButton.mousePressed(()=>{
                gameState = LEVEL1PLAY;
                this.text1.hide();
                this.text2.hide();
                this.text3.hide();
                this.text4.hide();
                this.text5.hide();
                this.text6.hide();
                this.text8.hide();
                this.text9.hide();
            });
        }

        if(gameState === LEVEL1PLAY && score === 10){
            this.text7.html("LEVEL COMPLETED");
            this.text7.position(300,200);
        }

        if(gameState === LEVEL2){
            this.text7.hide();
        }
    }
}