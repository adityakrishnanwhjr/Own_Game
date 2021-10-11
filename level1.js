class level1{
    constructor(){
        this.text1 = createElement("h1");
    }

    display(){
        if(gameState === LEVEL1){
            this.text1.html("LEVEL1");
            this.text1.position(400,200);
        }
    }
}