function getRandomInt(max) {
    return Math.floor(Math.random() * max);
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
        if (humanPoints === winningScore || computerPoints === winningScore) return;
        const roundWinner = determineRoundWinner(humanChoice, computerChoice);

        awardRoundPoints(roundWinner);
        if (roundWinner === "human") {
            roundResultDisplay.textContent = 'Player won this round.';
            playerScore.textContent = humanPoints;
        } else if (roundWinner === "computer") {
            roundResultDisplay.textContent = `Computer won this round.`;
            computerScore.textContent = computerPoints;
        } else roundResultDisplay.textContent = "Tie detected";

        announceGameWinner();
    }

    function awardRoundPoints(roundWinner) {
        if (roundWinner === "human") humanPoints++;
        else if (roundWinner === "computer") computerPoints++;
    }

    function announceGameWinner() {
        if (humanPoints < winningScore && computerPoints < winningScore) return;

        gameWinner.classList.add("game-winner");
        gameWinner.hidden = false;

        if (humanPoints === winningScore) {
            gameWinner.textContent = "Player Won!";
            playerCard.classList.add("score-card-winner");
        } else if (computerPoints === winningScore) {
            gameWinner.textContent = "Computer Won!";
            computerCard.classList.add("score-card-winner");
        }
    }

    function createChoiceButton(label, choice) {
        const button = document.createElement('button');
        button.type = "button";
        button.textContent = label;
        button.addEventListener('click', () => playRound(choice, getComputerChoice()));

        return button;
    }

    function createScoreCard(label, scoreElement) {
        const card = document.createElement('div');
        card.classList.add('score-card');
        const labelElement = document.createElement('p');
        labelElement.classList.add('score-label');
        labelElement.textContent = label;
        card.append(labelElement, scoreElement);

        return card;
    }

    const gameContainer = document.querySelector("#game");

    const gameHint = document.createElement('p');
    gameHint.classList.add('game-hint');
    gameHint.textContent = `First to ${winningScore} points wins`;

    const choiceHint = document.createElement('p');
    choiceHint.id = "choice-label";
    choiceHint.classList.add("choice-hint");
    choiceHint.textContent = "Choose your move";

    const rockBtn = createChoiceButton("Rock", "rock");
    const paperBtn = createChoiceButton("Paper", "paper");
    const scissorsBtn = createChoiceButton("Scissors", "scissors");

    const choiceContainer = document.createElement('div');
    choiceContainer.classList.add("choices");
    choiceContainer.setAttribute("role", "group");
    choiceContainer.setAttribute("aria-labelledby", choiceHint.id);
    const scoreCards = document.createElement('div');
    scoreCards.classList.add('score-cards');
    const roundResultDisplay = document.createElement('div');
    roundResultDisplay.classList.add('round-result');
    roundResultDisplay.setAttribute("role", "status");
    const scoreboard = document.createElement('div');
    const scoreTitle = document.createElement("h2");
    scoreTitle.classList.add("score-title");
    const playerScore = document.createElement('p');
    playerScore.classList.add('score-value');
    const computerScore = document.createElement('p');
    computerScore.classList.add('score-value');
    const gameWinner = document.createElement('p');
    gameWinner.hidden = true;
    gameWinner.setAttribute("role", "status");

    scoreTitle.textContent = "Scoreboard";
    playerScore.textContent = humanPoints;
    computerScore.textContent = computerPoints;

    const playerCard = createScoreCard('Player', playerScore);
    const computerCard = createScoreCard('Computer', computerScore);

    choiceContainer.append(rockBtn, paperBtn, scissorsBtn);
    scoreCards.append(playerCard, computerCard);
    scoreboard.append(scoreTitle, scoreCards);
    gameContainer.append(
        gameHint, scoreboard, choiceHint, choiceContainer, roundResultDisplay, gameWinner
    );
}

playGame();
