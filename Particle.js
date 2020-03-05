function Particle() {
  this.x = 100;
  this.y = 99;
  //   this.show = function(){
  //       point(this.x, this.y)
  //   }
}

Particle.prototype.show = function() {
  point(this.x, this.y);
};

var p;
var v;
function setup() {
  createCanvas(600, 300);
  p = new Particle();

  v = createVector(3, 4);
}
