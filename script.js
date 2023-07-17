function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissor"];
    return choices[Math.floor(Math.random()*choices.length)]
}
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    // Return string that declares winner of round "You Lose! Paper beats rock"
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    console.log("Player: " + playerSelection)
    console.log("Computer: " + computerSelection)
    if (playerSelection == computerSelection) {
        return "It's a Tie!"
    }
    if ((playerSelection === "rock") && (computerSelection === "paper")) {
        return "You Lose! Paper beats Rock"
    }
    if ((playerSelection === "paper") && (computerSelection === "rock")) {
        return "You Win! Paper beats Rock"
    }
    if ((playerSelection === "scissor") && (computerSelection === "rock")) {
        return "You Lose! Rock beats Scissors"
    }
    if ((playerSelection === "rock") && (computerSelection === "scissor")) {
        return "You Win! Rock beats Scissors"
    }
    if ((playerSelection === "scissor") && (computerSelection === "paper")) {
        return "You Win! Scissors beats Paper"
    }
    if ((playerSelection === "paper") && (computerSelection === "scissor")) {
        return "You Lose! Scissors beats Paper"
    }
}


// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection))

function game() {
    let playerCount = 0;
    let computerCount = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What's your play?");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        if (result.includes("Win")) {
            playerCount++;
        } else if (result.includes("Tie")) {
            continue;
        } else {
            computerCount++;
        }
        console.log(result + ". The score is: Player: " + playerCount + ", Computer: " + computerCount);
    }
}

game()