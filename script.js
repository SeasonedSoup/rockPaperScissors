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
        alert("error" + err.message);
    }
}

function playRound(humanChoice, computerChoice) {

}

const humanChoice = getUserChoice();
const computerChoice = getComputerChoice();