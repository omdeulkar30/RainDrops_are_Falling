class Raindrops{
    constructor(x, y,r){
     // super(x,y,12);
  //    this.image = loadImage("sprites/wood1.png");
      this.visiblity =255
      
     // var maxDrops=100
      this.maxDrops=[ ]
   this.raindropsImage=loadImage("sprites/rainDrops.png") 
   var options = {
    'restitution':1,
    'friction':0.1,
    'density':1.0
}
this.body = Bodies.circle(x, y, r, options);
this.r = r;
World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed);
     // super.display()
       push();
    
        image(this.image, this.body.position.x, this.body.position.y, this.r);
        pop();
     
      
     /* if(this.body.velocity.x>=3){
        var position=[this.body.position.x, this.body.position.y]
        this.trajectory.push(position)  
      }
     */
   
  for(var I = 0;I<this.maxDrops; I=I+1){
  image(this.raindropsImage, this.maxDrops[I][0], this.maxDrops[I][1])
    }
  }
  };
  