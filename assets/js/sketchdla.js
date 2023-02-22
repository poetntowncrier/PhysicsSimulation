var tree=[]
//变量点集
var walker;
var walkers=[];
var r=4;
function setup() {
  canvas=createCanvas(500, 500);
  canvas.parent('dlaa');
  canvas.position(200,200);
  tree[0]=new Walker(width/2, height/2,true);
  //tree.parent('dlaa');
  for (var i=0;i<400;i++){
    walkers[i]=new Walker();
  }
  slider1 = createSlider(2, 200, 10, 1);
  slider1.parent('dlaa');
  slider1.style('width','300px');
  slider1.position(200, 700);
  num=slider1.value();
  //加入100个walker
  //slider1=CreateSlider
  
}

function draw(){
  background(0);
  
    
  for (var i=0;i<tree.length;i++){
    tree[i].show();
    ///strokeWeight(r);
    ///stroke(255);
    ///point(tree[i].x,tree[i].y);
  }
  for (var i=0;i<walkers.length;i++){
    walkers[i].show()
  }
  /**
  for (var n=0;n<10;n++){
    for (let i = walkers.length - 1; i >= 0; i--){
      walkers[i].walk();
      if (walkers[i].checkStuck(tree)) {
        tree.push(walkers[i]);
        walkers.splice(i, 1);
      }
      //使用splice在walkers中删除一些元素添加到tree里
    
    }    
  */

  for (let n = 0; n < slider1.value(); n++) {
    for (let i = walkers.length - 1; i >= 0; i--) {
      walkers[i].walk();
      if (walkers[i].checkStuck(tree)) {
        
        tree.push(walkers[i]);
        walkers.splice(i, 1);
      }
    }
  } 
}
function Walker(x,y,stuck){
  this.pos=createVector(x || random(width),y || random(height));
  this.stuck=stuck;
  
  this.walk=function(){
    var vel=p5.Vector.random2D();
    this.pos.add(vel);
    this.pos.x=constrain(this.pos.x,0,width);
    this.pos.y=constrain(this.pos.y,0,height);
  }
  this.checkStuck=function(others){
    for (var i=0;i<others.length;i++){
      var d=p5.Vector.dist(this.pos,others[i].pos);
      if (d<r*2){
        return true;
        break;
      }
    }
    return false;
  }
  this.show=function(){
    //strokeWeight(r);
    stroke(255,100);
    ellipse(this.pos.x,this.pos.y,r*2,r*2);
  }
}
  
