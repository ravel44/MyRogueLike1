function Frog(x, y) {
  this.x = x;
  this.y = y;
  this.speed = scl;

  this.show = function() {
    fill(130, random(0,255), random(0,255));
    ellipse(this.x+scl/2, this.y+scl/2, scl, scl);
  }



  // reversing direction when hitting canvas limits
  // this.move = function(){
  //   if ( this.x>width){
  //   this.speed = -scl;
  //   }
  //   if ( this.x<0){
  //     this.speed = scl;
  //   }
  //   this.x = this.x + this.speed;
  // }
  
    this.move = function(){
      for ( var i =0; i< tiles.length; i++){
    if ( this.x+scl === tiles[i].x && this.y === tiles[i].y){ // if bump into wall on the right
    this.speed = -scl;
    }
    if ( this.x-scl === tiles [i].x && this.y === tiles[i].y){ // if bump into wall on the left
      this.speed = scl;
    }
      }
    this.x = this.x + this.speed;
  }







}