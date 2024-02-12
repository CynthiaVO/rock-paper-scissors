function getComputerChoice() {
  //randomly generate 1 of 3 numbers
  var randChoice = Math.floor(Math.random() * (4 - 1)) + 1;
  //assign the computer choice of rock paper scissors based on number
  //let computerChoice;
  switch (randChoice) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  } 
  //return the choice
  //console.log(computerChoice);  
  document.getElementById("computer").innerHTML = "The computer chose: " + computerChoice;
  return computerChoice;
}
//now get user choice
function getUserChoice() {
  let choice = prompt("Please enter rock, paper or scissors", "no choice");
  choice = choice.toLowerCase();
  if (choice != null) {
    if (choice == "rock" || choice == "paper" || choice == "scissors"){
      document.getElementById("user").innerHTML = "You chose: " + choice;
    }
    else {
      document.getElementById("user").innerHTML = "I don't recognize that choice! Try again?";
    }
  }
}

//let computerChoice = getComputerChoice();
//let userChoice = getUserChoice();
//playRound(userChoice, computerChoice);

/*playRound(userChoice, computerChoice);
function playRound(playerSelection, computerSelection) {
  //if they are the same choice then print "It's a tie!"
  if (playerSelection == computerSelection) {
    result = "it's a tie!";
    console.log(result);
  }
  //if they are not the same compare selections to determine winner
  //output winner
}*/
