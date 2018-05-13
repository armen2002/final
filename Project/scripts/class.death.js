class Death extends LivingCreature {
constructor(x, y, index){
    super(x, y, index);
    this.multiply = 0;
	this.naxkinvandakNum = 0;
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
				this.naxkinvandakNum = matrix[y][x];
				matrix[y][x] = 4;
				this.x = x;
				this.y = y;
			}
	}
	die(){

for(var i = 0;i<matrix.length;i++){
  for(var j = 0;j<matrix[i].length;j++){
		  	var emptyCord = this.getDirections(3);
			var cord = random(emptyCord);
			if(cord){
				var x = cord[0];
				var y = cord[1];
				matrix[this.y][this.x] = 0;
				matrix[y][x] = 4;
				for(var k in wolfArr){
					if(wolfArr[k].x == x && wolfArr[k].y == y){
						wolfArr.splice(k,1);
					}
				}
				this.x = x;
				this.y = y;
	 	 		}
	 	 		if(wolfArr[i]==25){
		 	 			for(var k in mahArr){
						if(mahArr[k].x == x && mahArr[k].y == y){
							mahArr.splice(k,1);
						}
					}
	 	 		}

			}
		}
	}
	die1(){

for(var i = 0;i<matrix.length;i++){
  for(var j = 0;j<matrix[i].length;j++){
		  	var emptyCord = this.getDirections(2);
			var cord = random(emptyCord);
			if(cord){
				var x = cord[0];
				var y = cord[1];
				matrix[this.y][this.x] = 0;
				matrix[y][x] = 4;
				for(var k in eatArr){
					if(eatArr[k].x == x && eatArr[k].y == y){
						eatArr.splice(k,1);
					}
				}
				this.x = x;
				this.y = y;
	 	 		}
			}
		}
	}
		die2(){

for(var i = 0;i<matrix.length;i++){
  for(var j = 0;j<matrix[i].length;j++){
		  	var emptyCord = this.getDirections(1);
			var cord = random(emptyCord);
			if(cord){
				var x = cord[0];
				var y = cord[1];
				matrix[this.y][this.x] = 0;
				matrix[y][x] = 4;
				for(var k in xotArr){
					if(xotArr[k].x == x && xotArr[k].y == y){
						xotArr.splice(k,1);
					}
				}
				this.x = x;
				this.y = y;
	 	 		}
			}
		}
	}
}








