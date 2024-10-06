let computerScore = 0;
let playerScore = 0;

const userScore =  document.querySelector(".userScore");
const compScore = document.querySelector(".compScore");


function getComputerChoice() {
    let handsign = Math.floor(Math.random() * 3);

    switch (handsign) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "nothing";
    }
}

const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const humanHand = event.target.dataset.answer
        const computerHand = getComputerChoice();
        playRound(humanHand, computerHand);
    })
})

const div = document.querySelector("div")

function playRound(humanChoice, computerChoice) {
    let resultMsg = '';
    
    if (humanChoice === computerChoice) {
        resultMsg = ("Its a Tie!");
    
    } else {

        if(humanChoice === 'rock') {
            if(computerChoice === 'scissors'){
                resultMsg = (`You win! ${humanChoice} beats ${computerChoice}`)
                playerScore++;

            } else {
                resultMsg = (`You lose! ${humanChoice} loses to ${computerChoice}`)
                computerScore++;
            }
        }
        
        else if (humanChoice === 'paper') {
            if(computerChoice === 'rock') {
                resultMsg = (`You win! ${humanChoice} beats ${computerChoice}`)
                playerScore++;

            } else {
                resultMsg = (`You lose! ${humanChoice} loses to ${computerChoice}`)
                computerScore++;
            }
        }

        else if (humanChoice === 'scissors') {
            if(computerChoice === 'paper') {
                resultMsg = (`You win! ${humanChoice} beats ${computerChoice}`)
                playerScore++;
        
            } else {
                resultMsg = (`You lose! ${humanChoice} loses to ${computerChoice}`)
                computerScore++;
            }
        }
    }
    
    div.textContent = resultMsg;
    userScore.textContent = `User's Score: ${playerScore}`;
    compScore.textContent = `Computer's Score: ${computerScore}`;

    if (playerScore === 5) {
        alert("You are the winner congratulations");
        resetGame();
    }
    
    if (computerScore === 5) {
        alert("Computer is the winner better luck next time!");
        resetGame();
    }
}



function resetGame() {
    playerScore = 0;
    computerScore = 0;
    userScore.textContent = `User's Score: ${playerScore}`;
    compScore.textContent = `Computer's Score: ${computerScore}`;
    div.textContent = "Rematch?"
}
