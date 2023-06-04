


class Player {
    constructor() {
      this.score = 0;
      this.gameChoice = null;
    }
}
  


let player = new Player();
let computer = new Player();

rock.disabled = true;
paper.disabled = true;
scissors.disabled = true;


function gameLogic()
{

  if((computer.gameChoice == player.gameChoice))
  {
    return "Tie";
  }

  if (player.gameChoice == "rock")
  {
    if (computer.gameChoice == "scissors")
    {
      return "You win"
    }
    if (computer.gameChoice == "paper")
    {
      return "You lost"
    }
  }

  if (player.gameChoice == "paper")
  {
    if (computer.gameChoice == "rock")
    {
      return "You win"
    }
    if (computer.gameChoice == "scissors")
    {
      return "You lost"
    }
  }

  if (player.gameChoice == "scissors")
  {
    if (computer.gameChoice == "paper")
    {
      return "You win"
    }
    if (computer.gameChoice == "rock")
    {
      return "You lost"
    }
  }



}

let button = document.getElementById("startGame");


button.addEventListener("click", function() {


  document.getElementById("score").textContent = player.score;
  document.getElementById("gameOver").textContent = "";
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  document.getElementById("computerChoice").textContent = "";
  document.getElementById("playerChoice").textContent = "";
  document.getElementById("outcome").textContent = "";

});



function playRound(event)
{


// get id from button
player.gameChoice = event.target.id;
  
// pick random list for computer
let computerChocies = ["rock", "paper", "scissors"];

computer.gameChoice = computerChocies[Math.floor(Math.random() * computerChocies.length)];



console.log(player.gameChoice);
console.log(computer.gameChoice);

let outcome = gameLogic();;


// display the game
document.getElementById("computerChoice").textContent = computer.gameChoice;
document.getElementById("playerChoice").textContent = player.gameChoice;
document.getElementById("outcome").textContent = outcome;

if(outcome == "You win" && player.score < 5)
{
  player.score += 1;
  document.getElementById("score").textContent = player.score;

}

if (player.score == 5) {
  player.score = 0;
  document.getElementById("gameOver").textContent = "GAME OVER";
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
}



}
