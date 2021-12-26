class Intro1{
    constructor(){
        this.text1=createElement("h3");
        this.text2=createElement("h3");
        this.text3=createElement("h3");
        this.text4=createElement("h3");
    }

    display(){
        this.text1.html("Hi I'am Ram. I'am very scared of future after seeing the dream!!! So we only have the ");
        this.text1.position(10,25);
        this.text1.style('color:white');

        this.text2.html("responsibility to save this beautiful and greenary environment. Because of trees only we ");
        this.text2.position(10,50);
        this.text2.style('color:white');

        this.text3.html("get oxygen and water, and there is also a threat of global warming. ");
        this.text3.position(10,75);
        this.text3.style('color:white');

        this.text4.html("So we should save our nature. Come lets move into the game.");
        this.text4.position(10,100);
        this.text4.style('color:white');

        if(gameState===INTRO2){
           this.text1.hide();
           this.text2.hide();
           this.text3.hide();
           this.text4.hide();
        }
    }
}