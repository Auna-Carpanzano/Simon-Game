const red = "red";
const blue = "blue";
const yellow = "yellow";
const green = "green";
var redSound = $("#redSound")[0];
var blueSound = $("#blueSound")[0];
var yellowSound = $("#yellowSound")[0];
var greenSound = $("#greenSound")[0];
var simonSteps = [];
var step = 0;

function nextStep(){
  //Game won if player gets 3 steps correct
  if(simonSteps.length===3){
    alert("You win!");
    startGame();
  }
  else{
    var nextColor = [red, blue, yellow, green][Math.floor(Math.random() * 4)];
    console.log("random color", nextColor);
    simonSteps.push(nextColor);
    console.log("simonSteps", simonSteps);
    console.log("step", step);
  }
}

function startGame(){
  step=0;
  simonSteps = [];
  $("#count").html(1);
  nextStep();
}

function sendColor(color){
  //If the correct color is selected
  if(color===simonSteps[step]){
    //If the sequence is completed
    if(step===simonSteps.length-1){
      step=0;
      nextStep();
      $("#count").empty();
      $("#count").append(simonSteps.length);
    }
    else {
      //If the sequence is not completed
      step++;
    }
  }
  //If the correct color is not selected
  else {
    alert("You lose!");
    startGame();
  }
}

$(document).ready(function(){
  startGame();

  $("#red").click(function(){
    redSound.play();
    sendColor(red);
  });

  $("#blue").click(function(){
    blueSound.play();
    sendColor(blue);
  });

  $("#yellow").click(function(){
    yellowSound.play();
    sendColor(yellow);
  });

  $("#green").click(function(){
    greenSound.play();
    sendColor(green);
  });

  $("#reset").click(function(){
    startGame();
  });

});
