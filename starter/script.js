'use strict';
let score=20;
const secretNumber=Math.trunc(Math.random()*20)+1;
document.querySelector('.number').textContent=secretNumber;
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess);
    if(!guess){
        document.querySelector('.message').textContent='no number';
    } else if (guess===secretNumber){
        document.querySelector('.message').textContent='correcr number'
    }else if (guess>secretNumber){
        if (score>1){
            document.querySelector('.message').textContent='no is too hight'
        score--;
        document.querySelector('.score').textContent=score;
        }else {
            document.querySelector('.message').textContent='you lost the game';
            document.querySelector('.score').textContent=0; 
        }
    }else if(guess<secretNumber){
        if (score>1){
            document.querySelector('.message').textContent='no is too short'
        score--;
        document.querySelector('.score').textContent=score;
        }else {
            document.querySelector('.message').textContent='you lost the game';
            document.querySelector('.score').textContent=0; 
        }
        
    }
})