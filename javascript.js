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
  let userChoice = prompt("Please enter rock, paper or scissors", "no choice");
  userChoice = userChoice.toLowerCase();
  if (userChoice != null) {
    if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors"){
      document.getElementById("user").innerHTML = "You chose: " + userChoice;
    }
    else {
      document.getElementById("user").innerHTML = "I don't recognize that choice! Try again?";
    }
  }
  return userChoice;
}

function playRound() {
  //this function runs on click
  //place inside a while loop for 5 rounds
  //display best out of 5
  //clear the results field:
  document.getElementById("results").innerHTML = "";
  
  //call the functions to provide choices
  let computerChoice = getComputerChoice();
  let userChoice = getUserChoice();
  
  //if they are the same choice then print "It's a tie!"
  if (computerChoice == userChoice) {
    result = "it's a tie! Try again.";
    document.getElementById("results").innerHTML = result;
  }
  else {
    //if they are not the same compare selections to determine winner
  //output winner
  
uLose = "Sorry, you lose. Play again?"
uWin = "You win! Play again?"
//userChoice equals rock
  //use a switch, or if else and only look at one case or if rock && paper display Ulose: 
  //all the lose statements, then at the end if all false print Uwin.
  //computerChoice equals paper, display Ulose
  //computerChoice equals scissors, display Uwin
//userChoice equals paper
  //computerChoice equals scissors, display Ulose
  //computerChoice equals rock, display Uwin
//userChoice equals scissors
  //computerChoice equals rock, display Ulose
  //computerChoice equals paperm, display Uwin

  if ((userChoice == "rock" && computerChoice == "paper")||
  (userChoice == "paper" && computerChoice == "scissors") || 
  (userChoice == "scissor") && (computerChoice == "rock")) {
    document.getElementById("results").innerHTML = uLose;
  }
  else {
    document.getElementById("results").innerHTML = uWin;
  }
  }
 
  
}