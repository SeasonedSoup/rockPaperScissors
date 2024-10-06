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

function getUserChoice() {
    try {
        const validChoice = ['rock', 'paper', 'scissors']
        let answer = prompt("Choose between rock, paper, scissors: ").toLowerCase().trim();
        if (validChoice.includes(answer)) {
            console.log(answer);
            return answer;
        } else { 
            console.log("Invalid answer that is not chosen between rock, paper,scissors");
            return getUserChoice();
        }
    } catch (err) {
        console.log("error" + err.message);
    }
}

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

