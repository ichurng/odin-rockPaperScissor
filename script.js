function computerSelection(){
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = randomNumber;
    return computerChoice;
    
}

function playerSelection(playerChoice){
    // let playerChoice = prompt("Please enter Rock, Paper, or Scissor");
    let playerChoiceNumber;
    if (playerChoice == "ROCK"){
        playerChoiceNumber = 0;
    }
    else if (playerChoice == "PAPER"){
        playerChoiceNumber = 1;
    }
    else if (playerChoice == "SCISSOR"){
        playerChoiceNumber = 2;
    }

    return playerChoiceNumber;
}


function playRound(playerShoot){
    let playerChoice = playerSelection(playerShoot);
    let computerChoice = computerSelection();

    if (playerChoice == 0 && computerChoice == 2){
        return 1;
    }
    else if (playerChoice == 2 && computerChoice == 0){
        return -1;
    }
    else if (playerChoice == computerChoice){
        return 0;
    }
    else if (playerChoice > computerChoice){
        return 1;
    }
    else{
        return -1;
    }
}


var playerScore = 0;
var computerScore = 0;
let container = document.createElement('div');
let text = document.createTextNode(`"Your Score: ${playerScore} \n Computer Score: ${computerScore}"`);
container.appendChild(text);
document.body.appendChild(container);

document.body.addEventListener('click', (e) => {
    if (e.target.nodeName == 'BUTTON'){
        let playerChoice = e.target.className;
        let result = playRound(playerChoice);
        if (result == 1){
            playerScore += 1;
        }
        else if (result == -1){
            computerScore += 1;
        }
        text.nodeValue = `"Your Score: ${playerScore} \n Computer Score: ${computerScore}"`;
    }

    if (playerScore == 5){
        text.nodeValue = "You win!";

    }
    else if (computerScore == 5){
        text.nodeValue = "You lose :(";
        playerScore = 0;
        computerScore = 0;
    }
})







    

       


