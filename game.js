function Game() {

  this.returnPlaying = function(){//callback when play again button hit
    location.reload();
    location.href = 'http://educationalgaming.org/';
  }

  this.showLegend = function() {
    var textsize = scl;
    var y = 48 * scl;
    textSize(textsize);
    fill(255);

    // BELOW GAME
    fill(255, 255, 51);
    text("LIVES LEFT:", 42 * scl, y + 2*scl);
    var l = player.life;
    text(l, 49 * scl, y +2*scl);
    //text("YOU :" , 10*scl, y);
    fill(255);
    text("CHECKPOINT REACHED:", 42 * scl, y + 4 * scl);
    var c = player.checkpoint;
    text(c, 55 * scl, y + 4 * scl);
    //text("INSTRUCTIONS :", scl, y);
    fill(51, 255, 255);
    text("INFOS COLLECTED:", 42 * scl, y);
    var i = player.infos;
    text(i, 53 * scl, y);
    fill(255);
    //-----------------------------------
    text("CREATED BY ", 64 * scl, y + 2 * scl)
    fill(0, 255, 0);
    text("PASCAL GUYON ", 71 * scl, y + 2 * scl);
    fill(255);
    textStyle(NORMAL);
    //-----------------------------------------------------------
    text("YOU  ", 69 * scl, 2 * scl);
    image(playerimage, 67 * scl, 1 * scl);
    text("PICK UP INFOS ", 69 * scl, 4 * scl);
    image(infosimage, 67 * scl, 3 * scl)
    text("PICK UP LIFE ", 69 * scl, 6 * scl);
    image(lifeimage, 67*scl, 5*scl);
    image(checkpointimage, 67 * scl, 7 * scl);
    text("CHECKPOINT ", 69 * scl, 8 * scl);
    text("VICTORY ", 69 * scl, 10 * scl);
    image(victoryimage, 67 * scl, 9 * scl);
    //ENEMIES
    fill(255, 0, 0);
    text("ENEMIES : ", 70 * scl, 14 * scl);
    fill(255);
    text("BOOMERANG", 69 * scl, 17 * scl); // called frog in my coding
    text("KANGOUROU", 69 * scl, 19 * scl);
    image(kangourouimage, 67 * scl, 18 * scl);
    text("CANNON", 69 * scl, 21 * scl);
    image(cannondownimage, 67 * scl, 20 * scl);
    text("INSECT", 69*scl, 23*scl );
    image(drunkimage, 67*scl, 22*scl);
    fill(130, random(0, 255), random(0, 255));
    ellipse(67 * scl + scl / 2, 16 * scl + scl / 2, scl, scl); //frog
    fill(255);

  //MUSICOIN PUBLICITY--------------------------------------
    textSize(14);
    fill(0, 255, 0);
    text("   THE WORLD'S 1ST GAME", 66*scl, 28*scl);
    fill(255);
    text("        WHERE THE MUSIC", 66*scl, 30*scl);
    fill(255);
    text("  COMPOSER IS PAID EACH ", 66*scl, 32*scl);
    text(" TIME THE GAME IS PLAYED ", 66*scl, 34*scl);
    text(" THANKS TO THE 1ST MUSIC  ", 66*scl, 36*scl);
    text("   BLOCKCHAIN:     ", 66*scl, 38*scl);
    fill(255,255,0);
    text("   MUSICOIN.  ", 73*scl, 38*scl);
    stroke(255);
    line(1106, 572, 1175, 572);
    stroke(0);

    fill(255);
    text("BITCOIN JAR", 66*scl, 44*scl)
  }

  this.showMoveEnemies = function() {
      for (var i = 0; i < kangourou.length; i++) { // move kangourous
        kangourou[i].show();
        kangourou[i].move();
      }
      for (var i = 0; i < frog.length; i++) { // move frog aka boomerang
        frog[i].show();
        frog[i].move();
      }
      for (var i = 0; i < bullet.length; i++) { // move frog aka boomerang
        bullet[i].show();
        bullet[i].move();
      }
      for (var i = 0; i < drunk.length; i++) {
      drunk[i].show();
      drunk[i].move();
      }
      for (var i = 0; i < cannondown.length; i++) { // move kangourous
        cannondown[i].show();
      }
    }

    this.showIntro = function() {
        textSize(32);
        fill(0, 255, 0); //green
        textAlign(CENTER);
        text("WELCOME TO PASCAL'S EDUCATIONAL GAME!", 40 * scl, 10 * scl);
        fill(255); //white
        textSize(15);
        fill(255, 0, 0); //red
        text("Play this game on a computer using any browser except SAFARI.", 40 * scl, 14 * scl);
        fill(255);
        text("Use the arrows on your keyboard to choose then hit ENTER to play!", 40 * scl, 16 * scl);

        textSize(15);
            fill(0, 255, 0); //green
        text("This is the world's 1st video game where the music composer (me!) is paid each time the game is played at no cost to the player.", 40 * scl, 43 * scl);
        fill(255); //white
        text("This is made possible by the world's 1st music streaming blockchain platform which I am an ambassador for: MUSICOIN.", 40 * scl, 45 * scl);
        fill(255, 0, 0); //red
        text("You'll hear the music when you start playing the game!", 40 * scl, 47 * scl)
        fill(255); //white
        text("Created by Pascal Guyon", 40*scl, 51*scl);

        textSize(20);
        if (arrowintro.y === 19 * scl) {
          fill(0, 255, 0); //green
          text("Tips to grow your social media accounts", 40 * scl, 20 * scl);
          fill(255); //white
          text("Other tips coming soon", 40 * scl, 24 * scl);
        }
        if (arrowintro.y === 23 * scl) {
          fill(255); //green
          text("Tips to grow your social media accounts", 40 * scl, 20 * scl);
          fill(0, 255, 0); //white
          text("Other tips coming soon", 40 * scl, 24 * scl);
        }
        textAlign(LEFT);
      }





    // LOSE - WIN ----------------------------------------------
  this.showGameOver = function() {

    // NO INFOS COLLECTED
    if (player.infos ===0 &&scene !=4){
      textSize(32);
      fill(255, 0, 0);
      textAlign(CENTER);
      text("GAME OVER", 40 * scl, 10 * scl);

      var playAgain;
      textSize(20);
      fill(255);
      text("Oh no! You were not able to collect any informations...", 40 * scl, 12 * scl);
      text("You can do this! Come on, try again!", 40 * scl, 18 * scl);
      playAgain = createButton('PLAY AGAIN');
      playAgain.class('button');
      playAgain.position(35*scl, 20*scl);
      playAgain.mousePressed(this.returnPlaying);
    }

    // INFOS COLLECTED BUT DIDN'T WIN
    if (player.infos===1 && scene != 4){ // infos collected but didn't win
    location.reload();
    location.href = 'http://educationalgaming.org/132871373/index.html';
    }
    if (player.infos===2 && scene != 4){ // infos collected but didn't win
    location.reload();
    location.href = 'http://educationalgaming.org/218580877/index.html';
    }
    if (player.infos===3 && scene != 4){ // infos collected but didn't win
    location.reload();
    location.href = 'http://educationalgaming.org/349052694/index.html';
    }
    if (player.infos===4 && scene != 4){ // infos collected but didn't win
    location.reload();
    location.href = 'http://educationalgaming.org/431398574/index.html';
    }
    if (player.infos===5 && scene != 4){ // infos collected but didn't win
    location.reload();
    location.href = 'http://educationalgaming.org/540628461/index.html';
    }
    if (player.infos===6 && scene != 4){ // infos collected but didn't win
    location.reload();
    location.href = 'http://educationalgaming.org/632437012/index.html';
    }
    if (player.infos===7 && scene != 4){ // infos collected but didn't win
    location.reload();
    location.href = 'http://educationalgaming.org/721175020/index.html';
    }
  }

  this.showYouWon = function() {
// FINISHED THE GAME BUT DIDN'T COLLECT ALL THE INFOS
      if (player.infos<7 && scene===4 ){
            if (player.infos===1 ){ // infos collected but didn't win
            location.reload();
            location.href = 'http://educationalgaming.org/132871373/index.html';
            }
            if (player.infos===2 ){ // infos collected but didn't win
            location.reload();
            location.href = 'http://educationalgaming.org/218580877/index.html';
            }
            if (player.infos===3 ){ // infos collected but didn't win
            location.reload();
            location.href = 'http://educationalgaming.org/349052694/index.html';
            }
            if (player.infos===4 ){ // infos collected but didn't win
            location.reload();
            location.href = 'http://educationalgaming.org/431398574/index.html';
            }
            if (player.infos===5 ){ // infos collected but didn't win
            location.reload();
            location.href = 'http://educationalgaming.org/540628461/index.html';
            }
            if (player.infos===6 ){ // infos collected but didn't win
            location.reload();
            location.href = 'http://educationalgaming.org/632437012/index.html';
            }
      }
// FINISHED THE GAME AND COLLECTED ALL INFOS
      if (player.infos===7 && scene===4){
          location.reload();
          location.href = 'http://educationalgaming.org/w97877124/index.html';
        }
    }


    //---------------------------------------------------------------------
  this.message = function() {
    if ((player.x < 5 * scl && player.y > 39 * scl) && player.life === 3 && player.grabbedlife ===0) {
      fill(255);
      textSize(15);
      text("MESSAGE:", scl, 48 * scl);
      fill(0, 255, 0);
      text("This is you:       . ", 7*scl, 48 * scl);
      image(playerimage, 190, 47 * scl);
      image(infosimage, 9 * scl, 49 * scl);
      text("Collect the infos         to learn how to massively grow your Social Media following! ", scl, 50 * scl);
      text("Use arrows on your keyboard to move & avoid the ennemies...  ", scl, 52 * scl);

      //image(cannondownimage, 29 * scl, 51 * scl);
      image(kangourouimage, 31 * scl, 51 * scl);
      fill(130, random(0, 255), random(0, 255));
      ellipse(33 * scl + scl / 2, 51 * scl + scl / 2, scl, scl);
      image(cannondownimage, 29*scl, 51*scl);
       image(drunkimage, 35*scl, 51*scl);
    }

    if (displayInstructions === 1) {
      fill(255);
      text("MESSAGE : ", scl, 48 * scl);
      fill(255, 255, 0);
      text("YEAHHHH ! YOU GAINED 1 LIFE ! ", scl, 50 * scl);
    }
    if (displayInstructions === 2) {
      fill(255);
      text("MESSAGE : ", scl, 48 * scl);
      fill(0, 255, 255);
      text("GREAT ! YOU COLLECTED 1 INFO ! ", scl, 50 * scl);
    }
    if (displayInstructions === 3) {
      fill(255);
      text("MESSAGE : ", scl, 48 * scl);
      fill(0, 255, 255);
      text("NICE ! YOU REACHED A CHECKPOINT ! ", scl, 50 * scl);
      text("NEXT TIME YOU LOSE A LIFE YOU'LL RESTART FROM HERE ! ", scl, 50 * scl + 2 * scl);
    }

    if (displayInstructions === 4) {
      fill(255);
      text("WARNING : ", scl, 48 * scl);
      fill(255, 0, 0);
      text("OUCH !!! YOU LOST A LIFE, BE CAREFUL !  ", scl, 50 * scl);
    }
    if (displayInstructions === 5) {
      fill(255);
      text("WARNING : ", scl, 48 * scl);
      fill(255, 0, 0);
      text("THE FROG GOT YOU !!! YOU LOST A LIFE, BE CAREFUL ! ", scl, 50 * scl);
    }
  }
}
