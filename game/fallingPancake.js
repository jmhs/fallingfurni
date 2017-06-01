

var FallingPancake = function(){

  var gameWindow = document.getElementsByClassName("container-fluid")[0];
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } // function to get a randomly generated number between two min and ma
  var Conwidth = $(".container").css( "width" );
  var Conheight = $(".container").css( "height" )
  var pancakeList = [];
  var pancakeID = 1;
  var fallingspeed = 15;
  this.isFalling = false;
  this.pancakeObject = null;


  this.create = function(settings){
    this.isFalling = true;
    fallingpancakes();

    function fallingpancakes(){
      var Xvalue = getRandomIntInclusive(1, Conwidth);
      this.pancakeObject = document.createElement('img');
      this.pancakeObject.setAttribute("src","images/pasted-image.jpeg");
      this.pancakeObject.style.position ="absolute";
      this.pancakeObject.style.height="auto";
      this.pancakeObject.style.top = 10 +'px';
      this.pancakeObject.style.left = Xvalue+ "px";
      this.pancakeObject.id = "pancakeObject-"+ pancakeID;
      this.pancakeObject.setAttribute("class","pancake");
      gameWindow.appendChild(pancakeObject);
      settings.pancakeID++; // changes the count in the settings for game to retrieve
      settings.pancakeList.push(this.pancakeObject);
    }
    return this.pancakeObject;
  };
  var falling = function(){
    this.pancakeObject = document.getElementById('pancakeObject-'+ pancakeID);
    this.pancakeObject.style.top = parseInt(this.pancakeObject.style.top)+ fallingspeed +"px";

  };


  this.render = function(interactions){
    if(this.isFalling)
    falling();
  };
};
