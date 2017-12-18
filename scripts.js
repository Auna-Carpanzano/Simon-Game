var redSound = $("#redSound")[0];
var blueSound = $("#blueSound")[0];
var yellowSound = $("#yellowSound")[0];
var greenSound = $("#greenSound")[0];
var steps = [];
var step = 0;

$(document).ready(function(){

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
