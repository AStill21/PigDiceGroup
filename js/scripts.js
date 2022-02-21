// function playerScore(){
//   let currentScore = [];
//   for (i=1; i <=100; i++){
//     currentScore.push(i);
//   }
//   return currentScore
// } this is a test

function Player(name,totalScore){
  this.name = name;
  this.totalScore = 0;
}

function Turn(activePlayer,endScore,sumRolled){
  this.activePlayer = activePlayer;
  this.endScore = endScore;
  this.sumRolled = 0;
}

function diceRoll(){
  let roll = Math.floor(Math.random()*6)+1;
  return roll;
}

Turn.prototype.addScore=function(roll){
  diceRoll();
  if (diceRoll ===1) {
    return sumRolled=0;
    } else {
      return sumRolled+diceRoll;
    };
} // This should be a number

 Player(currentScore, totalScore);
  playerOne.totalScore = currentScore+totalScore;
  



let playerOne = new Player("Name");
let playerTwo = new Player("Mister Beep Boop the Computer");
let turn = new Turn;

// let currentScore = sumRolled + diceRoll;
const addRoll= for(i=0; i)
const diceRoll= [1, 2, 3, 4, 5, 6]
let currentScore = diceRoll.map(function(number) {
return diceRoll
})