function getComputerChoice(){
    let random = Math.floor(Math.random() * 3)
    return random === 0 ? "rock"
    :   random === 1 ? "paper"
    : "scissors";
}
function gameRound(playerChoice, computerChoice = getComputerChoice()){
    return (playerChoice === "rock" && computerChoice === "scissors") 
    || (playerChoice === "paper" && computerChoice === "rock")
    || (playerChoice === "scissors" && computerChoice === "paper") ? alert(`You WIN!\nYour ${playerChoice} beats the opponent's ${computerChoice}.`)
    : (computerChoice === "rock" && playerChoice === "scissors") 
    || (computerChoice === "paper" && playerChoice === "rock")
    || (computerChoice === "scissors" && playerChoice === "paper") ? alert(`You LOSE!\nThe opponent's ${computerChoice} beats your ${playerChoice}.`)
    : "It's a TIE!";
}