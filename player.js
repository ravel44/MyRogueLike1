function Player(x, y, img) {
  this.x = x;
  this.y = y;
  this.life = 3;
  this.checkpoint = 0;
  this.level = 3;
  this.infos = 0;
  this.img = img;
  this.grabbedlife=0;

  this.show = function() {
    // fill(255, 0, 0);
    // rect(this.x, this.y, scl, scl);
    image(this.img, this.x, this.y);
  }

  this.lostlife = function() {
    this.life--;

    // RELOCATING DEPENDING ON CHECKPOINT
    if ( player.checkpoint === 0){
    this.x = playerInitialX;
    this.y = playerInitialY;
    }
    if ( player.checkpoint === 1){
    this.x = 20*scl;
    this.y = 24*scl;
    }
    if ( player.checkpoint === 2){
    this.x = 6*scl;
    this.y = 3*scl;
    }
    if ( player.checkpoint === 3){
    this.x = 19*scl;
    this.y = 21*scl;
    }
     if ( player.checkpoint === 4){
    this.x = 38*scl;
    this.y = 36*scl;
    }
    if ( player.checkpoint === 5){
    this.x = 60*scl;
    this.y = 29*scl;
    }

  }


  this.pickup = function(something) {
    if (this.x === something.x && this.y === something.y) {
      return true;
    } else {
      return false;
    }
  }


  // BUMPING INTO THINGS---------------------------------------------------
  // boolean function
  this.bumpinto = function(other) {
    if (this.x === other.x && this.y === other.y) {
      return true;
    } else {
      return false;
    }
  }

  this.bumpIntoUpWall = function(wall) {
    if (this.x === wall.x && this.y - scl === wall.y) {
      return true;
    } else {
      return false;
    }
  }

  this.bumpIntoDownWall = function(downwall) {
    if (this.x === downwall.x && this.y + scl === downwall.y) {
      return true;
    } else {
      return false;
    }
  }

  this.bumpIntoRightWall = function(rightwall) {
    if (this.x + scl === rightwall.x && this.y === rightwall.y) {
      return true;
    } else {
      return false;
    }
  }

  this.bumpIntoLeftWall = function(leftwall) {
    if (this.x - scl === leftwall.x && this.y === leftwall.y) {
      return true;
    } else {
      return false;
    }
  }



}
