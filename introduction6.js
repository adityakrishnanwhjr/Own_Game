class Intro6{
    constructor(){
        this.text1 = createElement("h3");
    }

    display(){
        if(gameState === 6){
            this.text1.html("Hi this is Ram's cousin Vishal. He also helps Ram to save this beautiful environment.");
            this.text1.position(10,25);
        }

        if(gameState === 7){
            this.text1.hide();
        }
    }
}