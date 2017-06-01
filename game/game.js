var Game = function() {

    // Game settings
    var settings = {};                     // Containes all game settings
    settings.ballSpeed = 8;                // The speed of the ball
    settings.walls = true;                 // The ball can not go outside the screen
    settings.furniID = 1;
    settings.furniList = []
    // settings.automatic = false;            // The ball will move by itself
    // settings.godmode = false;              // Debug mode

    // World settings
    var assets = [];                      // All game objects
    var player = new Ball(settings);
    //var furniture = new Fallingobjects();
    //var pancake = new FallingPancake();
            // The player
    assets[0] = player;
    //assets.push(furniture);
    //assets[1] = furniture;
    //assets[2] = pancake;
    var frame = 0;
    console.log(assets);                     // Frames since the start of the game

    // Interactions
    var interactions = {};

    interactions.left = false;            // Left arrow key pressed
    interactions.right = false;           // Right arrow ket pressed
    interactions.space = false;           // Speace key pressed

    // Setup event listeners
    function setupEvents() {

      document.addEventListener('keyup', function(event){
        var keyName = event.key;

        switch(keyName) {
          case "ArrowRight":
              interactions.right = false;
              break;
          case "ArrowLeft":
              interactions.left = false;
              break;


          default:
              break;
        }
      });

      document.addEventListener('keydown', function(event){
        var keyName = event.key;

        switch(keyName) {
          case "ArrowRight":
              interactions.right = true;
              break;
          case "ArrowLeft":
              interactions.left = true;
              break;

          default:
              break;
        }
      });
    }

    //Collision detection
    //Collision detection
    function CollisionDetect () {
      //player
      //with the star objects
     var playerRect = document.getElementById('ball').getBoundingClientRect();
     var furnilist = settings.furniList;
      for(var i = 0; i<furnilist.length;i++){
        var furniObject = furnilist[i];
        //console.log(furniObject.id)
        //console.log('detecting')
       var furniRect = document.getElementById(furniObject.id).getBoundingClientRect();
        if (playerRect.left < furniRect.left + furniRect.width &&
            playerRect.left + playerRect.width > furniRect.left &&
            playerRect.top < furniRect.top + furniRect.height &&
            playerRect.height + playerRect.top > furniRect.top) {
            console.log('player:', playerRect.left, '  furni:', furniRect.left+furniRect.width)
            console.log('collision detected')
            furniObject.isFalling = false;
            console.log(furniObject.isFalling)
            furniObject.remove();
            furnilist.splice(i,1)
            assets.splice(i+1,1);
            console.log('removed');}
          }
        }

      // //with the Aliens
      // for (var j = 0; j < panca.length; j++){
      //   var alienElement = alien_player[j].alienElement;
      //
      //
      //  var alienRect = alienElement.getBoundingClientRect();
      //   if (playerRect.left < alienRect.left + alienRect.width &&
      //       playerRect.left + playerRect.width > alienRect.left &&
      //       playerRect.top < alienRect.top + alienRect.height &&
      //       playerRect.height + playerRect.top > alienRect.top) {
      //
      //      console.log(‘boom gameover’);
      //     }
      //   };}

    // Startup the game
    function init(){
      setupEvents();

    }

    // The render function. It will be called 60/sec
    this.render=function(){
      if ((frame /60 ) % 2 === 0) {
        console.log('2 seconds passed');

        var furniture = new Fallingobjects();
        furniture.create(settings);
        assets.push(furniture);

      }
      if ((frame /60 ) % 3 === 0) {
        console.log('3 seconds passed');
        //pancake.create();


      }
      //if (furniture.posi > 410){console.log("Doit")};

      for(var i=0; i < assets.length; i++){
        assets[i].render(interactions);


    }

    CollisionDetect();
    frame++;
  };
var self = this;
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              function( callback ){
                window.setTimeout(callback, 1000 / 60);

              };
            })();


            (function animloop(){
              requestAnimFrame(animloop);
              self.render();
            })();

            init();
};
// var Wwidth = $(window).width();
// var Bwidth = Wwidth + "10"px;
//
// var Wheight = $(window).height();
// var Bheight = Wheight + "20"px;
// console.log(width,height);
var g = new Game(); // i[  lnitialises game
