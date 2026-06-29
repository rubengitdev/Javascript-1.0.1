const options = ["Rock", "Paper", "Scissors"];

// Get DOM element from HTML
const playerScoreSpanElement = document.querySelector("#player-score");
const computerScoreSpanElement = document.querySelector("#computer-score");
const winnerMsgElement = document.querySelector("#winner-msg");
const optionsContainer = document.querySelector(".options-container");

const roundResultsMsg = document.querySelector("#results-msg");
const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const resetGameBtn = document.querySelector("#reset-game-btn");

// Scores variables
let playerScore = 0;
let computerScore = 0;

// Event Listeners
rockBtn.addEventListener("click", () => {
  showResults("Rock");
});

paperBtn.addEventListener("click", () => {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", () => {
  showResults("Scissors");
});

resetGameBtn.addEventListener("click", () => resetGame());

// Get computer input
function getRandomComputerResult() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// Validation has Player won the round
function hasPlayerWonTheRound(playerChoice, computerChoice) {
  if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Rock")
  ) {
    return true;
  }
  return false;
}

// Get the result
function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (userOption === computerResult) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

function showResults(userOption) {
  const result = getRoundResults(userOption);
  roundResultsMsg.textContent = result;
  playerScoreSpanElement.textContent = playerScore;
  computerScoreSpanElement.textContent = computerScore;

  if (playerScore === 3) {
    winnerMsgElement.textContent = `Player has won the game!`;
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  } else if (computerScore === 3) {
    winnerMsgElement.textContent = `Computer has won the game!`;
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;

  playerScoreSpanElement.textContent = playerScore;
  computerScoreSpanElement.textContent = computerScore;

  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";

  winnerMsgElement.textContent = "";
  roundResultsMsg.textContent = "";
}
