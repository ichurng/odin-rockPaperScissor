function computerPlay(){
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    if (randomNumber == 0){
        computerChoice = "Rock";
    }
    else if (randomNumber == 1){
        computerChoice = "Paper";
    }
    else if (randomNumber == 2){
        computerChoice = "Scissor";
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection){

}

function playerSelection(){
    let playerChoice = prompt("Please enter Rock, Paper, or Scissor");
    playerChoice = playerChoice.toUpperCase();
    let playerChoiceNumber;
    if (playerChoice == "ROCK"){
        playerChoiceNumber = 0;
    }
    else if(playerChoice == "PAPER"){
        playerChoiceNumber = 1;
    }
    else if(playerChoice == "SCISSOR"){
        playerChoiceNumber = 2;
    }
    return playerChoiceNumber;
}

function computerSelection(){

}

console.log(computerPlay());
console.log(playerSelection());