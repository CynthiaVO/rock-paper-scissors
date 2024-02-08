function getComputerChoice() {
  //randomly assigns the computer choice from either rock, paper or scissors
  //randomly generate 1 of 3 numbers
  computerChoice = Math.floor(Math.random() * (max - min)) + min;
  console.log(computerChoice);
  //assign the choice which corresponds to that number to the computer
  //return the choice
}

function playRound(playerSelection, computerSelection) {
  // your code here!
}
