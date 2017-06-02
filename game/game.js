var Game = function() {
    // Game settings
    var settings = {};                     // Containes all game settings
    settings.ControlSpeed = 8;                // The speed of the Control
    settings.walls = true;                 // The Control can not go outside the screen
    settings.furniID = 1;                  //the Id each furni will be assigned to
    settings.furniList = [];
    settings.pancakeID = 1;                //the Id each pancake will be assigned to
    settings.pancakeList = [];             // furnilist stores all the furni objects created
    settings.furniFalling = false;
    settings.pancakeFalling = false;
    settings.score = 0;


    // World settings
    var assets = [];                      // All game objects
    var player = new Control(settings);
    var furniObjList = [];    //furnilist stores all the furni objects created
    var pancakeObjList = [];  //pancakeObjList stores all the pancake objects created
    assets[0] = player;
    var score = new Score(settings);
    score.create();
    assets[1] = score;
    var frame = 0;
    var interactions = {};

    interactions.left = false;            // Left arrow key pressed
    interactions.right = false;           // Right arrow ket pressed
    interactions.space = false;           // Speace key pressed

    // Setup event listeners
    function setupEvents() {
      //mainly the controls
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

    function CollisionDetect () {

     var playerRect = document.getElementById('Control').getBoundingClientRect();
     //gets the coordinates of the control img
     // detect each fallingfurni's coordinates
     //match them
     // if match, gameover , if furni falls beyond screen, remove
      if (furniObjList.length !== 0){
      for(var i = 0; i<furniObjList.length;i++){
        var furniObject = furniObjList[i];
        var objID = furniObject.id;
        //console.log(furniObject, objID)

        if(!document.getElementById('furniObject-'+objID)){
          continue;
        }

        var furniRect = document.getElementById('furniObject-'+objID).getBoundingClientRect();


        if (playerRect.left < furniRect.left + furniRect.width &&
            playerRect.left + playerRect.width > furniRect.left &&
            playerRect.top < furniRect.top + furniRect.height &&
            playerRect.height + playerRect.top > furniRect.top) {
              console.log("furni collided");
              $("#furniObject-"+furniObject.id).remove();
              furniObjList[objID-1].isFalling = false; //disable the condition of falling
              //alert("Game Over")
              var x= document.getElementsByClassName('container')[0];
              x.setAttribute('style', 'font-size: 100px','textAlign:justify');
              x.innerHTML = 'GAMEOVER';

              setTimeout(function(){location.reload()}, 2000);
            } else if (furniRect.top + furniRect.height > window.innerHeight ) {
            $("#furniObject-"+furniObject.id).remove();
            console.log('furni remove');
            furniObjList[objID-1].isFalling = false;
            }
          }
        }

        // detect pancakes
        if (pancakeObjList.length !== 0){
        for(var j = 0; j<pancakeObjList.length;j++){
          var pancakeObject = pancakeObjList[j];
          var pObjID = pancakeObject.pancakeID;
          //console.log(pancakeObject, pObjID)

          if(!document.getElementById('pancakeObject-'+pObjID)){
            continue;
          }

          var pancakeRect = document.getElementById('pancakeObject-'+pObjID).getBoundingClientRect();


          if (playerRect.left < pancakeRect.left + pancakeRect.width &&
              playerRect.left + playerRect.width > pancakeRect.left &&
              playerRect.top < pancakeRect.top + pancakeRect.height &&
              playerRect.height + playerRect.top > pancakeRect.top) {
                console.log("pancake collided");
                settings.score++;
                $("#pancakeObject-"+pancakeObject.pancakeID).remove();
                pancakeObjList[pObjID-1].isFalling = false;
              } else if (pancakeRect.top + pancakeRect.height > window.innerHeight ) {
              $("#pancakeObject-"+pancakeObject.pancakeID).remove();
              //console.log(pancakeObject.pancakeID)
              console.log('pancake remove');
              pancakeObjList[pObjID-1].isFalling = false;
              }
            }
          }
      }



              // furniObject.remove();
            // furnilist.splice(i,1);
            // assets.splice(i+1,1);
            // console.log('removed');
        //  }
          // else if (furniRect.top+furniRect.height>520){
          //     furniObject.remove();
          //     furnilist.splice(i,1);
          //     assets.splice(i+1,1);console.log("KAN")}
    //    }
        // re-write splice to accommodate pancake and furniObject
        // for each furni/pancake get the index place of it in assets array

    function spawnFurniture() {
      var furniture = new Fallingobjects(settings);
      furniObjList.push(furniture);
      console.log(furniObjList);
      furniture.create(settings);
      assets.push(furniture);
    }

    function spawnPancake() {
      var pancake = new FallingPancake(settings);
      pancakeObjList.push(pancake);
      pancake.create(settings);
      assets.push(pancake);
    }


    // Startup the game
    function init(){
      setupEvents();

    }

    // The render function. It will be called 60/sec
    this.render= function(){
      if ((frame /60 ) % 2 === 0) {
        spawnFurniture();
        //spawnFurniture();
      }
      if ((frame /60 ) % 2 === 0) {
          //spawnFurniture();
      }
      if ((frame /60 ) % 3 === 0) {
        spawnPancake();
      }





      for(var i=0; i < assets.length; i++){
        //console.log(assets[i])
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
                    self.render(); // add self before render
                    })();

                        init();

};

document.getElementById('start').addEventListener('click', function(){
  console.log('click');
  document.getElementById('start-screen').setAttribute('style', 'display:none;');
  var g = new Game(); // initialises game
})
