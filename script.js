function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getComputerChoice() {
    const randomInt = getRandomInt(3);
    return (randomInt === 0) ? "rock" : (randomInt === 1) ? "paper" : "scissors";
}

function getHumanChoice() {
    return prompt("Enter rock, paper or scissors: ").toLowerCase();
}

function determineRoundWinner(humanChoice, computerChoice) {
    // evaluates rules
    if (humanChoice === computerChoice) {
        return "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return "human";
    } else {
        return "computer";
    }
}

function playGame() {
    let humanPoints = 0;
    let computerPoints = 0;

    function playRound(humanChoice, computerChoice) {
        const roundWinner = determineRoundWinner(humanChoice, computerChoice);
        
        if (roundWinner === "human") {
            humanPoints += 1;
            console.log("Human won this round");
        } else if (roundWinner === "computer") {
            computerPoints += 1;
            console.log("Computer won this round");
        } else console.log("Tie detected")
    
        return roundWinner;
    }

    // play 5 rounds
    for (let i = 1; i <= 5; i++) {
        console.log(`current round: ${i}`);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanPoints === computerPoints) console.log("Game is a tie!");
    else if (humanPoints > computerPoints) console.log("Human won the game!");
    else console.log("Computer won the game!");

    // log the end game score table to the console
    console.log(`com: ${computerPoints} | human: ${humanPoints}`);
}

playGame();