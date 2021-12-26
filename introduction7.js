class Intro7{
    constructor(){
        this.text1 = createElement("h3");
    }

    display(){
        if(gameState === 7){
            this.text1.html("Hi this is Ram's friend Ankush. He also helps Ram to save this beautiful environment.")
            this.text1.position(10,25);
            this.text1.style('color:white');
        }

        if(gameState === 8){
            this.text1.hide();
        }
    }
}