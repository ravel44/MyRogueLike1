var scl = 15; //scale
var game;
// WALLS
var tiles = [];
var player;
var playerimage;
var playerDirection;
var playerInitialX = 2 * scl;
var playerInitialY = 43 * scl;
var victory = [];
var victoryimage;
var life = [];
var lifeimage;
var checkpoint = [];
var checkpointimage;
//var enemies
var kangourou = [];
var kangourouimage;
var drunk = [];
var drunkimage;
var frog = [];
var bullet = [];
var bulletimage;
var cannondown = [];
var cannondownimage;
var interrogation = [];
var interrogationimage;
var infos = [];
var infosimage;
var bitcoinimage;
var bitcoin;
var bulletTrigger = []; // randomize trigger
var emailEntered = 0;
var scene=1;
var arrowintro;
var arrowintroimage;

var triggerNewEnnemies1;

var displayInstructions;
var winSwitch = 0;

function preload() {

  lifeimage = loadImage('images/life.png');
  playerimage = loadImage('images/player.png');
  checkpointimage = loadImage('images/checkpoint.png');
  victoryimage = loadImage('images/victory.png');
  cannondownimage = loadImage('images/cannondown.png');
  kangourouimage = loadImage('images/kangourou.png');
  interrogationimage = loadImage('images/interrogation.png');
  infosimage = loadImage('images/infos.png');
  bulletimage = loadImage('images/bullet.png');
  drunkimage = loadImage('images/drunk.png');
  bitcoinimage = loadImage('images/bitcoinadress.png');
  arrowintroimage =loadImage('images/arrowintro.png');
}

