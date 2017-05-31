

var FallingPancake = function(){

  var gameWindow = document.getElementsByClassName("container")[0];
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } // function to get a randomly generated number between two min and ma
  var Conwidth = $(".container").width();
  var Conheight = $(".container").height();
  var pancakelist = [];
  var pancakeID = 1;

  this.create = function(){
    fallingpancakes();

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
    for (var i=0; i < pancakelist.length; i++){
      var id = i+1;
      var pancakeObject = document.getElementById('pancakeObject-' + id);
      //console.log(furniObject);
      var fall = function () {
            pancakeObject.style.top = parseInt(pancakeObject.style.top) + 10 +'px';
            console.log(parseInt(pancakeObject.style.top));
        };

        fall();
      }
    setTimeout(fall, 2000);
  };


  this.render = function(interactions){
    // create();;
    falling();  // +IF EXCEED WINHEIGHT REMOVE};
};
};
