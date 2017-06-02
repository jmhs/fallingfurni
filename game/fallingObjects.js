//  generate random intergers between width of screen for position of falling furnitures
//  create a recursive function for spawning of furnitures.
//  function calls rthe creation of the falling furninture object
//  object specifies the style and the img. needed
//  specify position to be absolute and make it fall
// every frame move down how many px?
// want a path? equation!

var Fallingobjects = function(settings){

//global objects of Fallingobjects class
var gameWindow = document.getElementsByClassName("container")[0];
var furniObject = null;
this.id = settings.furniID;
this.isFalling = settings.furniFalling;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
} // function to get a randomly generated number between two min and ma

var Conwidth = 700;//$(".container").width();
var Conheight = 700;//$(".container").height();
var furniImage = ['images/bb8.gif','images/sleepingman.gif','images/shelter.png','images/longsofa.png','images/technyancolor.gif','images/tv.gif','images/vase.png','images/scifi_minibar.gif'];
var randomImage = furniImage[Math.floor(Math.random()*furniImage.length)];
var furnilist = [];
//var furniID = 1;
var fallingspeed = 10;


this.create = function(settings){

  //   fallingfurni();
  //
  // function fallingfurni(){

      var Xvalue = getRandomIntInclusive(200, Conwidth);
      this.id = settings.furniID;
      settings.furniID++;
      furniObject = document.createElement('img');
      furniObject.setAttribute("src",randomImage);
      furniObject.style.position ="absolute";
      furniObject.style.height="auto";
      furniObject.style.top = 10+'px';
      furniObject.style.left = Xvalue+ "px";
      furniObject.id = "furniObject-"+ (this.id);
      furniObject.setAttribute("class", "furni");
      console.log(furniObject);
      gameWindow.appendChild(furniObject);
      settings.furniList.push(furniObject);
      this.isFalling = true;

  return furniObject;
};



var falling = function(){
  this.id = settings.furniID - 1
    furniObject = document.getElementById('furniObject-' + this.id);
    //console.log(this.id)
    //console.log(furniObject)
    if(!furniObject){
      return;
    }
    furniObject.style.top = parseInt(furniObject.style.top) + fallingspeed +'px';
    var h = window.innerHeight;
    if (parseInt(furniObject.style.top) > h) {
     this.isFalling = false;
    }
};

this.render = function(interactions){
  // create();;
  if (this.isFalling){
    //console.log('falling')
      falling();
    }
  };
};
