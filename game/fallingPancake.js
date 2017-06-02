

var FallingPancake = function(settings){

var pancakeObject = null;
this.pancakeId = settings.pancakeID;
this.isFalling = settings.pancakeFalling;
  var gameWindow = document.getElementsByClassName("container")[0];
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } // function to get a randomly generated number between two min and ma
  var Conwidth = 700;//$(".container").css( "width" );
  var Conheight = 700;//$(".container").css( "height" );
  var pancakeList = [];
  //var pancakeID = settings.pancakeID;
  var fallingspeed = 15;
  var pancakeIsFalling = false;


  this.create = function(settings){

    // fallingpancakes();
    //
    // function fallingpancakes(){
      this.pancakeID = settings.pancakeID;
      settings.pancakeID++;
      var Xvalue = getRandomIntInclusive(200, Conwidth);
      pancakeObject = document.createElement('img');
      pancakeObject.setAttribute("src","images/pancake.png");
      pancakeObject.style.position ="absolute";
      pancakeObject.style.height="auto";
      pancakeObject.style.top = 10 +'px';
      pancakeObject.style.left = Xvalue+ "px";
      pancakeObject.id = "pancakeObject-"+ this.pancakeID;
      pancakeObject.setAttribute("class","pancake");
      gameWindow.appendChild(pancakeObject);
       // changes the count in the settings for game to retrieve
      settings.pancakeList.push(pancakeObject);
      this.isFalling = true;
    return pancakeObject;
  };
  var falling = function(){
    this.id = settings.pancakeID-1;
    pancakeObject = document.getElementById('pancakeObject-'+ this.id);
    if(!pancakeObject){
      return;
    }
    pancakeObject.style.top = parseInt(pancakeObject.style.top)+ fallingspeed +"px";
    var h = window.innerHeight;
    if (parseInt(pancakeObject.style.top) > h) {
      this.isFalling = false;
    }

  };

  this.render = function(interactions){
    if(this.isFalling)//condition
    falling();
  };
};
