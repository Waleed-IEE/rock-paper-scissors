function getComputerChoice(){
    let random = Math.floor(Math.random() * 3)
    return random === 0 ? "rock"
    :   random === 1 ? "paper"
    : "scissors";
}

function gameRound(playerChoice, computerChoice = getComputerChoice()){
    
    return (playerChoice === "rock" && computerChoice === "scissors") 
        || (playerChoice === "paper" && computerChoice === "rock")
        || (playerChoice === "scissors" && computerChoice === "paper") ? `You WIN!\nYour ${playerChoice} beats the opponent's ${computerChoice}.`
        :  (computerChoice === "rock" && playerChoice === "scissors") 
        || (computerChoice === "paper" && playerChoice === "rock")
        || (computerChoice === "scissors" && playerChoice === "paper") ? `You LOSE!\nThe opponent's ${computerChoice} beats your ${playerChoice}.`
        :  `It's a TIE! You both chose ${playerChoice}`;
    }

const roundResult = document.querySelector(".round");
const buttonsContainer = document.querySelector(".buttons");

buttonsContainer.addEventListener("click", (event) => {
    let target_button = event.target.className;
    
    if (event.target.tagName === "BUTTON"){
        roundResult.textContent = gameRound(target_button);
        event.stopPropagation();
    }
    
});

/* */
/*let playerScore = 0, computerScore = 0;
if (div.textContent.match("WIN")){
    ++playerScore;
}
else if (div.textContent.match("LOSE")){
    ++computerScore;
}
if (playerScore === 5 || computerScore === 5){
    if (playerScore > computerScore){
        divScore.textContent = `The final score is Player ${playerScore}-${computerScore} Computer\nCongratulations for beating the Computer!`;
    }
    else if (computerScore > playerScore){
        divScore.textContent = `The final score is Player ${playerScore}-${computerScore} Computer\nGood luck next time!`;
    }
    else{
        divScore.textContent = `The final score is Player ${playerScore}-${computerScore} Computer\nYou both WIN!`;
    }
    playerScore = 0;
    computerScore = 0;
    //div.textContent = ""
}*/
/* */