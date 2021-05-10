'use strict';
let score=20;
let highscore=0;
let secretNumber=Math.trunc(Math.random()*20)+1;

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess);
    if(!guess){
        document.querySelector('.message').textContent='no number';
        
    } else if (guess===secretNumber){
        document.querySelector('.message').textContent='correcr number';
        
        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('body').style.background='#60b347';
        if (score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }else if(guess!==secretNumber){
        if (score>1){
            document.querySelector('.message').textContent=guess>secretNumber?'too high':'too low';
            score--;
            document.querySelector('.score').textContent=score;
        }else {
            document.querySelector('.message').textContent='you lost the game';
            document.querySelector('.score').textContent=0; 
    }
 }
});

    // }else if (guess>secretNumber){
    //     if (score>1){
    //         document.querySelector('.message').textContent='no is too hight'
    //         score--;
    //         document.querySelector('.score').textContent=score;
    //     }else {
    //         document.querySelector('.message').textContent='you lost the game';
    //         document.querySelector('.score').textContent=0; 
    //     }

    // }else if(guess<secretNumber){
    //     if (score>1){
    //         document.querySelector('.message').textContent='no is too short'
    //         score--;
    //         document.querySelector('.score').textContent=score;
    //     }else {
    //         document.querySelector('.message').textContent='you lost the game';
    //         document.querySelector('.score').textContent=0; 
    //     }
        
    // }
// })
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='Start guessing';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.background='#111'
});