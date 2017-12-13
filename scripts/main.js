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

//DOM-stuff
var roundNumberElement = document.getElementById("round-number");
var myScoreElement = document.getElementById("my-score");
var computerScoreElement = document.getElementById("computer-score");
var computerMoveElement = document.getElementById("computers-move");
var myMoveElement = document.getElementById("my-move");
var resultElement = document.getElementById("result");
var myChoiceIcon = document.getElementById("my-choice-icon");
var computerChoiceIcon = document.getElementById("computer-choice-icon");

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
  if(event.keyCode == 49) {
    buttonRock.click();
  }
  else if(event.keyCode == 50) {
    buttonPaper.click();
  } 
  else if(event.keyCode == 51) {
    buttonScissors.click();
  }
});

//THE GAME
game = function() { 
  //Create Computer's move
  computerPlay = function() {
    let randomNumber = Math.floor(Math.random() * 3);
    computerMove = rpsArray[randomNumber];
  };
  computerPlay();

  //Determine result
  if (myMove !== "rock" && myMove !== "paper" && myMove !== "scissors") {
    result = "That makes no sense...the game is called 'Rock, Paper, Scissors'!";
  }
  else if (myMove == "rock" && computerMove == "scissors") {
    result = "You win! Rock beats Scissors!";
    myScore += 1;
  }
  else if (myMove == "rock" && computerMove == "paper") {
    result = "You lose! Paper beats Rock!";
    computerScore += 1;
  }
  else if (myMove == "scissors" && computerMove == "paper") {
    result = "You win! Scissors beat Paper!";
    myScore += 1;
  }
  else if (myMove == "scissors" && computerMove == "rock") {
    result = "You lose! Rock beats Scissors";
    computerScore += 1;
  }
  else if (myMove == "paper" && computerMove == "rock") {
    result = "You win! Paper beats Rock!";
    myScore += 1;
  }
  else if (myMove == "paper" && computerMove == "scissors") {
    result = "You lose! Scissors beat paper";
    computerScore += 1;
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
  //Show icons fa-hand-rock-o fa-hand-paper-o fa-hand-rock-o - There is probably a better way of doing this
  let changeMyIcon = function() {
    if (myMove == "rock") {
      myChoiceIcon.classList.remove("fa-spinner");
      myChoiceIcon.classList.remove("fa-hand-paper-o");
      myChoiceIcon.classList.remove("fa-hand-scissors-o");
      myChoiceIcon.classList.add("fa-hand-rock-o");
    }
    else if (myMove == "paper") {
      myChoiceIcon.classList.remove("fa-spinner");
      myChoiceIcon.classList.remove("fa-hand-rock-o");
      myChoiceIcon.classList.remove("fa-hand-scissors-o");
      myChoiceIcon.classList.add("fa-hand-paper-o");
    }
    else if (myMove == "scissors") {
      myChoiceIcon.classList.remove("fa-spinner");
      myChoiceIcon.classList.remove("fa-hand-paper-o");
      myChoiceIcon.classList.remove("fa-hand-rock-o");
      myChoiceIcon.classList.add("fa-hand-scissors-o");
    }
  };
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
  };

  changeMyIcon();
  changeComputerIcon();
  //Display current score
  myScoreElement.textContent = myScore;
  computerScoreElement.textContent = computerScore;
  //Determine and display the winner, reset the score and counter
  if (counter == 5) {
    if (myScore > computerScore) {
      winner = "Congratulations! You won the game!";
    }
    else if (myScore == computerScore) {
      winner = "It's a draw. This game has no winner!";
    }
    else if (myScore < computerScore) {
      winner = "You lost the game!";
    }
    alert(winner);
    counter = 0;
    myScore = 0;
    computerScore = 0;
  }
};
