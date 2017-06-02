var Score = function(settings){

//global objects of Fallingobjects class
var gameWindow = document.getElementsByClassName("container")[0];
var scoreObject = null;

this.create = function(settings){
      var scoreObject = document.createElement('div');
      scoreObject.style.position ="absolute";
      scoreObject.style.height="100px";
      scoreObject.style.width='200px'
      scoreObject.style.top = 10+'px';
      scoreObject.style.background = 'white';
      scoreObject.style.opacity = '0.5';

      scoreObject.style.fontSize = '50px'
      scoreObject.style.textAlign = 'center';
      scoreObject.style.left = window.innerWidth - 200 + 'px';
      scoreObject.id = "score";
      // scoreObject.setAttribute("styl", "furni");
      gameWindow.appendChild(scoreObject);

  return scoreObject;
};

function getScore(){
  var score = document.getElementById('score')
  score.innerHTML = settings.score;
  console.log(score.innerHTML)
}

this.render = function(interactions){
    getScore();
  };
};
