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

function game() {
    const playerSelection = prompt("What shall you throw now?").toLowerCase();
    const computerSelection = getComputerChoice().toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
}

const handshapes = ["Rock", "Paper", "Scissors"];

for (let i=0; i<5; i++) 
{
    game();
}