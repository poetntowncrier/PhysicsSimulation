
var angle = 0;
var slider;
var canvas;

function setup() {
  canvas =createCanvas(400, 400);
  canvas.parent('tree');
  canvas.position(20,20);
  slider1 = createSlider(0, TWO_PI, PI/4, 0.01);
  slider1.parent('tree');
  slider1.style('width','300px');
  slider1.position(500, 200);
  label1 = createDiv('angle');
  label1.parent('tree');
  label1.position(450,200);
  //slider1.parent(label1);
  slider2 = createSlider(0, 0.9, 0.3, 0.01);
  slider2.parent('tree');
  slider2.style('width','300px');
  slider2.position(500, 250);
  label2 = createDiv('ratio'); 
  label2.parent('tree');
  label2.position(450,250);
  //slider2.parent(label2);
}

function draw() {
  background(51,100,51);
  angle = slider1.value();
  ratio = slider2.value();
  stroke(255);
  translate(200,height);
  branch(150);
}
function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  
  if (len>4){
    push();
    rotate(angle);
    branch(len*ratio);
    pop();
    push();
    rotate(-angle);
    branch(len*ratio);
    pop();
  }


  //line(0,0,0, -len*0.618);
}
/*
var tree1 = function(p){
  var angle = 0;
  var slider1;
  var slider2;

  p.setup = function() {
    let cnv=p.createCanvas(400, 400);
    cnv.parent('tree');
    slider1 = p.createSlider(0, TWO_PI, PI/4, 0.01);
    slider1.style('width','300px');
    label1 = p.createDiv('angle');
    slider1.parent(label1);
    slider2 = p.createSlider(0, 0.9, 0.3, 0.01);
    slider2.style('width','300px');
    label2 = p.createDiv('ratio'); 
    slider2.parent(label2);
  }
  p.draw = function(){
    p.background(51,100,51);
  }
}
*/
