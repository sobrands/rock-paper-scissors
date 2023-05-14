function getComputerChoice() {
    return handshapes[Math.floor(Math.random() * handshapes.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") return "WIN";
        else if (computerSelection === "paper") return "LOSE";
        else return "DRAW";
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") return "WIN";
        else if (computerSelection === "rock") return "LOSE";
        else return "DRAW";
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") return "WIN";
        else if (computerSelection === "scissors") return "LOSE";
        else return "DRAW";
    }
    return "DRAW";
}

function displayResult(result) {
    // Display results 
    const playerScoreViz = document.querySelector('p#player');
    const computerScoreViz = document.querySelector('p#computer');

    switch (result) {
        case "WIN":
            playerScore++;
            playerScoreViz.textContent += "O";
            computerScoreViz.textContent += "X";
            break;
        case "LOSE":
            computerScore++;
            playerScoreViz.textContent += "X";
            computerScoreViz.textContent += "O";
            break;
        case "DRAW":
            playerScoreViz.textContent += "-";
            computerScoreViz.textContent += "-";
            break;
        default:
            break;
    }
}

function game(e) {
    if (!e.target.id) return;
    gameCount++;
    const computerSelection = getComputerChoice().toLowerCase();
    const result = playRound(e.target.id.toLowerCase(), computerSelection);

    const player = document.querySelector('span#player');
    player.textContent = `Player: ${e.target.id}`;

    const computer = document.querySelector('span#computer');
    computer.textContent = `Computer: ${computerSelection}`;

    displayResult(result); 
}

function disableButtons() {
    document.querySelectorAll('button').forEach(button => {
        if (button.className === "handshape") button.disabled = true;
    });
}

function reset(e) {
    window.location.reload();
}

function addReplayButton() {
    replay.textContent = "Play Again?";
    replay.classList.add("replay");
    document.querySelector('body').appendChild(replay);
    document.querySelector('button.replay').addEventListener('click', reset);
}

const handshapes = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let gameCount = 0;

const buttons = document.querySelectorAll('.buttons');
const result = document.querySelector('h1.result');
const replay = document.createElement('button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        game(e);
        if (gameCount === 5) {
            if (playerScore > computerScore) result.textContent += "PLAYER WINS";
            else if (computerScore > playerScore) result.textContent += "COMPUTER WINS";
            else result.textContent += "COMPLETE DRAW"; 
            disableButtons();
            addReplayButton();
        }
    });
});