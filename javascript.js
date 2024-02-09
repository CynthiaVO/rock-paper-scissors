function getComputerChoice() {
  //randomly assigns the computer choice from either rock, paper or scissors
  //randomly generate 1 of 3 numbers
  //assign the choice which corresponds to that number to the computer
  var computerChoice = Math.floor(Math.random() * (4 - 1)) + 1;
  //assign the computer choice of rock paper scissors based on number
  //return the choice
  if (computerChoice == 1)
    return "rock";
  if (computerChoice == 2)
    return "paper";
  else
    return "scissors";
  
  
  return computerChoice;
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  // your code here!
}
