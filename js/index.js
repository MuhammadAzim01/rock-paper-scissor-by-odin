const CHOICE = {
    0 : "rock",
    1 : "paper",
    2 : "scissor"
};

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3); // generates random number from 0 to 2
    for (let index in CHOICE) {
        if (randomNum == index) {
            return CHOICE[index];
        }
    }  
}

const scores = document.querySelectorAll(".score");

function playRound(playerSelection, computerSelection) { 
    if (playerSelection == computerSelection) {
        return "It is a tie!";
    } else if ((playerSelection == "rock" && computerSelection == "scissor") || 
                (playerSelection == "paper" && computerSelection == "rock") ||
                (playerSelection == "scissor" && computerSelection == "paper")) 
    {
        scores[0].innerText++;
        return "You win! " + playerSelection + " beats " + computerSelection;  
    } else {
        scores[1].innerText++;
        return "You Loss! " + computerSelection + " beats " + playerSelection;  
    }
}

const result = document.querySelector(".result");
const buttons = document.querySelectorAll(".btn");

function createResetbtn () {
    const resetbtn = document.createElement("button");
    resetbtn.className = "reset";
    resetbtn.textContent = "RESET";
    return resetbtn;
}

function toggleButtons(toggle) {
    buttons.forEach(button => button.disabled = toggle) 
}


buttons.forEach(button => {
    button.addEventListener('click', ()=> {
        const playerScore = scores[0].textContent;
        const computerScore = scores[1].textContent;
        if (playerScore < 5 && computerScore < 5) {
            result.innerText = playRound(button.id, getComputerChoice());
        } else {
            toggleButtons(true);
            result.innerText = "Game End";
            const container = document.querySelector(".container-info");
            const resetbtn = createResetbtn();
            container.appendChild(resetbtn);
            resetbtn.addEventListener('click', ()=> {
                toggleButtons(false);
                scores.forEach(score => score.textContent = 0);
                result.innerText = "First to five wins";
                resetbtn.remove();
            });
        }
    })
});
