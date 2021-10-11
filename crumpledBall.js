class crumpledBall{
    constructor(x,y,r){
       this.image = loadImage("crumpledBall.js");
       this.r = r;
       this.body = Bodies.circle(x,y,this.r);
       World.add(world,this.body);
    }

    display(){
      imageMode(CENTER);
      image(this.image,0,0,this.r,50);
      ellipseMode(CENTER);
      ellipse(0,0,this.r,this.r)
    }
}