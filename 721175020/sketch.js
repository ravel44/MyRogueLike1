var canvas;
var scl=15;


function setup() {
  canvas = createCanvas(1200, 800);
  canvas.position(0,0);
  canvas.style('z-index', '-1');

};


function draw() {
background(32, 32, 32);

        textSize(32);
        fill(0, 255, 0); //green
        textAlign(CENTER);
        text("BIG CONGRATS YOU COLLECTED ALL THE INFOS!!!", 40 * scl, 10 * scl);

        fill(255); //white
        textSize(20);
        text("But you didn't reach the end of the game...Try again!", 40 * scl, 14 * scl);



         text("Or enter your email below to receive the infos you collected", 40 * scl, 31 * scl);
         textSize(15);
         text("You'll get them within 5 minutes!", 40 * scl, 33 * scl);
};
