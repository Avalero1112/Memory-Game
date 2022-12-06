
var userClickedPattern = [];//CHECK

var colorOptions = ["red", "yellow", "blue", "green"];

var gamePattern = []; //CHECK

var started = false;//CHECK

var level = 0//CHECK


$(document).keydown(function () {//CEHCK
  if (!started) {//CHECK
    $("#level-title").text("Level " + level);//CHECK
    nextSequence();//CHECK
    started = true;
  }//CHECK
});//CHECK

$(".btn").click(function() {
  var userChosenPattern = $(this).attr("id");
  userClickedPattern.push(userChosenPattern);

  playSound(userChosenPattern);
  animatePress(userChosenPattern);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success");

  if (userClickedPattern.length === gamePattern.length) {

    setTimeout(function () {
      nextSequence();
    }, 1000);
  }
} else {
    console.log("wrong");
    playSound("wrong");

   $("body").addClass("game-over");
 setTimeout(function() {
 $("body").removeClass("game-over");
}, 200);

  $("#level-title").text("Game Over, press any key to restart!");
  startOver();
  }}

function startOver() {
  gamePattern = [];
  level = 0;
  started = false;
}

function nextSequence() {

  userClickedPattern = [];

   level++;

   if (level === 3) {
     $("#level-title").text("Hey there");
   } else if (level === 5) {
     $("#level-title").text("You're pretty good at this");
   } else if (level === 6) {
     $("#level-title").text("You just beat my high score");
   } else if (level === 7) {
     $("#level-title").text("Get to level 10 to unlock a secret message")
   } else if (level === 10) {
     $("#level-title").text("Jk, get to level 20") 
  }  else {
  $("#level-title").text("level " + level); }


  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = colorOptions[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}

function playSound(name) {
var audio = new Audio("sounds/" + name + ".mp3");
audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
