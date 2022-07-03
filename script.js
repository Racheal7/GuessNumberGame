'use strict';

const numberRange = 20; // specify the guess number range
let secretNumber = Math.trunc(Math.random() * numberRange) + 1; //randomly generate a random number
let score = 10;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Function to call when click "Check" button.
function clickCheck() {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    displayMessage(`⛔️ No number!`);
  } else if (guess === secretNumber) {
    // when players win
    displayMessage(`🎉 Correct Number!`);
    document.querySelector('h1').textContent = `🎉 Congrats! You Win! 🎉`;
    document.querySelector('.number').textContent = secretNumber; // display the correct number
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // record the highest score.
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    // when the guess is wrong
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? `📈 Your guess is too high!`
          : `📉 Your guess is too low!`
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector(
        'h1'
      ).textContent = `💥 Sorry You Lost! Try Again!`;
      displayMessage(`💥 Sorry, you lost the game!`);
      document.querySelector('.score').textContent = 0;
    }
  }
}

document.querySelector('.check').addEventListener('click', clickCheck);

// Enable 'enter' key to check result.
document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    clickCheck();
  }
});

// Implementation of the 'again' button.
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222'; // change the background color back
  document.querySelector('.number').style.width = '15rem'; // change the element width back
  document.querySelector('.number').textContent = '?'; // change number back to secret.
  document.querySelector('h1').textContent = `Guess The Number!`;

  secretNumber = Math.trunc(Math.random() * numberRange) + 1; //randomly generate a random number

  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
