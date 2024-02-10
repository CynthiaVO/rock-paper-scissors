function getUserChoice() {
  // ask for player to input selection
  let playerChoice = "rock";
  return playerChoice;
}
function getComputerChoice() {
  //randomly assigns the computer choice from either rock, paper or scissors
  //randomly generate 1 of 3 numbers
  //assign the choice which corresponds to that number to the computer
  var randChoice = Math.floor(Math.random() * (4 - 1)) + 1;
  //assign the computer choice of rock paper scissors based on number
  //return the choice
  let computerChoice;
  if (randChoice == 1) {
    computerChoice = "rock";
    //document.getElementById("computerChoice").innerHTML = "rock";
  }  
  else if (randChoice == 2) {
    computerChoice = "paper";
    //document.getElementById("computerChoice").innerHTML = "paper";
  }
  else {
    computerChoice = "scissors";
    //document.getElementById("computerChoice").innerHTML = "scissors";
  }
  console.log(computerChoice);
  return computerChoice;
}
let computerChoice = getComputerChoice();

//playRound(playerChoice, computerChoice);
//function playRound(playerSelection, computerSelection) {
  
  //compare their selection to the computer selection
  //output winner
//}
