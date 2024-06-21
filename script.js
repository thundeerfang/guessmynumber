'use strict';

let score = 20;
let scoreTotal = document.querySelector('.score').textContent;
document.querySelector('.score').textContent = score;

let secretNumber = Math.trunc(Math.random()*20) +1;


document.querySelector('.check') .addEventListener('click', function clickbot(){
    const values = Number(document.querySelector('.guess').value);

    if(values == '') {
        document.querySelector('.message').textContent = 'No Number!';
    }

    else if(values === secretNumber){
        document.querySelector('.message').textContent = '🎉Correct Number!';
        var highScore = score++;
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    }

    else if(values < secretNumber){
        if(score > 0){
        document.querySelector('.message').textContent = '📉 Too Small Number!';
        score--;
        document.querySelector('.score').textContent = score;
    }
    else{
        document.querySelector('.message').textContent = 'You Loose!';
    }
}

    else if(values > secretNumber){
        if(score > 0){
        document.querySelector('.message').textContent = '📈 Too High Number!';
        score--;
        document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'You Loose!';
        }
    }

})

document.querySelector('.again').addEventListener('click', function again(){ 
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random()*20) +1;
    document.querySelector('body').style.backgroundColor = '#222';
    if (window.innerWidth <= 700) {
        document.querySelector('.number').style.width = '10rem';
    } else {
        document.querySelector('.number').style.width = '15rem';
    }
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});
