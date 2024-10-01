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