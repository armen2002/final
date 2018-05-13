class Wolf extends LivingCreature {
constructor(x, y, index){
    super(x, y, index);
    this.naxkinvandakNum = 0;
	this.multiply = 0;
	this.bazm = 0;
	this.kendani = 0;
}
new1Directions(){
this.directions = [
	[this.x - 2, this.y - 2],
	[this.x - 1, this.y - 2],
	[this.x    , this.y - 2],
	[this.x + 1, this.y - 2],
	[this.x + 2, this.y - 2],
	[this.x + 2, this.y - 1],
	[this.x + 2, this.y    ],
	[this.x + 2, this.y + 1],
	[this.x + 2, this.y + 2],
	[this.x + 1, this.y + 2],
	[this.x    , this.y + 2],
	[this.x - 1, this.y + 2],
	[this.x - 2, this.y + 2],
	[this.x - 2, this.y + 1],
	[this.x - 2, this.y    ],
	[this.x - 2, this.y - 1],			
	[this.x - 1, this.y - 1],
	[this.x    , this.y - 1],
	[this.x + 1, this.y - 1],
	[this.x - 1, this.y    ],
	[this.x + 1, this.y    ],
	[this.x - 1, this.y + 1],
	[this.x    , this.y + 1],
	[this.x + 1, this.y + 1]
	 ];
}
getDirections(t){
       this.new1Directions();
       return super.getDirections(t);
   }

move(){
		var emptyCord0 = this.getDirections(0);
		var emptyCord1 = this.getDirections(1);
		var emptyCord = emptyCord1.concat(emptyCord0);


		var cord = random(emptyCord);
		

		if(cord){

			var x = cord[0];
			var y = cord[1];

			

			matrix[this.y][this.x] = this.naxkinvandakNum;
			console.log(this.naxkinvandakNum);
			this.naxkinvandakNum = matrix[y][x];
			matrix[y][x] = 3;
			this.x = x;
			this.y = y;
		}
}



eat(){
	var emptyCord = this.getDirections(2);

		var cord = random(emptyCord);
		

		if(cord){
			var x = cord[0];
			var y = cord[1];

			matrix[y][x] = 3;

			matrix[this.y][this.x] = 0;

			this.x = x;
			this.y = y;
			for(var i in eatArr)
			{			
				if(x==eatArr[i].x && y==eatArr[i].y)
				{
      				eatArr.splice(i,1);
      				this.multiply++;
      				if(this.multiply == 5){
      					this.mull();
      					this.multiply=0;
      				}
				}
				
			}   
		}
		else {
			this.move();
			this.bazm++;
			if(this.bazm==15){
				this.die();
				this.bazm=0;
			}
			var emptyCord = this.getDirections(3);
			this.kendani++;

			var cord = random(emptyCord);
			if(cord){
			var x = cord[0];
			var y = cord[1];
				if(this.kendani == 8){
					var gayl = new Wolf(x,y,this.index);
				wolfArr.push(gayl);
				matrix[y][x] = 3;
				this.kendani = 0;
				}

				
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
	var gayl = new Wolf(x,y,this.index);
	wolfArr.push(gayl);
	matrix[y][x] = 3;
	this.multiply = 0;
}	
}



die(){
	matrix[this.y][this.x] = 0;
		for(var i in wolfArr)
		{			
			if(this.x==wolfArr[i].x && this.y==wolfArr[i].y )
			{
  				wolfArr.splice(i,1);
  			}
		}   
	}
}
