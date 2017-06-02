var Game = function() {
    // Game settings
    var settings = {};                     // Containes all game settings
    settings.ControlSpeed = 8;                // The speed of the Control
    settings.walls = true;                 // The Control can not go outside the screen
    settings.furniID = 1;
    settings.furniList = [];
    settings.pancakeID = 1;
    settings.pancakeList = [];
    settings.furniFalling = false;
    settings.pancakeFalling = false;

    // World settings
    var assets = [];                      // All game objects
    var player = new Control(settings);
    var furniObjList = [];
    var pancakeObjList = [];
    assets[0] = player;
    var frame = 0;
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

    function CollisionDetect () {

     var playerRect = document.getElementById('Control').getBoundingClientRect();
     // detect furnis
      if (furniObjList.length !== 0){
      for(var i = 0; i<furniObjList.length;i++){
        var furniObject = furniObjList[i]
        var objID = furniObject.id
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
              furniObjList[objID-1].isFalling = false;
              //alert("Game Over")
            }
            else if (furniRect.top + furniRect.height > window.innerHeight )
             {

              $("#furniObject-"+furniObject.id).remove();
            console.log('furni remove')
            furniObjList[objID-1].isFalling = false;
            }
          }
        }

        // detect pancakes
        if (pancakeObjList.length !== 0){
        for(var j = 0; j<pancakeObjList.length;j++){
          var pancakeObject = pancakeObjList[j]
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
                $("#pancakeObject-"+pancakeObject.pancakeID).remove();
                pancakeObjList[pObjID-1].isFalling = false;
                //alert("Game Over")
              } else if (pancakeRect.top + pancakeRect.height > window.innerHeight ) {
              $("#pancakeObject-"+pancakeObject.pancakeID).remove();
              //console.log(pancakeObject.pancakeID)
              console.log('pancake remove')
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

var g = new Game(); // i[  lnitialises game
