function arr(x){
  this.x = x;
  
  this.show = function(){
    var x = this.x*size;
    var y = this.x;
    noStroke;
    fill(255, 255, 255);
    rect(this.x, 0, x, y);
  }
}