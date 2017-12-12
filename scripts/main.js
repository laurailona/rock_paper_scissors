var rpsArray = ["rock", "paper", "scissors"]
var computerMove = "";
var result = "";
var myMove = "Rock";
var computerScore = 0;
var myScore = 0;
var scoreBoard = "";
var winner = "";
var computerPlay;
var game;

game = function() { 
  //Create Computer's move
  computerPlay = function() {
    let randomNumber = Math.floor(Math.random() * 3);
    computerMove = rpsArray[randomNumber];
  };
  computerPlay();

  //prompt to say your move
  myMove = window.prompt("What's it gonna be? Rock, paper, scissors?");
  myMove = myMove.toLowerCase();

  //Determine result
  if (myMove !== "rock" && myMove !== "paper" && myMove !== "scissors") {
    result = "That makes no sense...the game is called 'Rock, Paper, Scissors'!";
  }
  else if (computerMove == myMove) {
    result = "Oh no! It's a draw...try again";
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
    result == "You lose! Rock beats Scissors";
    computerScore += 1;
  }
  else if (myMove == "paper" && computerMove == "rock") {
    result == "You win! Paper beats Rock!";
    myScore += 1;
  }
  else if (myMove == "paper" && compuerMove == "scissors") {
    result == "You lose! Scissors beat paper";
    computerScore += 1;
  }

  //Display result
  console.log(result);

  //Display current score
  scoreBoard = `Your score:${myScore} Computer's score: ${computerScore}`;
  console.log(scoreBoard);
};

//Play 5 rounds
for (let i = 0; i <= 4;i++) {
  game();
};

//Determine and display the winner
if (myScore > computerScore) {
  winner = "Congratulations! You won the game!";
}
else if (myScore == computerScore) {
  winner = "It's a draw. This game has no winner!";
}
else if (myScore < computerScore) {
  winner = "You lost the game!";
}

console.log(winner);
