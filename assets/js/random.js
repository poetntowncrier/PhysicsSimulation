var sketch = function(p){
  var x = 10, y = 10;
  var cols, rows;
  var grid;
  var spacing = 20;
  var past;
  var started = 0;

  p.setup = function(){
    // set up canvas & lines
    let cnv = p.createCanvas(400, 400);
    cnv.parent('rwalk');
    p.background(255);
    p.frameRate(3);
    p.stroke('green');
    for (i = 20; i <= 380; i += 20){
      p.line(i, 20, i, 380);
    }
    for (j = 20; j <= 380; j+= 20){
      p.line(20, j, 380, j)
    }
    
    // set up visiting grid

    cols = p.floor(p.width / spacing);
    rows = p.floor(p.height / spacing);
    
    grid = p.makeGrid(cols, rows);
    
    p.noLoop();

  }

  p.draw = function(){
    if (started){
      if (past){
        p.stroke('green');
        p.strokeWeight(10);
        p.point(past[0], past[1]);
        grid[past[0], past[1]] = 0;
       
      }
      
      if (grid[x][y]){
        p.stroke('red');
        p.strokeWeight(10);
        p.point(x * spacing, y * spacing);
        past = [x * spacing, y * spacing];
      }
      else{
        p.stroke('green');
        p.strokeWeight(10);
        p.point(x * spacing, y * spacing);
        grid[x][y] = 1;
      }
    
      var r = p.floor(p.random(0, 4));
      p.jump(r);
    }
  }

  p.jump = function(r){
    switch(r){
      case 0:   
        if (x >= 18) break;
        x++;
        break;
      case 1:
        if (x <= 2) break;
        x--;
        break;
      case 2:
        if (y >= 18) break;
        y++;
        break;
      case 3:
        if (y <= 2) break;
        y--;
        break;
    }
 }
 
  p.make2DArray = function(cols, rows){
    let arr = new Array(cols);
    for (var i = 0; i < arr.length; i++){
      arr[i] = new Array(rows);
    }
    return arr;
  }

  p.makeGrid = function(cols, rows){
    let grid_ = p.make2DArray(cols, rows);
    for (var i = 0; i < cols; i++)
      for (var j = 0; j < rows; j++){
        grid_[i][j] = 0;
      }
    return grid_;
  }

  p.mouseClicked = function(){
    let xc = p.mouseX / 20;
    let yc = p.mouseY / 20;
    if (p.round(xc) >= 1 && p.round(xc) <= 19 && p.round(yc) >= 1 && p.round(yc) <= 19){
      x = p.round(xc);
      y = p.round(yc);
    }
  }

  p.keyTyped = function(){
    if (p.key === 'p'){
      p.noLoop();
    }
    if (p.key === 's'){
      p.loop();
    }
  }

  p.start = function(){
    started = 1;
    p.loop();
  }

  p.resetwalk = function(){
    started = 0;
    p.setup();
  }
 }

var myp5 = new p5(sketch);








/* global mode:
var x, y;
var cols, rows;
var grid;
var spacing = 20;
var past;
var started = 0;

function setup() {
  // set up canvas & lines
  let cnv = createCanvas(400, 400);
  cnv.parent('rwalk');
  background(255);
  frameRate(1);
  stroke('green');
  for (i = 20; i <= 380; i += 20){
    line(i, 20, i, 380);
  }
  for (j = 20; j <= 380; j+= 20){
    line(20, j, 380, j)
  }
  
  // set up visiting grid

  cols = floor(width / spacing);
  rows = floor(height / spacing);
  
  grid = makeGrid(cols, rows);
  
  x = 10;
  y = 10;

  noLoop();
}

function draw() {
if (started){
  if (past){
    stroke('green');
    strokeWeight(10);
    point(past[0], past[1]);
    grid[past[0], past[1]] = 0;
   
  }
  
  if (grid[x][y]){
    stroke('red');
    strokeWeight(10);
    point(x * spacing, y * spacing);
    past = [x * spacing, y * spacing];
  }
  else{
    stroke('green');
    strokeWeight(10);
    point(x * spacing, y * spacing);
    grid[x][y] = 1;
  }

  var r = floor(random(0, 4));
  jump(r);
  
  function jump(r){
    switch(r){
      case 0:   
        if (x >= 18) break;
        x++;
        break;
      case 1:
        if (x <= 2) break;
        x--;
        break;
      case 2:
        if (y >= 18) break;
        y++;
        break;
      case 3:
        if (y <= 2) break;
        y--;
        break;
    }
 } 
}
}

function make2DArray(cols, rows){
  let arr = new Array(cols);
  for (var i = 0; i < arr.length; i++){
    arr[i] = new Array(rows);
  }
  return arr;
}

function makeGrid(cols, rows){
  let grid_ = make2DArray(cols, rows);
  for (var i = 0; i < cols; i++)
    for (var j = 0; j < rows; j++){
      grid_[i][j] = 0;
    }
  return grid_;
}

function mouseClicked(){
    let xc = mouseX / 20;
    let yc = mouseY / 20;
    if (round(xc) >= 1 && round(xc) <= 19 && round(yc) >= 1 && round(yc) <= 19){
      x = round(xc);
      y = round(yc);
    }
  }

function keyTyped(){
  if (key === 'p'){
    noLoop();
  }
  if (key === 's'){
    loop();
  }
}

function start(){
  started = 1;
  loop();
}

function resetwalk(){
  started = 0;
  setup();
}*/