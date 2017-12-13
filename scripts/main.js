"use strict"
var rpsArray = ["rock", "paper", "scissors"]
var computerMove = "";
var result;
var myMove = "Rock";
var computerScore = 0;
var myScore = 0;
var scoreBoard = "";
var winner = "";
var computerPlay;
var game;
var counter = 1;
var hasCheated = false;

//DOM-stuff
var roundNumberElement = document.getElementById("round-number");
var myScoreElement = document.getElementById("my-score");
var computerScoreElement = document.getElementById("computer-score");
var computerMoveElement = document.getElementById("computers-move");
var myMoveElement = document.getElementById("my-move");
var resultElement = document.getElementById("result");
var myChoiceIcon = document.getElementById("my-choice-icon");
var computerChoiceIcon = document.getElementById("computer-choice-icon");
var bodoIcon = document.getElementById("cheat-logo");
var cheatAttribution = document.getElementById("cheat-attribution");
var cheatOverlay = document.getElementById("cheat-overlay");
var feedDogButton = document.getElementById("feed-dog-button");

//Make-A-Move Buttons
var buttonRock = document.getElementById("rock");
var buttonPaper = document.getElementById("paper");
var buttonScissors = document.getElementById("scissors");
  
var myMoveRock = function() {
  myMove = "rock";
  game();
  counter++;
};

var myMovePaper = function() {
  myMove = "paper";
  game();
  counter++;
};

var myMoveScissors = function() {
  myMove = "scissors";
  game();
  counter++;
};

buttonRock.addEventListener("click", myMoveRock);
buttonPaper.addEventListener("click", myMovePaper);
buttonScissors.addEventListener("click", myMoveScissors);


//Accept keyboard input
window.addEventListener("keydown", function(event) {
  let buttonName;
  let changeColor = function() {
    let makeButtonRed = function() {
      buttonName.classList.remove("button-active");
      buttonName.classList.add("button-focus");
    }
    let makeButtonGrey = function() {
      buttonName.classList.remove("button-focus");
    }
    buttonName.classList.add("button-active");
    setTimeout(makeButtonRed, 200);
    setTimeout(makeButtonGrey, 700);
  }
  if(event.keyCode == 49) {
    buttonName = buttonRock;
    buttonName.click();
    changeColor();
  }
  else if(event.keyCode == 50) {
    buttonName = buttonPaper;
    buttonName.click();
    changeColor();
  } 
  else if(event.keyCode == 51) {
    buttonName = buttonScissors;
    buttonName.click();
    changeColor();
  }
  else if(event.keyCode == 66) {
    myMove = "bodo";
    hasCheated = "true";
    game();
    counter++;
  }
});


