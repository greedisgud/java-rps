function computerPlay() {
    let random = Math.random();
    if (random <= 0.3333) {
        return "PAPER";
    } else if (random >= 0.6666) {
        return "ROCK";
    } else {
        return "SCISSORS";
    }
}
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){
        if (playerSelection === computerSelection) {
          return("Tie!")
        }
        if
          (playerSelection === 'ROCK' && computerSelection === 'SCISSORS' ||
          playerSelection === 'SCISSORS' && computerSelection === 'PAPER' ||
          playerSelection === 'PAPER' && computerSelection === 'ROCK'){
         
            playerScore++;
            return ("Player wins!");
        }
        if 
          (computerSelection === 'ROCK' && playerSelection === 'SCISSORS' ||
          computerSelection === 'SCISSORS' && playerSelection === 'PAPER' ||
          computerSelection === 'PAPER' && playerSelection === 'ROCK'){ 

            computerScore++
            return ("Computer wins!");
        } 
}

let i =0;
function game(){
    let computerSelection = computerPlay()
    let playerSelection = prompt("Enter Rock, Paper, or Scissors").toUpperCase();
    console.log(playRound(playerSelection, computerSelection))
    console.log("your score = " + playerScore);
    console.log("Computer's score = " + computerScore);
    i++;
    if (i !== 5) {
        game();
    } else {
        alert("Game Over=> User("+playerScore+") vs Computer("+computerScore+")");
    }
}

game();


















