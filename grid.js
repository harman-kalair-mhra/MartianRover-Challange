// make a ten by ten grid Array

function grid(x, y){
  var grid = [];
  
  for(i=1; i<=y; i++){
    var row = [];
    for(j=1; j<=x; j++){
    row.push(j)
  }
  grid.push(row)
  }
  return grid;
}

grid(10,10);