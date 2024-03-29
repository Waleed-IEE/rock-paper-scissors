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
            || (playerChoice === "scissors" && computerChoice === "paper") ? `You WIN!\nYour ${playerChoice} beats the opponent's ${computerChoice}.`
            :  (computerChoice === "rock" && playerChoice === "scissors") 
            || (computerChoice === "paper" && playerChoice === "rock")
            || (computerChoice === "scissors" && playerChoice === "paper") ? `You LOSE!\nThe opponent's ${computerChoice} beats your ${playerChoice}.`
            :  "It's a TIE!";
    }
    else{
        alert("Invalid input! Please type either rock, paper or scissors to correctly play the game...");
    }

}
function playGame(rounds = 5){
    let playerScore = 0, computerScore = 0;
    for(i = 0;i < rounds;i++){
        let result = gameRound(prompt("Play this game by typing either rock, paper or scissors!", getComputerChoice()));
        if (result.match("WIN")){
            ++playerScore;
        }
        else if (result.match("LOSE")){
            ++computerScore;
        }
        console.log(result);
    }
    if (playerScore > computerScore){
        alert(`The final score out of ${rounds} round(s) is Player ${playerScore}-${computerScore} Computer\nCongratulations for beating the Computer!`);
    }
    else if (computerScore > playerScore){
        alert(`The final score out of ${rounds} round(s) is Player ${playerScore}-${computerScore} Computer\nGood luck next time!`);
    }
    else{
        alert(`The final score out of ${rounds} round(s) is Player ${playerScore}-${computerScore} Computer\nYou both WIN!`);
    }
}