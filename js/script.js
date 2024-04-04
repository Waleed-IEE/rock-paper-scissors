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
const currentScore = document.querySelector(".score");
const restart = document.querySelector(".reset");

let playerScore = 0, computerScore = 0;

buttonsContainer.addEventListener("click", (event) => {
    let target_button = event.target.className;
    
    if (event.target.tagName === "BUTTON"){

        if (!currentScore.textContent.match("final")){

            roundResult.textContent = gameRound(target_button);
            if (roundResult.textContent.match("WIN")){
                ++playerScore;
            }
            else if (roundResult.textContent.match("LOSE")){
                ++computerScore;
            }

            if (playerScore === 5 && playerScore > computerScore){
                currentScore.textContent = `The final score is Player ${playerScore}-${computerScore} Computer. Congratulations for beating the Computer!`;
            }
            else if (computerScore === 5 && computerScore > playerScore){
                currentScore.textContent = `The final score is Player ${playerScore}-${computerScore} Computer. Good luck next time!`;
            }
            else{
                currentScore.textContent = `Player ${playerScore} - ${computerScore} Computer`;
            }
        }
        
        restart.addEventListener("click", () => {
            currentScore.textContent = "Start playing to display the current score out of the total of 5 wins.";
            roundResult.textContent = "";
            playerScore = 0;
            computerScore = 0;
            event.stopPropagation();
        })
        event.stopPropagation();
    }
    
});