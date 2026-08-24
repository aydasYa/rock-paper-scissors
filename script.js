function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getComputerChoice() {
    const randomInt = getRandomInt(3);
    return (randomInt === 0) ? "rock" : (randomInt === 1) ? "paper" : "scissors";
}

function getHumanChoice() {
    return prompt("Enter Rock, Paper or Scissors: ").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        console.log(`Computer choice was: ${computerChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("Human wins this round!");
        console.log(`Computer choice was: ${computerChoice}`);
        return "human";
    } else {
        console.log("Computer wins this round!");
        console.log(`Computer choice was: ${computerChoice}`);
        return "computer";
    }
}

function playGame() {
    let roundWinner;
    let humanPoints = 0;
    let computerPoints = 0;
    // play 5 rounds
    for (let i = 1; i <= 5; i++) {
        console.log(`current round: ${i}`);
        // get choices
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        roundWinner = playRound(humanSelection, computerSelection);
        if (roundWinner === "human") humanPoints++;
        else if (roundWinner === "computer") computerPoints++;

    }

    if (humanPoints === computerPoints) {
        console.log("Game is a tie!");
    } else if (humanPoints > computerPoints) {
        console.log("Human won the game!");
    } else {
        console.log("Computer won the game!");
    }
    

    console.log(`com: ${computerPoints} | human: ${humanPoints}`);
}

playGame();








