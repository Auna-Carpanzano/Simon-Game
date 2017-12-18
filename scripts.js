var redSound = $("#redSound")[0];
var blueSound = $("#blueSound")[0];
var yellowSound = $("#yellowSound")[0];
var greenSound = $("#greenSound")[0];
var steps = [];
var step = 0;

function nextStep(){
  var nextColor = [red, blue, yellow, green][Math.floor(Math.random() * 4)];
  console.log("random color", nextColor);
}

$(document).ready(function(){

  nextStep();

  $("#red").click(function(){
    redSound.play();
  });

  $("#blue").click(function(){
    blueSound.play();
  });

  $("#yellow").click(function(){
    yellowSound.play();
  });

  $("#green").click(function(){
    greenSound.play();
  });

});
