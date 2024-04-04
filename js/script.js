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

const buttonsContainer = document.querySelector(".buttons");

buttonsContainer.addEventListener("click", (event) => {
    let target_button = event.target.className;
    
    if (event.target.tagName === "BUTTON"){
        console.log(gameRound(target_button));
        event.stopPropagation();
    }
    
});