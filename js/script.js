function getComputerChoice(){
    let random = Math.floor(Math.random() * 3)
    return random === 0 ? "rock"
    :   random === 1 ? "paper"
    : "scissors";
}
function gameRound(caseSensitivePlayerChoice, computerChoice = getComputerChoice()){
    if (typeof caseSensitivePlayerChoice === "string"){
        playerChoice = caseSensitivePlayerChoice.toLowerCase();
        return (playerChoice === "rock" && computerChoice === "scissors") 
            || (playerChoice === "paper" && computerChoice === "rock")
            || (playerChoice === "scissors" && computerChoice === "paper") ? alert(`You WIN!\nYour ${playerChoice} beats the opponent's ${computerChoice}.`)
            :  (computerChoice === "rock" && playerChoice === "scissors") 
            || (computerChoice === "paper" && playerChoice === "rock")
            || (computerChoice === "scissors" && playerChoice === "paper") ? alert(`You LOSE!\nThe opponent's ${computerChoice} beats your ${playerChoice}.`)
            :  "It's a TIE!";
    }
    else{
        alert("Invalid input! Please type either rock, paper or scissors to play the game...");
    }

}