class Intro3{
    constructor(){
        this.text1 = createElement("h3")
    }

    display(){
        if(gameState === INTRO3){
            this.text1.html("Hi this is Ram's father Krishna. He is also helping Ram to save this beautiful environment.");
            this.text1.position(10,25);
            this.text1.style('color:white');
        }

        if(gameState === INTRO4){
            this.text1.hide();
        }
    }
}