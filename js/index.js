console.log("Welcome to tic tac toe game");

const CHOICE = {
    0 : "ROCK",
    1 : "PAPER",
    2 : "SCISSOR"
};

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3); // generates random number from 0 to 2
    for (let index in CHOICE) {
        if (randomNum == index) {
            return CHOICE[index];
        }
    }  
}

let playerInfo = {
    selection : null,
    winCount: 0,                         
};

let computerInfo = {
    selection : null,
    winCount: 0, 
};

function playRound(playerSelection, computerSelection) { 
    if (playerSelection == computerSelection) {
        return "It is a tie!";
    } else if ((playerSelection == "ROCK" && computerSelection == "SCISSOR") || 
                (playerSelection == "PAPER" && computerSelection == "ROCK") ||
                (playerSelection == "SCISSOR" && computerSelection == "PAPER")) 
    {
        playerInfo.winCount++;
        return "You win! " + playerSelection + " beats " + computerSelection;  
    } else {
        computerInfo.winCount++;
        return "You Loss! " + computerSelection + " beats " + playerSelection;  
    }
}

function game() {
    console.log("Lets Play Game");
    while (playerInfo.winCount != 5 && computerInfo.winCount != 5) {
        playerInfo.selection = prompt("Your turn: ");
        computerInfo.selection = getComputerChoice();
        console.log(playRound(playerInfo.selection.toUpperCase(), computerInfo.selection));
    }
    if (playerInfo.winCount == 5) {
        return true;
    }
    return false;
}

game() ? console.log("You Won the Gane!") : console.log("You Lost the Gane!");

