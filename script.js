function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getComputerChoice() {
    const randomInt = getRandomInt(3);

    if (randomInt === 0) return "rock";
    else if (randomInt === 1) return "paper";
    else return "scissors";
}

function determineRoundWinner(humanChoice, computerChoice) {
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
    const winningScore = 5;
    let humanPoints = 0;
    let computerPoints = 0;

    function playRound(humanChoice, computerChoice) {
        // Guard Clause
        if (humanPoints === winningScore || computerPoints === winningScore) return
        const roundWinner = determineRoundWinner(humanChoice, computerChoice);

        awardRoundPoints(roundWinner);
        if (roundWinner === "human") {
            roundResultDisplay.textContent = 'Player won this round.';
            playerScore.textContent = `Player score: ${humanPoints}`;
        } else if (roundWinner === "computer") {
            roundResultDisplay.textContent = `Computer won this round.`;
            computerScore.textContent = `Computer score: ${computerPoints}`;
        } else roundResultDisplay.textContent =  "Tie detected";

        announceGameWinner();
    }

    function awardRoundPoints(roundWinner) {
        if (roundWinner === "human") humanPoints++;
        else if (roundWinner === "computer") computerPoints++;
    }

    function announceGameWinner() {
        if (humanPoints === winningScore) {
            gameWinner.textContent = "Player Won!";
        }
        else if (computerPoints === winningScore) {
            gameWinner.textContent = "Computer Won!";
        }
    }

    function createChoiceButton(label, choice) {
        const button = document.createElement('button');
        button.textContent = label;
        button.addEventListener('click', () => playRound(choice, getComputerChoice()));

        return button;
    }

    const choiceContainer = document.createElement('div');
    const rockBtn = createChoiceButton("Rock", "rock");
    const paperBtn = createChoiceButton("Paper", "paper");
    const scissorsBtn = createChoiceButton("Scissors", "scissors");
    choiceContainer.append(rockBtn, paperBtn, scissorsBtn);

    const roundResultDisplay = document.createElement('div');

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

    document.body.append(choiceContainer, roundResultDisplay, scoreboard);
}

playGame();