//THE GAME
game = function() { 
  //Create Computer's move
  computerPlay = function() {
    let randomNumber = Math.floor(Math.random() * 3);
    computerMove = rpsArray[randomNumber];
  }
  computerPlay();

  //Determine result
  if (myMove == "bodo") {
    result = `You win! Bodo eats the ${computerMove}!`;
    myScore++;
  }
  else if (myMove == "rock" && computerMove == "scissors") {
    result = "You win! Rock beats Scissors!";
    myScore++;
  }
  else if (myMove == "rock" && computerMove == "paper") {
    result = "You lose! Paper beats Rock!";
    computerScore++;
  }
  else if (myMove == "scissors" && computerMove == "paper") {
    result = "You win! Scissors beat Paper!";
    myScore++;
  }
  else if (myMove == "scissors" && computerMove == "rock") {
    result = "You lose! Rock beats Scissors";
    computerScore++;
  }
  else if (myMove == "paper" && computerMove == "rock") {
    result = "You win! Paper beats Rock!";
    myScore++;
  }
  else if (myMove == "paper" && computerMove == "scissors") {
    result = "You lose! Scissors beat paper";
    computerScore++;
  }
  else if (computerMove == myMove) {
    result = "Oh no! It's a draw...try again";
  }

  //Display choices
  myMoveElement.textContent = myMove.toUpperCase();
  computerMoveElement.textContent = computerMove.toUpperCase();

  //Display result
  roundNumberElement.textContent = counter;
  resultElement.textContent = result;
  
  //Show icons - There is probably a better way of doing this
  let changeMyIcon = function() {
    if (myMove == "rock") {
      bodoIcon.setAttribute("style", "display: none");
      myChoiceIcon.classList.remove("fa-spinner");
      myChoiceIcon.classList.remove("fa-hand-paper-o");
      myChoiceIcon.classList.remove("fa-hand-scissors-o");
      myChoiceIcon.classList.add("fa-hand-rock-o");
    }
    else if (myMove == "paper") {
      bodoIcon.setAttribute("style", "display: none");
      myChoiceIcon.classList.remove("fa-spinner");
      myChoiceIcon.classList.remove("fa-hand-rock-o");
      myChoiceIcon.classList.remove("fa-hand-scissors-o");
      myChoiceIcon.classList.add("fa-hand-paper-o");
    }
    else if (myMove == "scissors") {
      bodoIcon.setAttribute("style", "display: none");
      myChoiceIcon.classList.remove("fa-spinner");
      myChoiceIcon.classList.remove("fa-hand-paper-o");
      myChoiceIcon.classList.remove("fa-hand-rock-o");
      myChoiceIcon.classList.add("fa-hand-scissors-o");
    }
    else if (myMove == "bodo") {
      bodoIcon.setAttribute("style", "display: block");
      myChoiceIcon.classList.add("fa-spinner");
      myChoiceIcon.classList.remove("fa-hand-rock-o");
      myChoiceIcon.classList.remove("fa-hand-scissors-o");
      myChoiceIcon.classList.remove("fa-hand-paper-o");
    }
  }
  let changeComputerIcon = function() {
    if (computerMove == "rock") {
      computerChoiceIcon.classList.remove("fa-spinner");
      computerChoiceIcon.classList.remove("fa-hand-paper-o");
      computerChoiceIcon.classList.remove("fa-hand-scissors-o");
      computerChoiceIcon.classList.add("fa-hand-rock-o");
    }
    else if (computerMove == "paper") {
      computerChoiceIcon.classList.remove("fa-spinner");
      computerChoiceIcon.classList.remove("fa-hand-rock-o");
      computerChoiceIcon.classList.remove("fa-hand-scissors-o");
      computerChoiceIcon.classList.add("fa-hand-paper-o");
    }
    else if (computerMove == "scissors") {
      computerChoiceIcon.classList.remove("fa-spinner");
      computerChoiceIcon.classList.remove("fa-hand-paper-o");
      computerChoiceIcon.classList.remove("fa-hand-rock-o");
      computerChoiceIcon.classList.add("fa-hand-scissors-o");
    }
  }

  changeMyIcon();
  changeComputerIcon();

  //Display current score
  myScoreElement.textContent = myScore;
  computerScoreElement.textContent = computerScore;
  
  //Determine and display the winner, reset the score and counter
  if (counter == 5) {
    let cheaterWins = false;
    if (hasCheated && myScore > computerScore) {
      cheaterWins = true;
      cheatOverlay.setAttribute("style", "display: block");
    }
    if (myScore > computerScore) {
      winner = "Congratulations! You won the game!";
    }
    else if (myScore == computerScore) {
      winner = "It's a draw. This game has no winner!";
    }
    else if (myScore < computerScore) {
      winner = "You lost the game!";
    }
    if(!cheaterWins){
      alert(winner);
    }
    counter = 0;
    myScore = 0;
    computerScore = 0;
    hasCheated = false;
  }
  if (hasCheated) {
    cheatAttribution.setAttribute("style", "display: block");
  }

  let hideOverlay = function() {
    cheatOverlay.setAttribute("style", "display: none");
  }
  feedDogButton.addEventListener("click", hideOverlay);
};
