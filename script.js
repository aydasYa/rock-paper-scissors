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
    let totalRoundsPlayed = 1;
    let tieCounter = 0;

    function playRound(humanChoice, computerChoice) {
        const roundWinner = determineRoundWinner(humanChoice, computerChoice);
        if (totalRoundsPlayed < 5) {
            if (roundWinner === "human") {
                display.textContent = '';
                display.textContent = `${roundWinner} won this round.`;
                humanPoints += 1;
            } else if (roundWinner === "computer") {
                computerPoints += 1;
                display.textContent = '';
                display.textContent = `${roundWinner} won this round.`;
            } else {
                display.textContent = '';
                display.textContent = `Tie detected`;
            }

        } else {
            if (humanPoints === computerPoints) {
                display.textContent = "Game is a tie!";
                tieCounter++;
            }
            else if (humanPoints > computerPoints) display.textContent = "Human won the game!";
            else display.textContent = "Computer won the game!";
        }

        totalRoundsPlayed++;
        return roundWinner;
    }

    const choiceContainer = document.createElement('div');
    const rockBtn = document.createElement("button");
    const paperBtn = document.createElement("button");
    const scissorsBtn = document.createElement("button");

    rockBtn.textContent = "Rock";
    paperBtn.textContent = "Paper";
    scissorsBtn.textContent = "Scissors";
    choiceContainer.append(rockBtn, paperBtn, scissorsBtn);

    
    rockBtn.addEventListener('click', () => playRound("rock", getComputerChoice()));
    paperBtn.addEventListener('click', () => playRound("paper", getComputerChoice()));
    scissorsBtn.addEventListener('click', () => playRound("scissors", getComputerChoice()));
    
    const display = document.createElement('div');

    document.body.append(choiceContainer, display);
}

playGame();