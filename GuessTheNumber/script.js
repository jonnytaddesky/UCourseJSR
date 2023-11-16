'use strict';

// const eventHandler = function () {
//     console.log(document.querySelector('.number-input').value);
// }
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

const displayGuessMessage = function (message) {
    document.querySelector('.guess-message').textContent = message;
};

const displayQuestionMessage = function (question) {
    document.querySelector('.question').textContent = question;
};

const displayHighscoreMessage = function (messageHighscore) {
    document.querySelector('.highscore').textContent = messageHighscore;
};

const displayScoreMessage = function (messageScore) {
    document.querySelector('.score').textContent = messageScore;
};

const inputNumber = function () {
    return Number(document.querySelector('.number-input').value);
};

document.querySelector('.check').addEventListener('click', function () {
    // const guessingNumber = Number(
    //     document.querySelector('.number-input').value
    // );
    const guessingNumber = inputNumber();
    console.log(guessingNumber, typeof guessingNumber);
    //No input
    if (!guessingNumber) {
        // document.querySelector('.guess-message').textContent = 'Enter number';
        displayGuessMessage('Enter number');
        //Player won
    } else if (guessingNumber === secretNumber) {
        // document.querySelector('.guess-message').textContent = 'Complete!';
        displayGuessMessage('Complete!');

        // document.querySelector('.question').textContent = secretNumber;
        displayQuestionMessage(secretNumber);
        document.querySelector('body').style.backgroundColor =
            'rgb(9, 250, 21)';
        document.querySelector('.question').style.width = '50rem';
        if (score > highscore) {
            highscore = score;
            // document.querySelector('.highscore').textContent = highscore;
            displayHighscoreMessage(highscore);
        }
        //Number from input is wrong
    } else if (guessingNumber !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.guess-message').textContent =
            //     guessingNumber > secretNumber ? 'Too high!' : 'Too low!';
            displayGuessMessage(
                guessingNumber > secretNumber ? 'Too high!' : 'Too low!'
            );
            score--;
            // document.querySelector('.score').textContent = score;
            displayScoreMessage(score);
        } else {
            // document.querySelector('.guess-message').textContent = 'Game Over';
            displayGuessMessage('Game Over!');
            document.querySelector('.score').textContent = 0;
        }
    }
    //Too high
    // else if (guessingNumber > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.guess-message').textContent = 'Too high!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.guess-message').textContent = 'Game Over';
    //         document.querySelector('.score').textContent = 0;
    //     }
    //     //Too low
    // } else if (guessingNumber < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.guess-message').textContent = 'Too low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.guess-message').textContent = 'Game Over';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    console.log(secretNumber);
    // document.querySelector('.question').textContent = '???';
    displayQuestionMessage('???');
    document.querySelector('.question').style.width = '25rem';
    // document.querySelector('.guess-message').textContent = 'Begin guess!';
    displayGuessMessage('Begin guess!');
    // document.querySelector('.score').textContent = score;
    displayScoreMessage(score);
    document.querySelector('.number-input').value = '';
    document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
});
