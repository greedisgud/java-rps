let playerScore = 0;
let computerScore = 0;
let playerScore_span = document.getElementById("player-score");
let computerScore_span = document.getElementById("computer-score");
let scoreBoard_div = document.querySelector(".scoreBoard");
let result_div = document.querySelector(".result");
let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");

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

function win(playerSelection, computerSelection){
    playerScore ++;
    playerScore_span.innerHTML = playerScore;
    result_div.innerHTML = (`${playerSelection} beats ${computerSelection} you win!`);
    document.getElementById(playerSelection).classList.add("green-glow");
}

function lose(playerSelection, computerSelection){
    computerScore ++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = (`${computerSelection} beats ${playerSelection} you lose!`)
}

function tie(playerSelection, computerSelection){
    result_div.innerHTML = (`${playerSelection} equals ${computerSelection}, tie!`)
}

function playGame(playerSelection){
    let computerSelection = computerPlay();
    if(playerScore === 5 || computerScore === 5){
        window.location.reload();
    }
    switch(playerSelection + computerSelection){
        case "ROCKSCISSORS":
        case "PAPERROCK":
        case "SCISSORSPAPER":
            win(playerSelection, computerSelection);
            break;
        case "ROCKPAPER":
        case "PAPERSCISSORS":
        case "SCISSORSROCK":
            lose(playerSelection, computerSelection);
            break;
        case "ROCKROCK":
        case "PAPERPAPER":
        case "SCISSORSSCISSORS":
            tie(playerSelection, computerSelection);
            break;
    }

}

function btnActions(){
 rockBtn.addEventListener('click', function(){
     playGame("ROCK");
 })

 paperBtn.addEventListener('click', function(){
    playGame("PAPER");
})
scissorsBtn.addEventListener('click', function(){
    playGame("SCISSORS");
})
}

btnActions();














