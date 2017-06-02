var Control = function(settings) {
    // creates Control object
    // Settings
    this.ControlElement = null; // initialises ControlElement
    var ControlSpeed=10;


    function wall() {

      var ControlRect = ControlElement.getBoundingClientRect();
      var w = 700;//parseInt(window.innerWidth);
      var h = parseInt(window.innerHeight);

      if(ControlRect.left < 200){
          ControlElement.style.left = '200px';
      }

      if(ControlRect.right > w){
          ControlElement.style.left = ( w - ControlRect.width) + 'px' ;
          console.log(ControlRect.right,ControlRect.left,w,h);
      }

    }
    // Move the Control around manually
    function move(interactions){

      if(interactions.left){
        ControlElement.style.left = parseInt(ControlElement.style.left)-ControlSpeed+"px";
      }

      if(interactions.right){
        ControlElement.style.left = parseInt(ControlElement.style.left)+ControlSpeed+"px";
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
      ControlElement = document.getElementById('Control');
      ControlElement.style.top = '400px'; //specifies the position of the ControlElement
      ControlElement.style.left = '400px';
      ControlElement.style.height = '100px';
    }

    this.render = function(interactions){
      move(interactions);
    };

    init();
};
