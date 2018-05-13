var matrix = [
            ];


var x = 45;
var y = 45;

for(var i = 0;i<y;i++){
  matrix[i] = [];
  for(var j = 0;j<x;j++){
    matrix[i][j] = 0;
  }
}

var xotCount = x*y*30/100;

for(var u = 0;u<xotCount;u++){
  var xx = Math.floor(Math.random()*x);
  var yy = Math.floor(Math.random()*y);
  if(matrix[yy][xx] == 0){
    matrix[yy][xx] = 1;
  }
  else{
    u--;
  }
}

var eatCount = x*y*5/100;

for(var u = 0;u<eatCount;u++){
  var xx = Math.floor(Math.random()*x);
  var yy = Math.floor(Math.random()*y);
  if(matrix[yy][xx] == 0){
    matrix[yy][xx] = 2;
  }
  else{
    u--;
  }
}

var wolfCount = x*y*0.2/100;

for(var u = 0;u<wolfCount;u++){
  var xx = Math.floor(Math.random()*x);
  var yy = Math.floor(Math.random()*y);
  if(matrix[yy][xx] == 0){
    matrix[yy][xx] = 3;
  }
  else{
    u--;
  }
}

var mahCount = x*y*0.0001/100;

for(var u = 0;u<mahCount;u++){
  var xx = Math.floor(Math.random()*x);
  var yy = Math.floor(Math.random()*y);
  if(matrix[yy][xx] == 0){
    matrix[yy][xx] = 4;
  }
  else{
    u--;
  }
}
var side = 19;
var xotArr = [];
var eatArr = [];
var wolfArr = [];
var mahArr = [];

function setup() {
    frameRate(2);
    createCanvas(x * side, y * side);
    background('#acacac');

    for(var i = 0; i < matrix.length; i++){
      for(var j = 0; j < matrix[i].length; j++){
        if(matrix[i][j] == 1){
          var xotik  = new Grass(j, i, 1);
          xotArr.push(xotik);
        }
        else if(matrix[i][j] == 2)
        {
          var eatgrass = new Eatgrass(j,i,2);
          eatArr.push(eatgrass);
        }
        else if(matrix[i][j] == 3)
        {
            var wolf1 = new Wolf(j,i,3);
            wolfArr.push(wolf1);
        }
        else if(matrix[i][j] == 4)
        {
            var mah2 = new Death(j,i,4);
            mahArr.push(mah2);
        }
      }
    } 


}
function draw() {
      background('#acacac');
  for(var i in xotArr){
    xotArr[i].mul();
  }
  for(var i in mahArr){
    mahArr[i].die();
  }
     for(var i in mahArr){
    mahArr[i].die1();
  }
    for(var i in mahArr){
    mahArr[i].die2();
  }

  for(var i = 0; i < matrix.length; i++){
    for(var j = 0; j < matrix[i].length; j++){
      if(matrix[i][j] == 1){
        fill("green");
        rect(j * side, i * side, side, side);
      }
      else if(matrix[i][j] == 2){
        fill("yellow");
        rect(j * side, i * side, side, side);
      }
      else if(matrix[i][j] == 3){
        fill("MediumBlue");
        rect(j * side, i * side, side, side);        
      }
      else if(matrix[i][j] == 4){
        fill("black");
        rect(j * side, i * side, side, side);
      }
       else if(matrix[i][j] == 0){
        fill('#acacac');
        rect(j * side, i * side, side, side);
      }

    }
  }
  for(var i in eatArr){
    eatArr[i].eat();
    

  }
  for(var i in wolfArr){
    wolfArr[i].eat();
  }
  for(var i in mahArr){
    mahArr[i].move();
  }

}