function setup() {
  createCanvas(1200, 800);

    frameRate(10)
      // OBJECTS
    game = new Game();
    // fullscreen();
    victory[0] = new Victory(16 * scl, 43 * scl, victoryimage);
    player = new Player(playerInitialX, playerInitialY, playerimage);
    bitcoin = new Bitcoin(1090, 609, bitcoinimage)

    arrowintro = new Arrowintro(25 *scl, 19 *scl, arrowintroimage);

    interrogation[0] = new Interrogation(13 * scl, 6 * scl, interrogationimage);
    interrogation[1] = new Interrogation(49 * scl, 18 * scl, interrogationimage);
    // INFOS
    infos[0] = new Infos(10 * scl, 30 * scl, infosimage);
    infos[1] = new Infos(21 * scl, 35 * scl, infosimage);
    infos[2] = new Infos(5 * scl, 12 * scl, infosimage);
    infos[3] = new Infos(20 * scl, scl, infosimage);
    infos[4] = new Infos(5 * scl, 19 * scl, infosimage);
    infos[5] = new Infos(35 * scl, 26 * scl, infosimage);
    infos[6] = new Infos(31 * scl, 9 * scl, infosimage);

    //LIFE
    life[0] = new Life(8 * scl, 30 * scl, lifeimage);
    life[1] = (new Life(4 * scl, 21 * scl, lifeimage));
    life[2] = (new Life(25 * scl, scl, lifeimage));
    life[3] = (new Life(23 * scl, 40 * scl, lifeimage));
    life[4] = (new Life(33 * scl, 13 * scl, lifeimage));
    life[5] = (new Life(42 * scl, 39 * scl, lifeimage));
    checkpoint[0] = new Checkpoint(20 * scl, 24 * scl, checkpointimage);
    checkpoint[1] = new Checkpoint(6 * scl, 3 * scl, checkpointimage);
    checkpoint[2] = new Checkpoint(19 * scl, 21 * scl, checkpointimage);
    checkpoint[3] = new Checkpoint(38 * scl, 36 * scl, checkpointimage);
    checkpoint[4] = new Checkpoint(60 * scl, 29 * scl, checkpointimage);

    //ENEMIES
    kangourou[0] = new Kangourou(5 * scl, 43 * scl, kangourouimage);
    kangourou[1] = new Kangourou(15 * scl, 30 * scl, kangourouimage);
    kangourou[2] = new Kangourou(9 * scl, 15 * scl, kangourouimage);
    kangourou[3] = new Kangourou(7 * scl, 20 * scl, kangourouimage);
    kangourou[4] = new Kangourou(40 * scl, 20 * scl, kangourouimage);
    kangourou[5] = new Kangourou(59 * scl, 4 * scl, kangourouimage);
    kangourou[6] = new Kangourou(35 * scl, 5 * scl, kangourouimage);
    kangourou[7] = new Kangourou(7 * scl, 24 * scl, kangourouimage);

    drunk[0] = new Drunk(20 * scl, 20 * scl, drunkimage);
    drunk[1] = new Drunk(35 * scl, 8 * scl, drunkimage);
    drunk[2] = new Drunk(49 * scl, 39 * scl, drunkimage);
    drunk[3] = new Drunk(45 * scl, 15 * scl, drunkimage);
    frog[0] = new Frog(6 * scl, 38 * scl);
    frog[1] = new Frog(8 * scl, 41 * scl);
    frog[2] = new Frog(3 * scl, 11 * scl);
    frog[3] = new Frog(6 * scl, 14 * scl);
    frog[4] = new Frog(16 * scl, 35 * scl);
    frog[5] = new Frog(30 * scl, 27 * scl);
    frog[6] = new Frog(61 * scl, 24 * scl);
    frog[7] = new Frog(40 * scl, 43 * scl);
    frog[8] = new Frog(62 * scl, 26 * scl);
    frog[9] = new Frog(24 * scl, 9 * scl);
    frog[10] = new Frog(4 * scl, 25 * scl);
    frog[11] = new Frog(12 * scl, 16 * scl);
    frog[12] = new Frog(55 * scl, 44 * scl);
    frog[13] = new Frog(25 * scl, 44 * scl);
    frog[14] = new Frog(25 * scl, 38 * scl);
    frog[15] = new Frog(22 * scl, 36 * scl);


    cannondown[0] = new Cannondown(4 * scl, 33 * scl, cannondownimage);
    cannondown[1] = new Cannondown(13 * scl, 26 * scl, cannondownimage);
    cannondown[2] = new Cannondown(63 * scl, scl, cannondownimage);
    cannondown[3] = new Cannondown(58 * scl, 29 * scl, cannondownimage);
    cannondown[3] = new Cannondown(58 * scl, 29 * scl, cannondownimage);
    cannondown.push(new Cannondown(29 * scl, 1 * scl, cannondownimage));
    cannondown.push(new Cannondown(45 * scl, 29 * scl, cannondownimage));
    cannondown.push(new Cannondown(46 * scl, 29 * scl, cannondownimage));
    cannondown.push(new Cannondown(47 * scl, 29 * scl, cannondownimage));
    cannondown.push(new Cannondown(33 * scl, 16 * scl, cannondownimage));
    cannondown.push(new Cannondown(34 * scl, 16 * scl, cannondownimage));
    cannondown.push(new Cannondown(2 * scl, 1 * scl, cannondownimage));
    cannondown.push(new Cannondown(23 * scl, 18 * scl, cannondownimage));
    cannondown.push(new Cannondown(24 * scl, 18 * scl, cannondownimage));

    //MAIN WALLS---------------------------------------------------
    fill(255);
    for (var i = 0; i < 65; i++) {
      var x = i * scl;
      tiles[i] = new Tile(x, 0); // walls horizontal
    }
    for (var i = 0; i < 65; i++) {
      var x = i * scl;
      tiles.push(new Tile(x, 45 * scl)); // walls horizontal
    }
    for (var i = 0; i < 44; i++) {
      var y = scl + i * scl;
      tiles.push(new Tile(0, y)); // walls vertical
    }
    for (var i = 0; i < 44; i++) {
      var y = scl + i * scl;
      tiles.push(new Tile(64 * scl, y)); // walls vertical
    }
    //tiles.push(new Tile(60*scl, 35*scl));
    // INSIDE WALLS---------------------------------------------------
    for (var i = 0; i < 3; i++) {
      var x = scl + i * scl;
      tiles.push(new Tile(x, 40 * scl)); // walls horizontal
    }
    for (var i = 0; i < 5; i++) {
      var y = 40 * scl + i * scl;
      tiles.push(new Tile(6 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 6; i++) {
      var y = 35 * scl + i * scl;
      tiles.push(new Tile(5 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 7; i++) {
      var y = 33 * scl + i * scl;
      tiles.push(new Tile(2 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 9; i++) {
      var x = 2 * scl + i * scl;
      tiles.push(new Tile(x, 32 * scl)); // walls horizontal
    }
    for (var i = 0; i < 6; i++) {
      var y = 32 * scl + i * scl;
      tiles.push(new Tile(10 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 2; i++) {
      var y = 39 * scl + i * scl;
      tiles.push(new Tile(10 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 2; i++) {
      var y = 43 * scl + i * scl;
      tiles.push(new Tile(10 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 7; i++) {
      var y = 33 * scl + i * scl;
      tiles.push(new Tile(14 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 4; i++) {
      var y = 41 * scl + i * scl;
      tiles.push(new Tile(14 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 4; i++) {
      var y = 28 * scl + i * scl;
      tiles.push(new Tile(7 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 5; i++) {
      var x = 8 * scl + i * scl;
      tiles.push(new Tile(x, 28 * scl)); // walls horizontal
    }
    for (var i = 0; i < 6; i++) {
      var y = 28 * scl + i * scl;
      tiles.push(new Tile(12 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 7; i++) {
      var x = 15 * scl + i * scl;
      tiles.push(new Tile(x, 33 * scl)); // walls horizontal
    }
    for (var i = 0; i < 11; i++) {
      var y = 22 * scl + i * scl;
      tiles.push(new Tile(21 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 16; i++) {
      var x = 5 * scl + i * scl;
      tiles.push(new Tile(x, 22 * scl)); // walls horizontal
    }
    for (var i = 0; i < 3; i++) {
      var x = 3 * scl + i * scl;
      tiles.push(new Tile(x, 23 * scl)); // walls horizontal
    }
    for (var i = 0; i < 11; i++) {
      var y = 22 * scl + i * scl;
      tiles.push(new Tile(21 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 7; i++) {
      var y = 16 * scl + i * scl;
      tiles.push(new Tile(3 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 5; i++) {
      var x = 15 * scl + i * scl;
      tiles.push(new Tile(x, 24 * scl)); // walls horizontal
    }
    for (var i = 0; i < 6; i++) {
      var x = 10 * scl + i * scl;
      tiles.push(new Tile(x, 25 * scl)); // walls horizontal
    }
    for (var i = 0; i < 2; i++) {
      var y = 26 * scl + i * scl;
      tiles.push(new Tile(11 * scl, y)); // walls vertical
    }
    tiles.push(new Tile(15 * scl, 31 * scl));
    for (var i = 0; i < 2; i++) {
      var y = 12 * scl + i * scl;
      tiles.push(new Tile(3 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 4; i++) {
      var y = 7 * scl + i * scl;
      tiles.push(new Tile(3 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 10; i++) {
      var y = 8 * scl + i * scl;
      tiles.push(new Tile(7 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 3; i++) {
      var x = 4 * scl + i * scl;
      tiles.push(new Tile(x, 17 * scl)); // walls horizontal
    }
    for (var i = 0; i < 3; i++) {
      var x = 4 * scl + i * scl;
      tiles.push(new Tile(x, 8 * scl)); // walls horizontal
    }
    tiles.push(new Tile(13 * scl, 36 * scl));
    for (var i = 0; i < 25; i++) {
      var x = 20 * scl + i * scl;
      tiles.push(new Tile(x, 42 * scl)); // walls horizontal
    }
    for (var i = 0; i < 7; i++) {
      var x = 15 * scl + i * scl;
      tiles.push(new Tile(x, 41 * scl)); // walls horizontal
    }
    for (var i = 0; i < 4; i++) {
      var x = 23 * scl + i * scl;
      tiles.push(new Tile(x, 43 * scl)); // walls horizontal
    }
    for (var i = 0; i < 3; i++) {
      var x = 29 * scl + i * scl;
      tiles.push(new Tile(x, 43 * scl)); // walls horizontal
    }
    for (var i = 0; i < 3; i++) {
      var x = 29 * scl + i * scl;
      tiles.push(new Tile(x, 43 * scl)); // walls horizontal
    }
    tiles.push(new Tile(19 * scl, 44 * scl));
    for (var i = 0; i < 2; i++) {
      var x = 35 * scl + i * scl;
      tiles.push(new Tile(x, 44 * scl)); // walls horizontal
    }
    tiles.push(new Tile(19 * scl, 44 * scl));
    for (var i = 0; i < 20; i++) {
      var x = 8 * scl + i * scl;
      tiles.push(new Tile(x, 13 * scl)); // walls horizontal
    }
    for (var i = 0; i < 10; i++) {
      var y = 3 * scl + i * scl;
      tiles.push(new Tile(27 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 17; i++) {
      var y = scl + i * scl;
      tiles.push(new Tile(30 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 2; i++) {
      var y = scl + i * scl;
      tiles.push(new Tile(6 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 4; i++) {
      var y = 4 * scl + i * scl;
      tiles.push(new Tile(6 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 20; i++) {
      var y = 4 * scl + i * scl;
      tiles.push(new Tile(60 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 8; i++) {
      var y = 22 * scl + i * scl;
      tiles.push(new Tile(59 * scl, y)); // walls vertical
    }
    tiles.push(new Tile(10 * scl, 44 * scl));
    for (var i = 0; i < 20; i++) {
      var x = 39 * scl + i * scl;
      tiles.push(new Tile(x, 28 * scl)); // walls horizontal
    }
    for (var i = 0; i < 8; i++) {
      var y = 29 * scl + i * scl;
      tiles.push(new Tile(39 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 5; i++) {
      var y = 36 * scl + i * scl;
      tiles.push(new Tile(17 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 5; i++) {
      var y = 34 * scl + i * scl;
      tiles.push(new Tile(19 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 5; i++) {
      var y = 36 * scl + i * scl;
      tiles.push(new Tile(21 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 10; i++) {
      var y = 29 * scl + i * scl;
      tiles.push(new Tile(22 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 7; i++) {
      var y = scl + i * scl;
      tiles.push(new Tile(24 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 8; i++) {
      var y = scl + i * scl;
      tiles.push(new Tile(23 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 9; i++) {
      var y = scl + i * scl;
      tiles.push(new Tile(22 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 10; i++) {
      var y = scl + i * scl;
      tiles.push(new Tile(21 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 8; i++) {
      var y = 2 * scl + i * scl;
      tiles.push(new Tile(50 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 8; i++) {
      var y = 4 * scl + i * scl;
      tiles.push(new Tile(47 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 6; i++) {
      var y = scl + i * scl;
      tiles.push(new Tile(45 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 6; i++) {
      var y = scl + i * scl;
      tiles.push(new Tile(51 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 2; i++) {
      var y = 14 * scl + i * scl;
      tiles.push(new Tile(20 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 3; i++) {
      var y = 18 * scl + i * scl;
      tiles.push(new Tile(19 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 10; i++) {
      var x = 20 * scl + i * scl;
      tiles.push(new Tile(x, 17 * scl));
    } // walls horizontal
    for (var i = 0; i < 10; i++) {
      var y = 27 * scl + i * scl;
      tiles.push(new Tile(37 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 10; i++) {
      var y = 32 * scl + i * scl;
      tiles.push(new Tile(40 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 6; i++) {
      var y = 22 * scl + i * scl;
      tiles.push(new Tile(40 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 15; i++) {
      var y = 16 * scl + i * scl;
      tiles.push(new Tile(36 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 7; i++) {
      var y = 4 * scl + i * scl;
      tiles.push(new Tile(56 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 9; i++) {
      var y = 5 * scl + i * scl;
      tiles.push(new Tile(54 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 4; i++) {
      var y = 2 * scl + i * scl;
      tiles.push(new Tile(47 * scl, y)); // walls vertical
    }

    for (var i = 0; i < 3; i++) {
      var y = 3 * scl + i * scl;
      tiles.push(new Tile(44 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 3; i++) {
      var y = 2 * scl + i * scl;
      tiles.push(new Tile(37 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 4; i++) {
      var y = 3 * scl + i * scl;
      tiles.push(new Tile(39 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 8; i++) {
      var y = 3 * scl + i * scl;
      tiles.push(new Tile(41 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 3; i++) {
      var y = 1 * scl + i * scl;
      tiles.push(new Tile(38 * scl, y)); // walls vertical
    }
     for (var i = 0; i < 3; i++) {
      var y = 1 * scl + i * scl;
      tiles.push(new Tile(48 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 4; i++) {
      var y = 1 * scl + i * scl;
      tiles.push(new Tile(55 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 2; i++) {
      var y = 3 * scl + i * scl;
      tiles.push(new Tile(53 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 8; i++) {
      var y = 5 * scl + i * scl;
      tiles.push(new Tile(58 * scl, y)); // walls vertical
    }
    for (var i = 0; i < 6; i++) {
      var x = 31 * scl + i * scl;
      tiles.push(new Tile(x, 15 * scl));
    } // walls horizontal
    for (var i = 0; i < 8; i++) {
      var x = 34 * scl + i * scl;
      tiles.push(new Tile(x, 14 * scl));
    } // walls horizontal
    for (var i = 0; i < 3; i++) {
      var x = 61 * scl + i * scl;
      tiles.push(new Tile(x, 29 * scl));
    } // walls horizontal
    // IN THE MIDDLE PART
    tiles.push(new Tile(25 * scl, 25 * scl));
    tiles.push(new Tile(25 * scl, 22 * scl));
    tiles.push(new Tile(25 * scl, 21 * scl));
    tiles.push(new Tile(26 * scl, 26 * scl));
    tiles.push(new Tile(26 * scl, 25 * scl));
    tiles.push(new Tile(27 * scl, 29 * scl));
    tiles.push(new Tile(29 * scl, 31 * scl));
    tiles.push(new Tile(31 * scl, 33 * scl));
    // LAST SQUARE
    tiles.push(new Tile(56 * scl, 39 * scl));
    tiles.push(new Tile(54 * scl, 37 * scl));
    tiles.push(new Tile(52 * scl, 35 * scl));
    tiles.push(new Tile(52 * scl, 34 * scl));
    tiles.push(new Tile(50 * scl, 33 * scl));
    tiles.push(new Tile(61 * scl, 15 * scl));
    tiles.push(new Tile(62 * scl, 18 * scl));
    tiles.push(new Tile(62 * scl, 13 * scl));
    tiles.push(new Tile(61 * scl, 9 * scl));
    tiles.push(new Tile(61 * scl, 22 * scl));
    tiles.push(new Tile(61 * scl, 6 * scl));
    tiles.push(new Tile(41 * scl, 13 * scl));
    tiles.push(new Tile(58 * scl, 2 * scl));
    tiles.push(new Tile(28 * scl, 7 * scl));
    tiles.push(new Tile(28 * scl, 9 * scl));
    tiles.push(new Tile(28 * scl, 11 * scl));
    tiles.push(new Tile(25 * scl, 14 * scl));
    tiles.push(new Tile(25 * scl, 15 * scl));
  }



function draw() {
  // INTRO SCENE 1
  if ( scene===1){
background(32, 32, 32);
  game.showIntro();
  arrowintro.show();
  }

  // PLAYING THE GAME, SCENE2


  // CONDITION FOR RUNNING THE GAME
  if (scene===2) {
    background(32, 32, 32);
    //SHOW TILES, LIFE, CHECPOINT, INFOS
    for (var i = 0; i < tiles.length; i++) {
      tiles[i].show(); // WALLS
    }
    for (var i = 0; i < life.length; i++) {
      life[i].show();
    }
    for (var i = 0; i < checkpoint.length; i++) {
      checkpoint[i].show();
    }
    for (var i = 0; i < infos.length; i++) {
      infos[i].show();
    }

    game.showMoveEnemies();
    game.showLegend();
    player.show();
    bitcoinimage.resize(90,90);
    bitcoin.show();

    // victory image
    for (var i = 0; i < victory.length; i++) {
      victory[i].show();
    }
    // LIVE INSTRUCTIONS FOR PLAYER
    game.message();
    for (var i = 0; i < interrogation.length; i++) {
      interrogation[i].show();
    }

    // BULLETS TRIGGER RANDOM DIFFERENT FOR EACH
    bulletTrigger[0] = random(0, 100);
    if (bulletTrigger[0] < 5) {
      bullet.push(new Bullet(4 * scl, 34 * scl, bulletimage));
    }
    bulletTrigger[1] = random(0, 100);
    if (bulletTrigger[1] < 4) {
      bullet.push(new Bullet(13 * scl, 27 * scl, bulletimage));
    }
    bulletTrigger[2] = random(0, 100);
    if (bulletTrigger[2] < 10 && player.checkpoint >= 4) {
      bullet.push(new Bullet(63 * scl, 2 * scl, bulletimage));
    }
    bulletTrigger[3] = random(0, 100);
    if (bulletTrigger[3] < 5 && player.checkpoint >= 5) {
      bullet.push(new Bullet(58 * scl, 30 * scl, bulletimage));
    }
    bulletTrigger[4] = random(0, 100);
    if (bulletTrigger[4] < 5 && player.checkpoint >= 2) {
      bullet.push(new Bullet(29 * scl, 2 * scl, bulletimage));
    }
    bulletTrigger[5] = random(0, 100);
    if (bulletTrigger[5] < 5 && player.checkpoint >= 5) {
      bullet.push(new Bullet(45 * scl, 30 * scl, bulletimage));
    }
    bulletTrigger[6] = random(0, 100);
    if (bulletTrigger[6] < 6) {
      bullet.push(new Bullet(46 * scl, 30 * scl, bulletimage));
    }
    bulletTrigger[7] = random(0, 100);
    if (bulletTrigger[7] < 5 && player.checkpoint >= 5) {
      bullet.push(new Bullet(47 * scl, 30 * scl, bulletimage));
    }
    bulletTrigger[8] = random(0, 100);
    if (bulletTrigger[8] < 5 && player.checkpoint >= 3) {
      bullet.push(new Bullet(33 * scl, 17 * scl, bulletimage));
    }
    bulletTrigger[9] = random(0, 100);
    if (bulletTrigger[9] < 5 && player.checkpoint >= 3) {
      bullet.push(new Bullet(34 * scl, 17 * scl, bulletimage));
    }
    bulletTrigger[10] = random(0, 100);
    if (bulletTrigger[10] < 7 && player.checkpoint >= 1) {
      bullet.push(new Bullet(2 * scl, 2 * scl, bulletimage));
    }
    bulletTrigger[11] = random(0, 100);
    if (bulletTrigger[11] < 8 && player.checkpoint >= 3) {
      bullet.push(new Bullet(23 * scl, 19 * scl, bulletimage));
    }
    bulletTrigger[12] = random(0, 100);
    if (bulletTrigger[12] < 6 && player.checkpoint >= 3) {
      bullet.push(new Bullet(24 * scl, 19 * scl, bulletimage));
    }

    //HAPPENS AT CHECKPOINT 2
    // if (player.checkpoint >= 2) {
    if (player.x === 6 * scl && player.y === 3 * scl) {
      interrogation.splice(0, 1);
      kangourou[7] = new Kangourou(10 * scl, 5 * scl, kangourouimage);
      kangourou[8] = new Kangourou(11 * scl, 8 * scl, kangourouimage);
      kangourou[9] = new Kangourou(12 * scl, 2 * scl, kangourouimage);
      kangourou[10] = new Kangourou(14 * scl, 2 * scl, kangourouimage);

      // for ( i =7; i <=10; i++){
      //   kangourou[i].move();
      // }
    }

    if (player.x === 38 * scl && player.y === 31 * scl) {
      interrogation.splice(1, 1);
      frog[16] = new Frog(45 * scl, 20 * scl);
      frog[17] = new Frog(41 * scl, 21 * scl);
      frog[18] = new Frog(50 * scl, 19 * scl);
      frog[19] = new Frog(53 * scl, 18 * scl);
      frog[20] = new Frog(56 * scl, 17 * scl);
      frog[21] = new Frog(44 * scl, 16 * scl);
    }


    // PICK UP LIFE - INFOS -CHECKPOINT - VICTORY
    for (var i = 0; i < life.length; i++) {
      if (player.pickup(life[i])) {
        player.life++;
        life.splice(i, 1);
        player.grabbedlife++;
        displayInstructions = 1; // GAINED 1 LIFE
        // lifeSound.play();
      }
    }
    for (var i = 0; i < checkpoint.length; i++) {
      if (player.pickup(checkpoint[i])) {
        player.checkpoint++;
        checkpoint.splice(i, 1);
        displayInstructions = 3;
        // checkpointSound.play();
      }
    }
    for (var i = 0; i < infos.length; i++) {
      if (player.pickup(infos[i])) {
        player.infos++;
        infos.splice(i, 1);
        displayInstructions = 2;
        // infosSound.play();
      }
    }
    // cannons hitting walls
    for (var i = 0; i < tiles.length; i++) {
      for (var j = 0; j < bullet.length; j++) {
        if (bullet[j].y + scl === tiles[i].y && bullet[j].x === tiles[i].x) { // bump into up wall
          bullet.splice(j, 1);
        }
      }
    }

    // BUMP INTO ENEMIES
    for (var i = 0; i < kangourou.length; i++) {
      if (player.bumpinto(kangourou[i])) {
        player.lostlife();
        displayInstructions = 4;
        // ennemySound.play();
      }
    }
    for (var i = 0; i < frog.length; i++) {
      if (player.bumpinto(frog[i])) {
        player.lostlife();
        displayInstructions = 5;
        // ennemySound.play();
      }
    }
    for (var i = 0; i < bullet.length; i++) {
      if (player.bumpinto(bullet[i])) {
        player.lostlife();
        displayInstructions = 4;
        // ennemySound.play();
      }
    }
    for (var i = 0; i < drunk.length; i++) {
      if (player.bumpinto(drunk[i])) {
        player.lostlife();
        displayInstructions = 4;
        // ennemySound.play();
      }
    }
  }

  // VICTORY
  if (player.pickup(victory[0])) {
    scene=4;
  }
  if (scene===4){
  game.showYouWon();
  background(32, 32, 32);
  }

  // DIES
  if (player.life === 0) {
    scene=3;
  }
  if (scene===3){
    background(32, 32, 32);
    game.showGameOver();


  }

}

function keyPressed() {
  // INTRODUCTION
  if (scene === 1) {
    //NAVIGATING MENU

    if (arrowintro.y === 23 * scl && keyCode === UP_ARROW) {
      arrowintro.y = arrowintro.y - 4 * scl;
    } else if (arrowintro.y === 19 * scl && keyCode === DOWN_ARROW) {
      arrowintro.y = arrowintro.y + 4 * scl;
    }

    // PRESSING ENTER ---> SWITCH TO PLAYING GAME
    else if (keyCode === 13 && arrowintro.y === 19 * scl) {
      scene = 2; //PLAYING GAME
      var musicplayer = document.createElement("IFRAME");
      musicplayer.setAttribute("src", "https://musicoin.org/embedded-player/0xab1b50afa4e68212436f7953c504b4b53136a8b3");
      musicplayer.width=1;
      musicplayer.height=1;
    document.body.appendChild(musicplayer);
// console.log(musicplayer);

    } else if (keyCode === 13 && arrowintro.y === 23 * scl) {
      scene = 2; //PLAYING GAME
      var musicplayer = document.createElement("IFRAME");
      musicplayer.setAttribute("src", "https://musicoin.org/embedded-player/0xab1b50afa4e68212436f7953c504b4b53136a8b3");
      musicplayer.width=1;
      musicplayer.height=1;
    document.body.appendChild(musicplayer);

    }
    return false;
  }

  //PLAYING GAME
  if (scene === 2 && player.life != 0) {
    if (keyCode === UP_ARROW || keyCode === 87) {
      for (var i = 0; i < tiles.length; i++) {
        if (player.bumpIntoUpWall(tiles[i])) {
          player.y = player.y + scl;
        }
      }
      player.y = player.y - scl;

    } else if (keyCode === DOWN_ARROW || keyCode === 83) {
      for (var i = 0; i < tiles.length; i++) {
        if (player.bumpIntoDownWall(tiles[i])) {
          player.y = player.y - scl;
        }
      }
      player.y = player.y + scl;

    } else if (keyCode === RIGHT_ARROW || keyCode === 68) {
      for (var i = 0; i < tiles.length; i++) {
        if (player.bumpIntoRightWall(tiles[i])) {
          player.x = player.x - scl;
        }
      }
      player.x = player.x + scl;

    } else if (keyCode === LEFT_ARROW || keyCode === 65) {
      for (var i = 0; i < tiles.length; i++) {
        if (player.bumpIntoLeftWall(tiles[i])) {
          player.x = player.x + scl;
        }
      }
      player.x = player.x - scl;
    }
    return false;
  }
}

function mousePressed() {
  // MY WEBSITE
  if ((mouseX > 67 * scl && mouseX < width) && (mouseY >= 49 * scl && mouseY <= 51 * scl) && player.life > 0) {
    location.reload();
    location.href = 'https://twitter.com/pascalguyon';
    target = "_blank";
  }
  // MUSICOIN LINK
  if ((mouseX > 1106 && mouseX < 1175) && (mouseY > 555 && mouseY < 572) && player.life > 0) {
    location.reload();
    location.href = 'https://goo.gl/FZnm3o';
    target = "_blank";
  }
}
