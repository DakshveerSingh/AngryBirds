class Slingshot{
    constructor(body,point){
        var options = {
            bodyA : body,
            pointB : point,
            length : 10,
            stiffness : 0.4
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            push();
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }
    }
}