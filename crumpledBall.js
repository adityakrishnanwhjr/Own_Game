class crumpledBall{
    constructor(x,y,r){
      var options={
       isStatic:false,
       restitution:0,
       friction:50,
       density:1.2
      }
       this.image = loadImage("ball.png");
       this.x = x;
       this.y = y;
       this.r = r;
       this.body = Bodies.circle(x,y,this.r,options);
       World.add(world,this.body);
    }

    display(){
      var pos = this.body.position;

      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
      image(this.image,this.x,this.y,this.r,this.r);
      pop();
      //ellipseMode(CENTER);
      //ellipse(400,200,this.r,this.r)
    }
}