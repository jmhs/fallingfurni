//  generate random intergers between width of screen for position of falling furnitures
//  create a recursive function for spawning of furnitures.
//  function calls rthe creation of the falling furninture object
//  object specifies the style and the img. needed
//  specify position to be absolute and make it fall
// every frame move down how many px?
// want a path? equation!
var Fallingobjects = function(){

var gameWindow = document.getElementsByClassName("container")[0];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
} // function to get a randomly generated number between two min and ma

var Conwidth = $(".container").width();
var Conheight = $(".container").height();

var furnilist = [];
var pancakelist = [];
var furniID = 1;
var pancakeID = 1;
this.create = function(){
  fallingfurni();
  fallingpancakes();
  function fallingfurni(){
      console.log('created')
      var Xvalue = getRandomIntInclusive(1, Conwidth);
      var furniObject = document.createElement('img');
      furniObject.setAttribute("src","images/bed.PNG");
      furniObject.style.position ="absolute";
      furniObject.style.height="auto";
      furniObject.style.top = 10+'px';
      furniObject.style.left = Xvalue+ "px";
      furniObject.id = "furniObject-"+furniID;
      gameWindow.appendChild(furniObject);
      furniID++;
      furnilist.push(furniObject);
  }


function fallingpancakes(){
  var Xvalue = getRandomIntInclusive(1, Conwidth);
  var pancakeObject = document.createElement('img');
  pancakeObject.setAttribute("src","images/greensofa.gif");
  pancakeObject.style.position ="absolute";
  pancakeObject.style.height="auto";
  pancakeObject.style.top = 10+'px';
  pancakeObject.style.left = Xvalue+ "px";
  pancakeObject.id = "pancakeObject-"+pancakeID;
  gameWindow.appendChild(pancakeObject);
  pancakeID++;
  pancakelist.push(pancakeObject);
    }
};

var falling = function(){
  for (var i=0; i < furnilist.length; i++){
    var id = i+1;
    var furniObject = document.getElementById('furniObject-' + id);
    console.log(furniObject);
    var fall = function () {
          furniObject.style.top = parseInt(furniObject.style.top) + 10 +'px';
          console.log(parseInt(furniObject.style.top));
      }

      fall();
    }
  setTimeout(fall, 2000);
};

var falling2 = function(){
  for (var i=0; i < pancakelist.length; i++){
    var id = i+1;
    var furniObject = document.getElementById('pancakeObject-' + id);
    console.log(pancakeObject);
      var fall=function() {
          pancakeObject.style.top = parseInt(pancakeObject.style.top) + 10 +'px';
          console.log(parseInt(pancakeObject.style.top));
      }

      fall();
    }
  // setTimeout(fall, 1000);
};

// var falling22 = function()
// {for (var i =0; i < pancakelist.length; i++) {
//   var id = i+1;
//   var pancakeObject = document.getElementById('pancakeObject-' + id);
//   console.log(pancakeObject);
//     function fall2 () {
//         pancakeObject.style.top = parseInt(pancakeObject.style.top) + 10 +'px';
//         console.log(parseInt(pancakeObject.style.top));
//     }
//
//       fall2();
// }
//
//
//   setTimeout(fall2, 2000);
// };


this.render = function(interactions){
  //create();
  falling();
  falling2();

   //falling(); IF EXCEED WINHEIGHT REMOVE
};
};




// var fallingObjects=function(){
//



// var fallingfurni = {};
//   var fallingpancakes = {};
//
// }
//
//
// function fallingObjects(){
//
// }
// function resetRock(rock){
//     rock.x=Math.random()*(window.width-rockWidth);
//     rock.y=15+Math.random()*30;
//     rock.speed=0.2+Math.random()*0.5;
//
