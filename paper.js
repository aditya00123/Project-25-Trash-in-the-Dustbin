class paper {

    constructor(x,y) {
        this.x = x;
        this.y = y;

        var options= {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        
        this.body = Bodies.circle(x,y,40,options);

        world.add(world, this.body);

    }
 
    display() {
        
        circle(x,y,40);
    }
}