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
  //Check if game won-player gets 20 steps correct
  if(simonSteps.length===20){
    alert("You win!");
    startGame();
  }
  else{
    var nextColor = [red, blue, yellow, green][Math.floor(Math.random() * 4)];
    simonSteps.push(nextColor);
    simonSounds();
  }
}

function simonSounds(){
  var i=0;
  var moves= setInterval(function(){
    makeSimonSounds(simonSteps[i]);
    i++;
    if(i >= simonSteps.length){
      clearInterval(moves);
    }
  }, 600)
  clearPlayer();
}

function clearPlayer(){
  playerSteps = [];
}

function makeSimonSounds(colors){
  if(colors === red){
    redSound.play();
    $("#red").addClass('selected');
  }
  if(colors === blue){
    blueSound.play();
    $("#blue").addClass('selected');
  }
  if(colors === yellow){
    yellowSound.play();
    $("#yellow").addClass('selected');
  }
  if(colors === green){
    greenSound.play();
    $("#green").addClass('selected');
  }
  setTimeout(function(){
    $("button").removeClass('selected');
  }, 300);
}

function startGame(){
  step=0;
  simonSteps = [];
  $("#count").html(1);
  nextStep();
}

function sendColor(color){
  //Correct color
  if(color===simonSteps[step]){
    //Sequence complete
    if(step===simonSteps.length-1){
      step=0;
      nextStep();
      $("#count").empty();
      $("#count").append(simonSteps.length);
    }
    else {
      //Sequence not complete
      step++;
    }
  }
  //Wrong color for strict mode
  else if($("#strict").hasClass('strictMode')){
    $("h1").text("You lose!");
    startGame();
  }
  //Wrong color for non-strict mode
  else {
    $("h1").text("Try again!");
    setTimeout(function(){
      $("h1").text("");
    }, 600);
    step= 0;
    simonSounds();
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

  $("#strict").click(function(){
    $("#strict").toggleClass("strictMode");
  });

});
