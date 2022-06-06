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

function playerSelection(){

}

function computerSelection(){

}

console.log(computerPlay());