class Polygon{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			friction:1,
			density:1.2,
		}
		this.x = x;
        this.y = y;
        this.r = r;
        this.image=loadImage("polygon.png");
		this.body=Bodies.circle(this.x, this.y,this.r,options)
		World.add(world, this.body);

    }
    
    fly(){
        this.polygon.bodyA = null
    }
	display()
	{
	        	
			var pos=this.body.position;		
			push()
		    translate(pos.x,pos.y);
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.image, 0, 0, 50, 50)
			pop()
			
	}

}