class Newtest {
    constructor(x, y, width, length){
        var options ={
            isStatic: false,
            restitution = 0.3,
            friction: 0,
            density: 1.2
        }
        this.body = Bodies.rectangle(x,y,width,length,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}