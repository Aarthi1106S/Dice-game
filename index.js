let randomNumber1 = 0;
let randomNumber2 = 0;

function rollDice1() {
  let dice1 = document.querySelector(".img1");
  dice1.classList.add("shake");

  setTimeout(() => {
    randomNumber1 = Math.floor(Math.random() * 6) + 1;
    dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
    dice1.classList.remove("shake");
    
  }, 500);
}

function rollDice2() {
  let dice2 = document.querySelector(".img2");
  dice2.classList.add("shake");

  setTimeout(() => {
    randomNumber2 = Math.floor(Math.random() * 6) + 1;
    dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");
    dice2.classList.remove("shake");
    checkWinner();
  }, 500);
}

// Check winner only if both dice have been rolled
function checkWinner() {
  if (randomNumber1 !== 0 && randomNumber2 !== 0) {
    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = " Player 1 Wins! 🚩";
    } else if (randomNumber2 > randomNumber1) {
      document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
      document.querySelector("h1").innerHTML = "It's a Draw!";
    }
  }
}

document.querySelector(".img1").addEventListener("click", rollDice1);
document.querySelector(".img2").addEventListener("click", rollDice2);




