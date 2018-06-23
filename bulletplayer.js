function Bullet(x, y, img) {
  this.x = x;
  this.y = y;
  this.speed=scl;
  this.img = img;

  this.show = function() {
      
      image(this.img, this.x, this.y);
  }
 
  this.move = function(){
      this.y = this.y + this.speed;
    }
  }