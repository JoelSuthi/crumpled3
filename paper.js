   class Paper {
   constructor(x,y,R){ 
    var options = { 
    isStatic:false, 
    restitution:0.2, 
    friction:1.0,
    density:0.2
    }
   this.body = Bodies.circle(x,y,R,options); 
   this.R = R; 
   this.x = x; 
   this.y = y; 
   this.image = loadImage("paper.png");
   World.add(world, this.body); 
   } 
   display(){ 
    var pos =this.body.position; 
    var angle = this.body.angle;
    fill("white");
    //ellipse(pos.x,pos.y,this.R,this.R);
    imageMode (CENTER);
    //push();
    //translate(pos.x, pos.y);
   // rotate(angle); 
    image(this.image,pos.x,pos.y,this.R,this.R); 
    //pop(); 
    } 
    };