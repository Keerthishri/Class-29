class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage ("sprites/sling1.png");
        this.sling2 = loadImage ("sprites/sling2.png");
        this.sling3 = loadImage ("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image (this.sling1, 250, 50, 50, 170)
        image (this.sling2, 215, 57, 50, 90)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke (48, 22, 8)
            if(pointA.x<270){
                strokeWeight(8);
            line(pointA.x-25, pointA.y, pointB.x-20, pointB.y+10);
            line(pointA.x-25, pointA.y, pointB.x+20, pointB.y+10);
            image (this.sling3, pointA.x-25, pointA.y-10, 10, 30)
            } else {
                strokeWeight(4);
            line(pointA.x+25, pointA.y, pointB.x-20, pointB.y+10);
            line(pointA.x+25, pointA.y, pointB.x+20, pointB.y+10);
            image (this.sling3, pointA.x+25, pointA.y-10, 10, 30)
            }
        }
    }
    
}