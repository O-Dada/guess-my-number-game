'use strict';
//Variable declaration
let checkBtn = document.querySelector('.check'),
  message = document.querySelector('.message'),
  againBtn = document.querySelector('.again');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function gamePlay() {
  let guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (guess == '') {
    message.textContent = 'No valid number inputted⛔';

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else {
    message.textContent = 'You won the game🥇';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > document.querySelector('.highscore').textContent) {
      document.querySelector('.highscore').textContent = score;
    }
  }
}

//Event handler for checking answers
checkBtn.addEventListener('click', gamePlay);

//Event handler for restarting the game when you click 'again'
againBtn.addEventListener('click', resetGame);

// Function for the click 'again' to restart the game
function resetGame() {
  message.textContent = 'Start guessing';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.number').style.width = '15rem';
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
}
