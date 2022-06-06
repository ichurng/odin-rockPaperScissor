function computerSelection(){
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = randomNumber;
    return computerChoice;
    /*
    if (randomNumber == 0){
        computerChoice = "Rock";
    }
    else if (randomNumber == 1){
        computerChoice = "Paper";
    }
    else if (randomNumber == 2){
        computerChoice = "Scissor";
    }
    */
    
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

function playRound(){
    let playerChoice = playerSelection();
    let computerChoice = computerSelection();
    console.log(playerChoice);
    console.log(computerChoice);
    if (playerChoice == 0 && computerChoice == 2){
        console.log("You win!");
    }
    else if (playerChoice == 2 && computerChoice == 0){
        console.log("You lose!");
    }
    else if (playerChoice == computerChoice){
        console.log("Its a tie!");
    }
    else if (playerChoice > computerChoice){
        console.log("You win!");
    }
    else{
        console.log("You lose!");
    }
}

playRound();