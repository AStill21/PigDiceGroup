function Player(name,totalScore){
  this.name = name;
  this.totalScore = 0;
}

function Turn(){
  this.activePlayer= 1;
  this.sumRolled = 0;
  this.endScore = 0;
}

function diceRoll(){
  return Math.floor(Math.random()*6)+1;

}

Turn.prototype.addScore=function(){
  let roll = diceRoll();
  if (roll === 1){
    return this.sumRolled=0
  } else {
  return this.sumRolled=this.sumRolled + roll;
  };
}; 

Turn.prototype.switchPlayer = function(player1, player2){
  
}
// function addScore(){
//   let roll = diceRoll();
//   let rollScore = (this.sumRolled = this.sumRolled + roll);
//   if (roll === 1){
//     return this.sumRolled = 0;
//   } else {
//     return rollScore;
//   }
// }

let playerOne = new Turn("Player One", 0);
let playerTwo = new Turn("Player Two", 0);


/* function whosTurn(player1, player2){
    let player1.activePlayer === true
    if (player1.sumRolled === 0){
      player1.activePlayer === false
      player2.activePlayer === true
    } else (player1.activePlayer === true)
    
}



// function totalScore () {
//   this.roll={};
// }

// function Dice(roll) {
//   this.roll=roll;

// function Player (win, lose) {
//   this.win=win;
//   this.lose=lose;
// }
//  
cosnt goodRoll=[2, 3, 4, 5, 6]
    cosnt badRoll = [1]
    if dice.roll ===  {
//      return roll.startOver;
//    } else  
//  }