class Rope {
    constructor(body1,body2,offSetX,offSetY){
        this.offsetX=offsetX
		this.offsetY=offsetY
        var options = {
            bodyA : body1,
            bodyB : body2,
            pointB : {x:this.offSetX,y:offSetY} 
        }
        //this.offSetX = offSetX;
       // this.offSetY = offSetY;
        this.rope = Constraint.create(options);
        World.add(world,options);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(2);
        fill("yellow");
        line(pointA.x,pointA.y,pointB.x+this.offSetX,pointB.y+this.offSetY);
    }
}
