function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getComputerChoice() {
    const randomInt = getRandomInt(3);
    return (randomInt === 0) ? "rock" : (randomInt === 1) ? "paper" : "scissors";
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
        if (humanPoints == 5 || computerPoints == 5) return
        // continue if no one has wone the game yet
        const roundWinner = determineRoundWinner(humanChoice, computerChoice);
        if (roundWinner === "human") {
            humanPoints += 1;
            display.textContent = '';
            display.textContent = `Player won this round.`;
            playerScore.textContent = `Player score: ${humanPoints}`;
        } else if (roundWinner === "computer") {
            computerPoints += 1;
            display.textContent = '';
            display.textContent = `Computer won this round.`;
            computerScore.textContent = `Computer score: ${computerPoints}`;
        } else {
            display.textContent = '';
            display.textContent = `Tie detected`;
        }

        if (humanPoints == 5) gameWinner.textContent = "Player Won!";
        else if (computerPoints == 5) gameWinner.textContent = "Computer Won!";

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

    const scoreboard = document.createElement('div');
    const scoreTitle = document.createElement("h2");
    const playerScore = document.createElement('p');
    const computerScore = document.createElement('p');
    scoreTitle.textContent = "Scoreboard";
    playerScore.textContent = "Player score: 0";
    computerScore.textContent = "Computer score: 0";

    const gameWinner = document.createElement('p');
    gameWinner.textContent = "";

    scoreboard.append(scoreTitle, playerScore, computerScore, gameWinner);

    document.body.append(choiceContainer, display, scoreboard);
}

playGame();