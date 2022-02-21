# Pig Dice

## By _**{Rob, Hans, Cameron, and Amiya}**_

## Description: _This website contains a game that allows 2 players 'roll dice' and see who can make it to 100 first. Don't  be fooled, it's not as easy as it sounds! If the player rolls a 1, that player's current score reverts to 0._

## TESTS: Pig Dice

  _Describe: diceRoll_
  _Test: This will allow player to roll the dice_
  _Code: let roll = Math.floor(Math.random()*6)+1;_
  _Expectation: return random number 1-6 each 'roll'_

  _Test: This will declare a player_
  _Code: function Player(name, score)_
  _Expectation: this.name=name this.score=score_

  _Test: This will chronologically list out the function's operations._
  _Code: this.activePlayer; this.endScore; this.sumRolled_
  _Expectation: function wil process through each listed command in order._

  _Test: This will add the players rolled number to their score_
  _Code:  Turn.prototype.addScore=function(roll){
            this.sumRolled = this.sumRolled + roll;
              return this.sumRolled;
          }
  _Expectation: return sum of total score and current roll_

  _Test: currentScore
  _Code:let currentScore = sumRolled + rolled
  _Expectation: