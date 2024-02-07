'use strict';
//document.querySelector selects the class or tag given to it to select in this case
// the class 'message' then we uise the .textContent to read the text content present
// in the class message
//console.log(document.querySelector('.message').textContent);
/*DOM stands for DOCUMENT OBJECT MODEL, it is a structured representation
of html documents and allows JS to access html and styles and manipulate
them*/

//stored in a tree structure
/*document.querySelector('.message').textContent = 'i changed this lmao';
console.log(document.querySelector('.message').textContent);


document.querySelector('.score').textContent = '1233';

*/
// function that runs all the main code

function runsEverything(){
   document.querySelector('body').style.backgroundColor = "#222";   //sets all text that will be edited throught the running the function to their default
   document.querySelector('.banner').textContent = "Guess My Number!"; //sets banner back to default
   document.querySelector('.number').textContent = "?";   //same with the ?
   document.querySelector('.message').textContent = "Start guessing..."; 
   document.querySelector('.guess').value = null;  //makes text input box empty


let highScr = Number(document.querySelector('.highscore').textContent);
   //this generates the random number that will be used in the game
const randomNum = Math.round(Math.random() * 20)+1;
console.log(randomNum);

//this keeps check of your score count
let scoreCnt = 20;
document.querySelector('.score').textContent  = "20";  //sets content of score counter to 20. which is its default

//fucntion that checks the inputed number
let isCorrect = function(){

  
   //gets number entered
   let valInt = Number(document.querySelector('.guess').value);
   //console.log(typeof valInt);

   //checks if the score count is 0, if 0 the game is over
   if(scoreCnt === 0){
        document.querySelector('.banner').textContent = "YOU HAVE LOST"; //change message to you lost
        document.querySelector('.number').textContent = randomNum; // changes ? to the number u had to choose
        document.querySelector('body').style.backgroundColor = "#CD2427";// changes the background to red
   }

   // this is if score score count is not 0, cant go lower than 0 cause game ends at 0 and then score decrements by 1 point only at a time
   else{
      // this checks if inout value is equal to random number which was  generated, if it is correct it shows as u win
   if(valInt === randomNum){
      document.querySelector('.message').textContent = "CORRECT ANSWER 🥳🥳🥳";  // changes message to you won
      //document.querySelector('.highscore').textContent = scoreCnt;  //sets score count as highscore
      document.querySelector('.banner').textContent = "YOU HAVE WON";   // displays u won on the banner
        document.querySelector('.number').textContent = "W"; // sets ? to W
        document.querySelector('body').style.backgroundColor = "#008000"; //sets background colour to green
        let scoreChk = Number(document.querySelector('.score').textContent);
        if(scoreChk > highScr){
          document.querySelector('.highscore').textContent = scoreCnt;
        }
      
   }

   // this is if input number is not equal to randNum
   else{
      if(valInt > randomNum){
         document.querySelector('.message').textContent = "bit lower"; // changes message to lower if valInt > randNum
         scoreCnt--;                                                   // decrements score by 1
      }
      else{
         document.querySelector('.message').textContent = "bit higher";//changes message to higher if valInt < randNum
         scoreCnt--;                                                   // decrement score by 1
      }
   }
   document.querySelector('.score').textContent   = scoreCnt;          //sets score count to scoreCnt
   
}


}

//function printOut (){
//   console.log(document.querySelector('.guess').value);
//}
document.querySelector('.check').addEventListener('click', isCorrect);    //this is event listener for the check button if it is clicked

}

runsEverything();                                                        //this function is called when website is first loaded so the whole thing runs  



document.querySelector('.again').addEventListener('click', runsEverything ); // this is when the  again button is cicked 
 




