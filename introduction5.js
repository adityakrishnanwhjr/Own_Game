class Intro5{
    constructor(){
        this.text1 = createElement("h3");
    }

    display(){
        if(gameState === INTRO5){
            this.text1.html("Hi this is Ram's uncle Manoj. He will also help Ram to save this beautiful environment.");
            this.text1.position(10,25);
        }

        if(gameState === INTRO6){
            this.text1.hide();
        }
    }
}