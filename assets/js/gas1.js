var gas1 = function(p){
  var x1, y1;
  var cols, rows;
  var grid1;
  var spacing = 10;
  var past1;
  var started = 0;


  p.setup = function() {
    // set up canvas & lines
    let cnv = p.createCanvas(400, 400);
    cnv.parent('gwalk1');
    p.background(255);
    p.stroke('green');
    p.line(20, 20, 20, 380);
    p.line(20, 20, 380, 20);
    p.line(20, 380, 380, 380);
    p.line(380, 20, 380, 380);
    // set up visiting grid

    cols = p.floor(p.width / spacing);
    rows = p.floor(p.height / spacing);
    
    grid1 = p.makeGrid(cols, rows);
    
    x1 = 20;
    y1 = 20;

    p.noLoop();


  }

  p.draw = function() {
    if (started){
      if (past1){
        p.stroke('green');
        p.strokeWeight(10);
        p.point(past1[0], past1[1]);
        grid1[past1[0], past1[1]] = 0;
      }

      
      if (grid1[x1][y1]){
        p.stroke('red');
        p.strokeWeight(10);
        p.point(x1 * spacing, y1 * spacing);
        past1 = [x1 * spacing, y1 * spacing];
      }
      else{
        p.stroke('green');
        p.strokeWeight(10);
        p.point(x1 * spacing, y1 * spacing);
        grid1[x1][y1] = 1;
      }

      var r1 = p.floor(p.random(0, 7));

      p.jump1(r1);
    }
  }

  p.jump1 = function(r){
    switch(r){
      case 0:   
        if (x1 >= 19) break;
        x1++;
        break;
      case 1:
        if (x1 <= 2) break;
        x1--;
        break;
      case 2:
        if (y1 >= 38) break;
        y1++;
        break;
      case 3:
        if (y1 <= 2) break;
        y1--;
        break;
      case 4:   
        if (x1 >= 38 || y1 >= 38) break;
        x1++;
        y1++;
        break;
      case 5:
        if (x1 <= 2 || x1 <= 2) break;
        x1--;
        y1--;
        break;
      case 6:
        if (x1 <= 2 || y1 >= 38) break;
        x1--;
        y1++;
        break;
      case 7:
        if (x1 >= 38 ||y1 <= 2) break;
        x1++;
        y1--;
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
      var g1 = document.getElementById("gas1");
      var m1 = Number(g1.value);

      p.frameRate(p.sqrt(100 / m1));
      p.loop();
    }

    p.resetwalk = function(){
      started = 0;
      p.setup();
    }

}

var gas2 = function(p){
  var x2, y2;
  var cols, rows;
  var grid2;
  var spacing = 10;
  var past2;
  var started = 0;

  p.setup = function() {
      // set up canvas & lines
      let cnv = p.createCanvas(400, 400);
      cnv.parent('gwalk2');
      p.background(255);
      p.stroke('green');
      p.line(20, 20, 20, 380);
      p.line(20, 20, 380, 20);
      p.line(20, 380, 380, 380);
      p.line(380, 20, 380, 380);
      // set up visiting grid
    
      cols = p.floor(p.width / spacing);
      rows = p.floor(p.height / spacing);
      
      grid2 = p.makeGrid(cols, rows);

      x2 = 20;
      y2 = 20;

      p.noLoop();
    
  }
    
  p.draw = function() {
      if (started){
        
        if (past2){
          p.stroke('blue');
          p.strokeWeight(10);
          p.point(past2[0], past2[1]);
          grid2[past2[0], past2[1]] = 0;
        
        }
        
        if (grid2[x2][y2]){
          p.stroke('yellow');
          p.strokeWeight(10);
          p.point(x2 * spacing, y2 * spacing);
          past2 = [x2 * spacing, y2 * spacing];
        }
        else{
          p.stroke('blue');
          p.strokeWeight(10);
          p.point(x2 * spacing, y2 * spacing);
          grid2[x2][y2] = 1;
        }
    
        var r2 = p.floor(p.random(0, 7));
    
        p.jump2(r2);
      }
  }

  p.jump2 = function(r){
      switch(r){
          case 0:   
          if (x2 >= 38) break;
          x2++;
          break;
          case 1:
          if (x2 <= 2) break;
          x2--;
          break;
          case 2:
          if (y2 >= 38) break;
          y2++;
          break;
          case 3:
          if (y2 <= 2) break;
          y2--;
          break;
          case 4:   
          if (x2 >= 38 || y2 >= 38) break;
          x2++;
          y2++;
          break;
          case 5:
          if (x2 <= 2 || x2 <= 2) break;
          x2--;
          y2--;
          break;
          case 6:
          if (x2 <= 2 || y2 >= 38) break;
          x2--;
          y2++;
          break;
          case 7:
          if (x2 >= 38 || y2 <= 2) break;
          x2++;
          y2--;
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
      var g2 = document.getElementById("gas2");
      var m2 = Number(g2.value);
      p.frameRate(p.sqrt(100 / m2));
      p.loop();
    }

    p.resetwalk = function(){
      started = 0;
      p.setup();
    }
  

}

var gsdf1 = new p5(gas1);
var gsdf2 = new p5(gas2);

/*global mode
var x1, y1, x2, y2;
var cols, rows;
var grid1, grid2;
var spacing = 10;
var past1, past2;
var started = 0;

var g1 = document.getElementById("gas1");
var g2 = document.getElementById("gas2");
var value1 = Number(g1.value);
var value2 = Number(g2.value);

function setup() {
  // set up canvas & lines
  let cnv = createCanvas(400, 400);
  cnv.parent('gwalk');
  background(255);
  frameRate(4);
  stroke('green');
  line(20, 20, 20, 380);
  line(20, 20, 380, 20);
  line(20, 190, 380, 190);
  line(20, 380, 380, 380);
  line(380, 20, 380, 380);
  // set up visiting grid

  cols = floor(width / spacing);
  rows = floor(height / spacing);
  
  grid1 = makeGrid(cols, rows);
  grid2 = makeGrid(cols, rows);
  
  x1 = 2;
  y1 = 2;
  
  x2 = 2;
  y2 = 19;

  noLoop();

}

function draw() {
  if (started){
    if (past1){
      stroke('green');
      strokeWeight(10);
      point(past1[0], past1[1]);
      grid1[past1[0], past1[1]] = 0;
    }
    
    if (past2){
      stroke('blue');
      strokeWeight(10);
      point(past2[0], past2[1]);
      grid2[past2[0], past2[1]] = 0;
    
    }
    
    if (grid1[x1][y1]){
      stroke('red');
      strokeWeight(10);
      point(x1 * spacing, y1 * spacing);
      past1 = [x1 * spacing, y1 * spacing];
    }
    else{
      stroke('green');
      strokeWeight(10);
      point(x1 * spacing, y1 * spacing);
      grid1[x1][y1] = 1;
    }
    
    if (grid2[x2][y2]){
      stroke('yellow');
      strokeWeight(10);
      point(x2 * spacing, y2 * spacing);
      past2 = [x2 * spacing, y2 * spacing];
    }
    else{
      stroke('blue');
      strokeWeight(10);
      point(x2 * spacing, y2 * spacing);
      grid2[x2][y2] = 1;
    }

    var r1 = floor(random(0, 7));
    var r2 = floor(random(0, 7));

    jump1(r1);
    jump2(r2);
    
    function jump1(r){
      switch(r){
        case 0:   
          if (x1 >= 19) break;
          x1++;
          break;
        case 1:
          if (x1 <= 2) break;
          x1--;
          break;
        case 2:
          if (y1 >= 38) break;
          y1++;
          break;
        case 3:
          if (y1 <= 2) break;
          y1--;
          break;
        case 4:   
          if (x1 >= 38 || y1 >= 38) break;
          x1++;
          y1++;
          break;
        case 5:
          if (x1 <= 2 || x1 <= 2) break;
          x1--;
          y1--;
          break;
        case 6:
          if (x1 <= 2 || y1 >= 38) break;
          x1--;
          y1++;
          break;
        case 7:
          if (x1 >= 38 ||y1 <= 2) break;
          x1++;
          y1--;
          break;
        }
      }
      
      function jump2(r){
      switch(r){
        case 0:   
          if (x2 >= 38) break;
          x2++;
          break;
        case 1:
          if (x2 <= 2) break;
          x2--;
          break;
        case 2:
          if (y2 >= 38) break;
          y2++;
          break;
        case 3:
          if (y2 <= 2) break;
          y2--;
          break;
        case 4:   
          if (x2 >= 38 || y2 >= 38) break;
          x2++;
          y2++;
          break;
        case 5:
          if (x2 <= 2 || x2 <= 2) break;
          x2--;
          y2--;
          break;
        case 6:
          if (x2 <= 2 || y2 >= 38) break;
          x2--;
          y2++;
          break;
        case 7:
          if (x2 >= 38 || y2 <= 2) break;
          x2++;
          y2--;
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