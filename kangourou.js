function Kangourou(x,y, img) {
this.x=x;
this.y=y;
this.speed=scl;
this.img=img;


  this.show = function() {
    // fill(0, 230, 100);
    // rect(this.x, this.y, scl, scl);
    image(this.img, this.x, this.y);
  }
    
// reversing direction when hitting canvas limits
    this.move = function() {
      for ( var i=0; i < tiles.length; i++){
      if (this.y+scl === tiles[i].y && this.x === tiles[i].x) { // bump into up wall
        this.speed = -scl;
      }
      if (this.y - scl === tiles[i].y && this.x === tiles[i].x) {
        this.speed = scl;
      }
      }
      this.y = this.y + this.speed;
    }
    
    
   
    
    
    
  }