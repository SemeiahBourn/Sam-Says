




// // Created a variable for the color of the buttons and assigned them to an array.
var buttonColours = ["purple", "blue", "pink", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
//This allows the game to be determined and identified as started or not. 
var started = false;


//  The levels have to start at somewhere so there you have it.
var level = 0;

var timeout = 1000;

// This targeting the entire document using JQuery. Then we used a event of keypress to start the game.
$(document).keypress(function() {
  if (!started) {
      // if not false aka not started we will target the title using the specified id and insert the text below
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

// There must be a way to ensure the correct button was pushed in order for it to actually a game.
function checkAnswer(currentLevel) {
//If the game pattern and the the pattern entered is equal to the same thing on that specific level..
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      // ALSO if the length(number of button selected) of each are equal
      if (userClickedPattern.length === gamePattern.length){
        // run the function below to give the next sequence/fucntion
        setTimeout(function () {
          nextSequence();
          // at this speed
        }, timeout);
      }
      // Otherwise they got it wrong
    } else {
      //You got it wrong so now you get the loser sound
      playSound("wrong");
      // This JQuery code is targeting the body and adding game over to it.
      $("body").addClass("game-over");
      // This Jquery line is targeting the specific id and adding this text below.
      $("#level-title").text("Game Over, Press Any Key to Restart");
// The same function used prior is being ran and instead of providing the next sequence it is removing the text "game-over" from the body.
      setTimeout(function () {
        $("body").removeClass("game-over");
      //This is the speed of the timeout function
      }, 1000);
// The startover function is being called to initate the start the game over.
      startOver();
    }
}

//Create a function to allow for random sequences to be generated.
function nextSequence() {
  userClickedPattern = [];
  // This is the increment at which the the levels will increase by
  level++;
//bonus stuff below

if (level === 7  ) {
  popUp();
  addButton();
  speedItUp();
} else if (level === 5  ){
  addButton();
  speedItUp();
} else if (level === 3){
  speedItUp();
}  else {
  
}
//  console.log(nextSequence());

  




  // This JQuery line of code is targeting the specific id and adding the following text to it.
  $("#level-title").text("Level " + level);
  // Create a random number between 0-3 and store it in a variable. It is between 0-3 because there are four colors/buttons to choose from. 
  var randomNumber = Math.floor(Math.random()*buttonColours.length);
  // This variable was created to assign a random button in random sequences.
  var randomChosenColour = buttonColours[randomNumber];
  // .push will continue to generate random patterns to the array in the variable above.
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  console.log(gamePattern);
}



function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


//This function was created to reset the game/end the game
function startOver() {
  //The game will restart at zero
  level = 0;

  gamePattern = [];
console.log(" yeehaw " , gamePattern)
const orangeButton = document.querySelector('.orange')
orangeButton.style.display = 'none';

  // This was set in a variable prior to symbolize the game not started.
  started = false;
}
//This function will change the speed of that the sequence is called.
function speedItUp(){
timeout =  (timeout / 2 )
console.log("current timeout speed is " + timeout);
}

// This function will add a button to the array once a certain level is created
function addButton(){
  const orangeButton = document.querySelector('.orange')
  orangeButton.style.display = 'inline-block';
  gamePattern.push("orange")
}


// function popUp(){
// const imgScary = document.querySelector('.img')
// imgScary.style.display = 'inline-block';

// }


