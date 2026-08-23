function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}


function getComputerChoice() {
    const randomInt = getRandomInt(3);
    return (randomInt === 0) ? "Rock" : (randomInt === 1) ? "Paper" : "Scissors";
}

function getHumanChoice() {
    const randomInt = getRandomInt(3);
    return (randomInt === 0) ? "Rock" : (randomInt === 1) ? "Paper" : "Scissors";
}

// define winning conditions
const computer = getComputerChoice();
const human = getHumanChoice();

if (human === computer) {
   console.log("It's a tie!");
} else if (
    (human === "Rock" && computer === "Scissors") ||
    (human == "Paper" && computer === "Rock") ||
    (human === "Scissors" && computer === "Paper")
) {
    console.log("Human wins!");
} else {
    console.log("Computer wins!");
}
