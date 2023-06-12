"use strict";

//creating random number
let randomNumber = Math.trunc(Math.random() * 20 + 1);
let highScore = 0;
let score = 20;

let controlScore = function () {
  if (score > 1) {
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".message").textContent = "You lost!";
    document.querySelector(".score").textContent = 0;
    document.location.reload(true); // refresh the page
  }
};

document.querySelector(".check").addEventListener("click", function () {
  let guessNumber = Number(document.querySelector(".guess").value);

  if (!guessNumber) {
    document.querySelector(".message").textContent =
      "Please, do not leave empty, enter a number!";
  } else if (guessNumber >= 0 && guessNumber <= 20) {
    if (guessNumber > randomNumber) {
      document.querySelector(".message").textContent = "📈 Too High!";
      controlScore();
    } else if (guessNumber < randomNumber) {
      document.querySelector(".message").textContent = "📉 Too Low!";
      controlScore();
    } else {
      document.querySelector(".message").textContent = "💯 You Won!";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").textContent = randomNumber;
      document.querySelector(".number").style.width = "35rem";
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    }
  } else {
    alert("Please, enter the guess number between 0 and 20.");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").textContent = "";
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector(".score").textContent = score;
});
