'use strict';

const play1 = document.querySelector('.player--0');
const play2 = document.querySelector('.player--1');
const activePlay = document.querySelector('.player--active');
const dice = document.querySelector('.dice');
const startBtn = document.getElementById('startGame');
const hold = document.querySelector('.btn--hold');
const diceRoll = document.querySelector('.btn--roll');
const points1 = document.getElementById('score--0');
const points2 = document.getElementById('score--1');
const currpoint1 = document.getElementById('current--0');
const currpoint2 = document.getElementById('current--1');
const titlep1 = document.getElementById('name--0');
const titlep2 = document.getElementById('name--1');



const runEvery = function(){
dice.classList.add('hidden');
startBtn.classList.remove('hidden');

points1.textContent = 0;
points2.textContent = 0;
currpoint1.textContent = 0;
currpoint2.textContent = 0;
play1.classList.add('player--active');
play2.classList.remove('player--active');
titlep1.textContent = "Player 1"
titlep2.textContent = "Player 2"
play1.classList.remove('player--winner');
play2.classList.remove('player--winner');

const startGame = function(){

//play1.classList.remove('player--winner');
//play2.classList.remove('player--winner');
points1.textContent = 0;
points2.textContent = 0;
currpoint1.textContent = 0;
currpoint2.textContent = 0;
startBtn.classList.add('hidden');
dice.classList.remove('hidden');

const changeActive = function(){
    if(play1.classList.contains('player--active') === true){
       currpoint1.textContent = Number(currpoint1.textContent) + Number(points1.textContent);
       points1.textContent = 0;
       play2.classList.add('player--active');
       play1.classList.remove('player--active');
       console.log("player 2 is active now")
    }
    else{
       currpoint2.textContent = Number(currpoint2.textContent) + Number(points2.textContent);
       points2.textContent = 0;
       play1.classList.add('player--active');
       play2.classList.remove('player--active');
       console.log("player 1 is active now");
    }
}

hold.addEventListener('click', changeActive)

diceRoll.addEventListener('click', function(){
    const roll = Math.trunc(Math.random()*6) + 1;
    dice.src = "dice-"+roll+".png";
    console.log("dice rolled " + roll);
    if(roll == 1){
        points1.textContent = 0;
        points2.textContent = 0;
        changeActive();
    }
    else{
    if(play1.classList.contains('player--active')){
        points1.textContent = Number(points1.textContent) + roll;
       }
    else{
        points2.textContent = Number(points2.textContent) + roll;
    }
    checkWin();
    }
    
})

const checkWin = function (){
    console.log("this is running");
if(Number(currpoint1.textContent) >= '100'){
    points1.textContent = "WINNER";
    points2.textContent = "LOSER";
    play1.classList.add('player--winner');
}
else if(Number(currpoint2.textContent) >= 100){
    points2.textContent = "WINNER";
    points1.textContent = "LOSER";
    play2.classList.add('player--winner');
}

}


}
startBtn.addEventListener('click', startGame);

}

dice.classList.add('hidden');

runEvery();

document.querySelector('.btn--new').addEventListener('click', runEvery);