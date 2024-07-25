'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);

// document.querySelector('.guess').value = 23;

//
//
//
//Building the game

//creating the number to be guessed in range [1, 20]
let number = Math.round(Math.random() * 20) + 1;
// console.log(number);

// To add a click event to a selector, we must first add a listener
document.querySelector('.check').addEventListener('click', function () {
  if (document.querySelector('.guess').value == number) {
    document.querySelector('.number').textContent = number;
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    //Manipulating CSS
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (
      document.querySelector('.highscore').textContent <
      document.querySelector('.score').textContent
    ) {
      document.querySelector('.highscore').textContent =
        document.querySelector('.score').textContent;
    }
  } else {
    if (document.querySelector('.guess').value == '') {
      document.querySelector('.message').textContent = '⛔️ No number!';
    } else {
      document.querySelector('.score').textContent--;
      if (document.querySelector('.guess').value < number) {
        document.querySelector('.message').textContent = '📉 Too low!';
      } else {
        document.querySelector('.message').textContent = '📈 Too high!';
      }
    }
  }
});

//Add event listener to the Again button
document.querySelector('.again').addEventListener('click', function () {
  number = Math.round(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  //Manipulating CSS
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
