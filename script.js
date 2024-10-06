computerScore = 0;
playerScore = 0;

function getComputerChoice() {
    let handsign = Math.floor(Math.random() * 3);

    switch (handsign) {
        case 0:
            console.log("rock");
            return "rock";
        case 1:
            console.log("paper");
            return "paper";
        case 2:
            console.log("scissors");
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


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Its a Tie!");
        return;
    }

    if(humanChoice === 'rock') {
        if(computerChoice === 'scissors'){
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            playerScore++;

        } else {
            console.log(`You lose! ${humanChoice} loses to ${computerChoice}`)
            computerScore++;
        }
    }
    else if (humanChoice === 'paper') {
        if(computerChoice === 'rock') {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            playerScore++;

        } else {
            console.log(`You lose! ${humanChoice} loses to ${computerChoice}`)
            computerScore++;
        }
    }

    else if (humanChoice === 'scissors') {
        if(computerChoice === 'paper') {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            playerScore++;
        
        } else {
            console.log(`You lose! ${humanChoice} loses to ${computerChoice}`)
            computerScore++;
        }
    }
}





const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
