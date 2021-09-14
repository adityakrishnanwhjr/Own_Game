class Intro4{
    constructor(){
        this.text1 = createElement("h3");
    }

    display(){
        if(gameState === INTRO4){
            this.text1.html("Hi this is Ram's aunt Geetha. She is also helping Ram to save this beautiful environment.");
            this.text1.position(10,25);
        }

        if(gameState === INTRO5){
            this.text1.hide();
        }
    }
}