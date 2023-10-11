//selecct
const yourScore = document.querySelector(".you");
const cScore = document.querySelector(".computer");
const conclusion = document.querySelector(".result");
const reload = document.querySelector(".restart");
let getComputerChoice = () => {
  let random = Math.floor(Math.random() * 3);
  let choice = ["rock", "paper", "scissors"];
  return choice[random];
};
let userScore = 0;
let computerScore = 0;
function result(userChoice, compChoice) {
  console.log(
    `User Score : ${userScore} and Computer Score : ${computerScore}`
  );
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
  // update scores in the dom
  yourScore.textContent = userScore;
  cScore.textContent = computerScore;
}

const buttons = document.querySelectorAll("button");

buttons.forEach((itm) => {
  itm.addEventListener("click", function play(event) {
    let userChoice = itm.textContent.toLowerCase(); // text content din buton
    let compChoice = getComputerChoice();
    result(userChoice, compChoice);

    if (userScore >= 5 || computerScore >= 5) {
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        buttons[i].classList.remove("hov");
      }
      if (userScore == computerScore) {
        conclusion.textContent =
          "TIE! YOU HAVE THE SAME SCORE AS THE COMPUTER!";
      } else if (userScore > computerScore) {
        conclusion.textContent =
          "YOU WON! YOU'RE SMARTER THAN A COMPUTER(haha not for so long bitchy bitch)";
      } else {
        conclusion.textContent =
          "YOU'VE LOST! PUNISHED BY A BUNCH OF CABLES :( WHAT A DORK";
      }
    }
  });
});

reload.addEventListener("click", () => {
  window.location.reload();
});
