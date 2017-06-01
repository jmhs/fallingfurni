//  generate random intergers between width of screen for position of falling furnitures
//  create a recursive function for spawning of furnitures.
//  function calls rthe creation of the falling furninture object
//  object specifies the style and the img. needed
//  specify position to be absolute and make it fall
// every frame move down how many px?
// want a path? equation!

var Fallingobjects = function(){

var gameWindow = document.getElementsByClassName("container-fluid")[0];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
} // function to get a randomly generated number between two min and ma

var Conwidth = $(".container").css( "width" );
var Conheight = $(".container").css( "height" );
var furniImage = ['images/bed.PNG','images/bench.png','images/shelter.png','images/longsofa.png','images/redbed.jpg'];
var randomImage = furniImage[Math.floor(Math.random()*furniImage.length)];
var furnilist = [];
var furniID = 1;
var fallingspeed = 10;
this.isFalling = false;
this.furniObject = null;

this.create = function(settings){
  this.isFalling = true;
    fallingfurni();

  function fallingfurni(){
      var Xvalue = getRandomIntInclusive(1, Conwidth)
      furniID = settings.furniID;
      this.furniObject = document.createElement('img');
      this.furniObject.setAttribute("src",furniImage[0]);
      this.furniObject.style.position ="absolute";
      this.furniObject.style.height="auto";
      this.furniObject.style.top = 10+'px';
      this.furniObject.style.left = Xvalue+ "px";
      this.furniObject.id = "furniObject-"+furniID;
      this.furniObject.setAttribute("class", "furni")
      console.log(gameWindow)
      gameWindow.appendChild(this.furniObject);
      settings.furniID++;
      settings.furniList.push(this.furniObject);
  }
  return this.furniObject;
};
// this.posi = function(){
//   return parseInt(furniObject.style.top)
// }


var falling = function(){
    this.furniObject = document.getElementById('furniObject-' + furniID);
     // console.log(furniObject);
    //console.log(this.furniObject)
    this.furniObject.style.top = parseInt(this.furniObject.style.top) + fallingspeed +'px';
    //var Y = parseInt(furniObject.style.top);
    //if(Y > 410){furnilist.splice(0,1);}
    //console.log(furnilist)
  // setTimeout(fall, 2000);
};



this.render = function(interactions){
  // create();;
  if (this.isFalling){
    //console.log('falling')
      falling();
  }
};

};



// }
// function resetRock(rock){
//     rock.x=Math.random()*(window.width-rockWidth);
//     rock.y=15+Math.random()*30;
//     rock.speed=0.2+Math.random()*0.5;
//
