class Trash {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body1 = Bodies.rectangle(x,y,width,height,options);
      this.body2 = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("trash.png");
      this.body3 = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;

      World.add(world, this.body1);
      World.add(world, this.body2);
      World.add(world, this.body3);
    }
    display(){
    var pos = this.body2.position;
      rectMode(CENTER);
      rect(pos.x, pos.y,this.width,this.height);
      fill("black");
      imageMode(CENTER);
      image(this.image,pos.x,pos.y-80,150,150);
  
    }
  };