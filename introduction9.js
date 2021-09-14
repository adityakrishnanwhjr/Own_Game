class Intro9{
    constructor(){
        this.text1 = createElement("h3")
    }

    display(){
        if(gameState === INTRO9){
             this.text1.html("Hi this is Ram's neighbour Murthy. He also helps Ram to save this beautiful environment");
             this.text1.position(10,25);
        }

        if(gameState === ENDINTRO){
            this.text1.hide();
        }
    }
}