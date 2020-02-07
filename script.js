// window.addEventListener("DOMContentLoaded", init);

const rockBtn = document.querySelector(".rock");
const scissorsBtn = document.querySelector(".scissors");
const paperBtn = document.querySelector(".paper");

const playerOne = document.querySelector("#player1");
const playerTwo = document.querySelector("#player2");

const youWin = document.querySelector("#win");
const youLose = document.querySelector("#lose");
const draw = document.querySelector("#draw");

var NPCChoice = 0;

rockBtn.addEventListener("click", playRock);
scissorsBtn.addEventListener("click", playScissors);
paperBtn.addEventListener("click", playPaper);

function playRock() {
  playerOne.classList.add("rock");
  NPCChoice = Math.random();
  if (NPCChoice < 0.33) {
    playerTwo.classList.add("rock");
    draw.classList.remove("hidden");
    console.log("rock");
  } else if (NPCChoice < 0.66) {
    playerTwo.classList.add("paper");
    lose.classList.remove("hidden");
    console.log("paper");
  } else {
    playerTwo.classList.add("scissors");
    win.classList.remove("hidden");
    console.log("scissors");
  }
  setTimeout(resetGame, 1000);
}

function playPaper() {
  playerOne.classList.add("paper");
  NPCChoice = Math.random();
  if (NPCChoice < 0.33) {
    playerTwo.classList.add("rock");
    win.classList.remove("hidden");
    console.log("rock");
  } else if (NPCChoice < 0.66) {
    playerTwo.classList.add("paper");
    draw.classList.remove("hidden");
    console.log("paper");
  } else {
    playerTwo.classList.add("scissors");
    lose.classList.remove("hidden");
    console.log("scissors");
  }
  setTimeout(resetGame, 1000);
}

function playScissors() {
  playerOne.classList.add("scissors");
  NPCChoice = Math.random();
  if (NPCChoice < 0.33) {
    playerTwo.classList.add("rock");
    lose.classList.remove("hidden");
    console.log("rock");
  } else if (NPCChoice < 0.66) {
    playerTwo.classList.add("paper");
    win.classList.remove("hidden");
    console.log("paper");
  } else {
    playerTwo.classList.add("scissors");
    draw.classList.remove("hidden");
    console.log("scissors");
  }
  setTimeout(resetGame, 1000);
}

function resetGame() {
  draw.classList.add("hidden");
  win.classList.add("hidden");
  lose.classList.add("hidden");

  playerTwo.classList.remove("rock");
  playerTwo.classList.remove("paper");
  playerTwo.classList.remove("scissors");

  playerOne.classList.remove("rock");
  playerOne.classList.remove("paper");
  playerOne.classList.remove("scissors");
}
