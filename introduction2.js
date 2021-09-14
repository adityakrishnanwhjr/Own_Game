class Intro2{
    constructor(){
        this.text1 = createElement("h3");
    }

    display(){
        if(gameState === INTRO2){
            this.text1.html("Hi this is Ram's mother Seetha. She is also helping Ram to save this beautiful environment.");
            this.text1.position(10,25);
        }

        if(gameState === INTRO3){
            this.text1.hide();
        }
        
    }
}