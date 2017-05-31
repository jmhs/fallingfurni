var Ball = function(settings) {
    // creates ball object
    // Settings
    var ballElement = null; // initialises ballElement



    function wall() {

      var ballRect = ballElement.getBoundingClientRect();
      var w = parseInt(window.innerWidth);
      var h = parseInt(window.innerHeight);

      if(ballRect.left < 0){
          ballElement.style.left = '0px';
      }

      if(ballRect.right > w){
          ballElement.style.left = ( w - ballRect.width) + 'px' ;
          console.log(ballRect.right,ballRect.left,w,h);
      }



    }

    // Move the ball around manually
    function move(interactions){

      if(interactions.left){
        ballElement.style.left = parseInt(ballElement.style.left)-14+"px";
      }

      if(interactions.right){
        ballElement.style.left = parseInt(ballElement.style.left)+14+"px";
      }

      if(settings.walls){
        wall();
      }
    }


    function create() {
        // Create the object asset
    }

    function init(){
      // create();
      ballElement = document.getElementById('ball');
      ballElement.style.top = '400px'; //specifies the position of the ballElement
      ballElement.style.left = '400px';
      ballElement.style.height = '100px';
    }

    this.render = function(interactions){
      move(interactions);
    };

    init();
};
