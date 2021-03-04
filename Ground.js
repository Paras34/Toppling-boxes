class Ground{
    constructor(x,y,width,height){
        var groundOptions = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,groundOptions);
        World.add(world,this.body);
        
        this.height = height;
        this.width = width;
    }
       display(){
           var pos = this.body.position;

           rectMode(CENTER);
           fill("blue");
           rect(pos.x,pos.y,this.width,this.height);
       }
}