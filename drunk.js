function Drunk(x, y, img) {
  this.x = x;
  this.y = y;
  this.img = img;
  this.speed = scl;

  this.show = function() {
    image(this.img, this.x, this.y);
  }

  this.move = function() {
    var randomizedx = round(random(-1, 1)) * scl;
    var randomizedy = round(random(-1, 1)) * scl;
    var resultx;
    var resulty;
    

    // X RANDOMIZED --------------------------
    for (var i = 0; i < tiles.length; i++) {
      if (this.x + scl === tiles[i].x && this.y === tiles[i].y) { // if bump into wall on the right
        this.speed = -scl;
        this.x = this.x + this.speed;
      } else
      if (this.x - scl === tiles[i].x && this.y === tiles[i].y) { // if bump into wall on the left
        this.speed = scl;
        this.x = this.x + this.speed;
      }
    }
      if (randomizedx < -scl / 2 && randomizedx >= -scl ) {
        var resultx = -scl;
        this.x = this.x + resultx;
      } else
      if (randomizedx < scl / 2 && randomizedx >= -scl / 2) {
        var resultx = 0;
        this.x = this.x + resultx;
      } else
      if (randomizedx <= scl && randomizedx >= scl / 2 ) {
        var resultx = scl;
        this.x = this.x + resultx;
      }


  // RANDOMIZED Y
  for (var j = 0; j < tiles.length; j++) {
    if (this.y + scl === tiles[j].y && this.x === tiles[j].x) { // bump into up wall
      this.speed = -scl;
      this.y = this.y + this.speed;
    }else

    if (this.y - scl === tiles[j].y && this.x === tiles[j].x) {
      this.speed = scl;
      this.y = this.y + this.speed;
    }
  }
  if (randomizedy < -scl / 2 && randomizedy >= -scl) {
    var resulty = -scl;
    this.y = this.y + resulty;
  }
  if (randomizedy < scl / 2 && randomizedy >= -scl / 2) {
    var resulty = 0;
    this.y = this.y + resulty;
  }
  if (randomizedy <= scl && randomizedy >= scl / 2) {
    var resulty = scl;
    this.y = this.y + resulty;
  }
}
}



// this was working but going through walls
// for (var i = 0; i < tiles.length; i++) {
//       if (this.x + scl === tiles[i].x && this.y === tiles[i].y) { // if bump into wall on the right
//         this.speed = -scl;
//         this.x = this.x + this.speed;
//       }
//     }

//     for (var i = 0; i < tiles.length; i++) {
//       if (this.x - scl === tiles[i].x && this.y === tiles[i].y) { // if bump into wall on the left
//         this.speed = scl;
//         this.x = this.x + this.speed;
//       }
//     }

//     if (randomizedx < -scl / 2 && randomizedx >= -scl) {
//       var resultx = -scl;
//       this.x = this.x + resultx;
//     }
//     if (randomizedx < scl / 2 && randomizedx >= -scl / 2) {
//       var resultx = 0;
//       this.x = this.x + resultx;
//     }
//     if (randomizedx <= scl && randomizedx >= scl / 2) {
//       var resultx = scl;
//       this.x = this.x + resultx;
//     }

//     // RANDOMIZED Y
//     for (var i = 0; i < tiles.length; i++) {
//       if (this.y + scl === tiles[i].y && this.x === tiles[i].x) { // bump into up wall
//         this.speed = -scl;
//         this.y = this.y + this.speed;
//       }
//     }

//     for (var i = 0; i < tiles.length; i++) {
//       if (this.y - scl === tiles[i].y && this.x === tiles[i].x) {
//         this.speed = scl;
//         this.y = this.y + this.speed;
//       }
//     }


//     if (randomizedy < -scl / 2 && randomizedy >= -scl) {
//       var resulty = -scl;
//       this.y = this.y + resulty;
//     }
//     if (randomizedy < scl / 2 && randomizedy >= -scl / 2) {
//       var resulty = 0;
//       this.y = this.y + resulty;
//     }
//     if (randomizedy <= scl && randomizedy >= scl / 2) {
//       var resulty = scl;
//       this.y = this.y + resulty;
//     }
//   }
// }
