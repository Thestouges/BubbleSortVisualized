var cols;
var list = [];
var barsize = 10;
var rndstack = [];
var sorter;

function setup() {
  createCanvas(400,400);
  cols = width/barsize;
  
  for (var i = 0; i < cols; i++) {
    var data = new List(i);
    list.push(data);
  }
  shuffling(list);
  sorter = new Sorter();
  sorter.initBubble();
}

function draw() {
  background(0);
  sorter.Display();
  sorter.Bubble();
}

function mouseClicked(){
  shuffling(list);
  sorter.Reset();
}

function List(x){
  this.data = x
  this.access = false;
  
  this.GetData = function(){
    return this.data;
  }
  
  this.SetAccess = function(){
    this.access = true;
  }
  
  this.ResetAccess = function(){
    this.accessed = false;
  }
}

function Sorter(){
  this.size;
  this.curr;
  this.result;
  
  this.Reset = function(){
    this.size = list.length-1;
    this.curr = 0;
  }
  
  this.Display = function(){
    for (var i = 0; i < cols; i++) {
      if(this.curr == i)
        fill(200,0,0);
      else
        fill(200,200, 200);
      rect(i*barsize,height/cols*list[i].GetData(), barsize, width);
    }
  }
  
  this.initBubble = function(){
    this.size = list.length-1;
    this.curr = 0;
  }
  
  this.Bubble = function(){
    if(this.curr < this.size)
      if(list[this.curr].GetData() > list[this.curr+1].GetData()){
        var temp = list[this.curr];
        list[this.curr] = list[this.curr+1];
        list[this.curr+1] = temp;
      }
    this.curr++;
    if(this.curr >= this.size){
      this.size--;
      this.curr = 0;
    }
  }
}

function shuffling(array) {
    var tmp, current, top = array.length;

    if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
    }

    return array;
}