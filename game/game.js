var Game = function() {

    // Game settings
    var settings = {};                     // Containes all game settings
    settings.ballSpeed = 8;                // The speed of the ball
    settings.walls = true;                 // The ball can not go outside the screen
    // settings.automatic = false;            // The ball will move by itself
    // settings.godmode = false;              // Debug mode

    // World settings
    var assets = [];                      // All game objects
    var player = new Ball(settings);
    var furniture = new Fallingobjects();
    var pancake = new Fallingobjects();
    console.log(furniture)
    console.log(player)
            // The player
    assets[0] = player;
    //assets.push(furniture);
    assets[1] = furniture;
    assets[2] = pancake;
    var frame = 0;                        // Frames since the start of the game

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



    // Startup the game
    function init(){
      setupEvents();
    }

    // The render function. It will be called 60/sec
    this.render=function(){
      if ((frame /60 ) % 2 === 0) {
        console.log('2 seconds passed')
        furniture.create();
        pancake.create();
      }
      for(var i=0; i < assets.length; i++){
        assets[i].render(interactions);
    }
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
var g = new Game(); // initialises game
