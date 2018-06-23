function Interrogation(x,y,img){
  this.x=x;
  this.y=y;
  this.img=img;
  
  this.show=function(){
    image(this.img, this.x, this.y);
  }
}