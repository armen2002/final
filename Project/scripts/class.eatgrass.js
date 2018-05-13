class Eatgrass extends LivingCreature {
constructor(x, y, index){
    super(x, y, index);
    this.multiply = 0;
	this.bazm = 0;
}


move(){
		var emptyCord = this.getDirections(0);

		var cord = random(emptyCord);
		

		if(cord){
			var x = cord[0];
			var y = cord[1];

			matrix[y][x] = 2;

			matrix[this.y][this.x] = 0;

			this.x = x;
			this.y = y;
		}
}



eat(){
		var emptyCord = this.getDirections(1);

		var cord = random(emptyCord);
		

		if(cord){
			var x = cord[0];
			var y = cord[1];

			matrix[y][x] = 2;

			matrix[this.y][this.x] = 0;

			this.x = x;
			this.y = y;
			for(var i in xotArr)
			{			
				if(x==xotArr[i].x && y==xotArr[i].y)
				{
      				xotArr.splice(i,1);
      				this.multiply++;
      				if(this.multiply == 5){
      					this.mull();
      					this.multiply = 0;
      				}
				}
				
			}   
		}
		else {
			this.move();
			this.bazm++;
			if(this.bazm==7){
				this.die();
				this.bazm = 0;
			}
		}
}

mull()
{
	var emptyCord = this.getDirections(0);
	var cord = random(emptyCord);
	if(cord){
		var x = cord[0];
		var y = cord[1];
		var eater = new Eatgrass(x,y,this.index);
		eatArr.push(eater);

		matrix[y][x] = 2;
		this.multiply = 0;
	}
}

die(){
		matrix[this.y][this.x] = 0;
		for(var i in eatArr)
		{			
			if(this.x==eatArr[i].x && this.y==eatArr[i].y)
			{
  				eatArr.splice(i,1);
  			}
		}   
	}
}


