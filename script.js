'use strict';
let secretNumber = Math.trunc(Math.random()*20) +1;

let score = 20;
let scoreTotal = document.querySelector('.score').textContent;
let highScore = 0;
document.querySelector('.score').textContent = score;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

document.querySelector('.check') .addEventListener('click', function clickbot(){
    const values = Number(document.querySelector('.guess').value);

    if(!values) {
        displayMessage('⛔️ No number!');
    }

    else if(values === secretNumber){
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }

    else if(values !== secretNumber){
        if(score > 1){
            displayMessage(values > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
    }
    else{
        displayMessage('💥 You lost the game!');
        document.querySelector('.score').textContent = 0;    }
}


})

document.querySelector('.again').addEventListener('click', function again(){ 
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) +1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.values').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
