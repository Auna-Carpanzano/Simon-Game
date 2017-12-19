const red = "red";
const blue = "blue";
const yellow = "yellow";
const green = "green";
var redSound = $("#redSound")[0];
var blueSound = $("#blueSound")[0];
var yellowSound = $("#yellowSound")[0];
var greenSound = $("#greenSound")[0];
var simonSteps = [];
var playerSteps = [];
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
  //Strict mode- wrong color
  else if($('input[type=checkbox]').prop('checked')){
    alert("You lose!");
    startGame();
  }
  //Not strict mode- wrong color
  else {
    alert("Try again!");
  }
}

$(document).ready(function(){
  startGame();

  $("#red").click(function(){
    redSound.play();
    playerSteps.push(red);
    sendColor(red);
  });

  $("#blue").click(function(){
    blueSound.play();
    playerSteps.push(blue);
    sendColor(blue);
  });

  $("#yellow").click(function(){
    yellowSound.play();
    playerSteps.push(yellow);
    sendColor(yellow);
  });

  $("#green").click(function(){
    greenSound.play();
    playerSteps.push(green);
    sendColor(green);
  });

  $("#reset").click(function(){
    startGame();
  });

});
