let getComputerChoice = () => {
  let random = Math.floor(Math.random() * 3);
  let choice = ["rock", "paper", "scissors"];
  return choice[random];
};
let userScore = 0;
let computerScore = 0;
for (let i = 1; i <= 5; i++) {
  let userChoice = prompt(
    "Choose: Rock , Paper or Scissors?",
    ""
  ).toLowerCase();
  let compChoice = getComputerChoice();
  console.log(`You: ${userChoice} || Computer : ${compChoice}`);
  if (compChoice === userChoice) {
    console.log("Tie! You chose the same :D");
  } else if (compChoice === "rock" && userChoice === "scissors") {
    console.log("You Lose! Rock beats Scissors.");
    computerScore += 1;
  } else if (compChoice === "rock" && userChoice === "paper") {
    console.log("You Win! Paper beats Rock.");
    userScore += 1;
  } else if (compChoice === "paper" && userChoice === "scissors") {
    console.log("You Win! Scissors beats Paper.");
    userScore += 1;
  } else if (compChoice === "paper" && userChoice === "rock") {
    console.log("You Lose! Paper beats Rock");
    computerScore += 1;
  } else if (compChoice === "scissors" && userChoice === "paper") {
    console.log("You Lose! Scissors beats Paper");
    computerScore += 1;
  } else {
    console.log("You Win! Rock beats Scissors");
    userScore += 1;
  }
}
if (userScore == computerScore) {
  console.log("TIE! YOU HAVE THE SAME SCORE AS THE COMPUTER!");
} else if (userScore > computerScore) {
  console.log(
    "YOU WON! YOU'RE SMARTER THAN A COMPUTER(haha not for so long bitchy bitch)"
  );
} else {
  console.log("YOU'VE LOST! PUNISHED BY A BUNCH OF CABLES :( WHAT A DORK");
}
