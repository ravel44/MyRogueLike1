function Life(x,y, img){
  this.x=x;
  this.y=y;
  this.img=img;
  
  this.show=function(){
    //imageMode(CENTER);
    image(this.img, this.x, this.y);
  }
  
}