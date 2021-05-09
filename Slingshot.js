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
        World.add(world, this.sling);
        this.sling1=loadImage ("sprites/sling1.png");
        this.sling2=loadImage ("sprites/sling2.png");
        this.sling3=loadImage ("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1, 200, 20);
        image(this.sling2, 170, 20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            //strokeWeight(4);
            stroke("#A67035");
            //line(pointA.x, pointA.y, pointB.x, pointB.y);
            
            if(pointA.x<200){
                strokeWeight(7);
                line (pointA.x-40, pointA.y+10, pointB.x-20, pointB.y+10);
                line (pointA.x-40, pointA.y+10, pointB.x+35, pointB.y+5);
                image(this.sling3, pointA.x-40, pointA.y+4,10,20);
            }

            else{
                strokeWeight(2);
                line (pointA.x+40, pointA.y+10, pointB.x-20, pointB.y+10);
                line (pointA.x+40, pointA.y+10, pointB.x+35, pointB.y+5);
                image(this.sling3, pointA.x+40, pointA.y+4,10,20);
            }

        }

        
    }
    
}