const array = ['Rock', 'Paper', 'Scissors']; 
function getComputerChoice () {
    // use brackets
    // put the return array inside getComputerChoice function scope to get new getComputerChoice every playround. 
    return array[Math.floor(Math.random()*array.length)];
}

// created function playground in a generic way to state player1 and player2 
function playRound(player1, player2) {
    if (player1 === "Paper" && player2 === "ROCK") { 
        return ("You Lose! " + "Paper beats Rock")
    } else if (player1 === "Scissors" && player2 === "PAPER") { 
        return ("You Lose! " + "Scissors beats Paper") 
    } else if (player1 === "Rock" && player2 === "SCISSORS") { 
        return ("You Lose! " + "Rock beats Scissors") 
    } else if (player1 === "Paper" && player2 === "SCISSORS") { 
        return ("You Win! " + "Scissors beats Paper") 
    } else if (player1 === "Rock" && player2 === "PAPER") { 
        return ("You Win! " + "Paper beats Rock") 
    } else if (player1 === "Scissors" && player2 === "ROCK") { 
        return ("You Win! " + "Rock beats Scissors") 
    } else {
        return ("It's a tie!")
    }
}

let playerResult = 0
let computerResult = 0

function game() {
    //put this in function game to make the player chose a new choice every round
    let playerSelection = prompt("Pick one: Rock, Paper or Scissors").toUpperCase();
    console.log("Player", playerSelection)

    // use computerSelection as variable for "Computer", not getComputerChoice. 
    // put this in function game to make the computer get a new choice every round
    let computerSelection = getComputerChoice();
    console.log("Computer", computerSelection)
    
    // create parameters for the playround result in our if..else statement (in this case computerSelection and playerSelection)
    let result = playRound(computerSelection, playerSelection)
    console.log("Result:", result)

    // don't use = between startsWith and parentheses. 
    if (result.startsWith("You Win!")) {
        playerResult += 1;
    } else if (result.startsWith("You Lose!")) {
        computerResult += 1;
    }

    // Put this if.. statement inside function game, but above the console logs for player- and computerResults 
    if (playerResult + computerResult === 5) {
        if (playerResult > computerResult) {
            return ("End of this Rock-paper-scissors game. You won this 5 round session! Congratulations!"); 
        } else if (playerResult < computerResult) {
            return ("End of this Rock-paper-scissors game. You lost this 5 round session! Better luck next time.");
        }
    }
    console.log("playerResult", playerResult)
    console.log("computerResult", computerResult)
      
}
game()

