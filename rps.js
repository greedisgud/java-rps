function computerPlay(){
    let choices = ["ROCK", "PAPER", "SCISSORS"]
    let randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

let computerSelection = computerPlay();
let playerSelection = prompt("Enter Rock, Paper, or Scissors").toUpperCase();
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

            computerScore++;
            return ("Computer wins!");
        } 
}

function game(){
    if (playerScore === 5 || computerScore === 5){
        return ("Game is over, someone has scored 5 points!")
    }
}
console.log(playRound(playerSelection, computerSelection));
console.log(playerScore);
console.log(computerScore);







