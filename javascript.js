document.addEventListener('DOMContentLoaded', function() { // Put this so that it waits first to load full js and HTML before acting. prevends from nog being able to load certain selectors, if js if faster loaded than html 

    // put the return array inside getComputerChoice function scope to get new getComputerChoice every playround.
    const array = ['Rock', 'Paper', 'Scissors']; 
    function getComputerChoice () { 
        return array[Math.floor(Math.random()*array.length)];
    }

    // created function playground in a generic way to state player1 and player2 
    function playRound(player1, player2) { 
        if (player1 === "Paper" && player2 === "Rock") { 
            return ("You Lose! " + "Paper beats Rock")
        } else if (player1 === "Scissors" && player2 === "Paper") { 
            return ("You Lose! " + "Scissors beats Paper") 
        } else if (player1 === "Rock" && player2 === "Scissors") { 
            return ("You Lose! " + "Rock beats Scissors") 
        } else if (player1 === "Paper" && player2 === "Scissors") { 
            return ("You Win! " + "Scissors beats Paper") 
        } else if (player1 === "Rock" && player2 === "Paper") { 
            return ("You Win! " + "Paper beats Rock") 
        } else if (player1 === "Scissors" && player2 === "Rock") { 
            return ("You Win! " + "Rock beats Scissors") 
        } else {
            return ("It's a tie!")
        }
    }

    let playerResult = 0
    let computerResult = 0
    let playerSelection = ""

    const btnrock = document.querySelector("#rockbtn");
    btnrock.addEventListener('click', () => {
        playerSelection = "Rock"
        game()
    });

    const btnpaper = document.querySelector('#paperbtn');
    btnpaper.addEventListener('click', () => {
        playerSelection = "Paper"
        game()
    });

    const btnscissors = document.querySelector('#scissorsbtn');
    btnscissors.addEventListener('click', () => {
        playerSelection = "Scissors"
        game()
    });

    function game() {
        //put this in function game to make the player chose a new choice every round
        //let playerSelection = prompt("Pick one: Rock, Paper or Scissors").toUpperCase();
        const showPlayerChoice = document.querySelector('#playerChoice');
        const showPlayerChoiceText = document.createElement('div');
        showPlayerChoiceText.textContent = ("You've chosen: " + playerSelection) //to create a string like this: use + 
        showPlayerChoice.appendChild(showPlayerChoiceText);

        // use computerSelection as variable for "Computer", not getComputerChoice. 
        // put this in function game to make the computer get a new choice every round
        let computerSelection = getComputerChoice();
        const showComputerChoice = document.querySelector('#computerChoice');
        const showComputerChoiceText = document.createElement('div');
        showComputerChoiceText.textContent = ("Computer has chosen: " + computerSelection) 
        showComputerChoice.appendChild(showComputerChoiceText);
        
        // create parameters for the playround result in our if..else statement (in this case computerSelection and playerSelection)
        let result = playRound(computerSelection, playerSelection)
        const showPlayroundResult = document.querySelector('#resultPlayround');
        const showPlayroundResultText = document.createElement('div');
        showPlayroundResultText.textContent = (result) 
        showPlayroundResult.appendChild(showPlayroundResultText);

        // don't use = between startsWith and parentheses. 
        if (result.startsWith("You Win!")) {
            playerResult += 1;
        } else if (result.startsWith("You Lose!")) {
            computerResult += 1;
        }
        
        const showScore = document.querySelector('#showScore');
        const showScoreText = document.createElement('div');
        showScoreText.textContent = ("Playerscore: " + playerResult + " Computerscore: " + computerResult) 
        showScore.appendChild(showScoreText);

            // Update the player's choice
            showPlayerChoice.textContent = "You've chosen: " + playerSelection;

            // Update the computer's choice
            showComputerChoice.textContent = "Computer has chosen: " + computerSelection;

            // Update the playround result
            showPlayroundResult.textContent = result;

            // Update the score
            showScore.textContent = "Playerscore: " + playerResult + " Computerscore: " + computerResult;

        //code for the end of game, if either computer or player has 5 wins
        const endOfGame = document.querySelector('#endOfGame');
        const endOfGameText = document.createElement('div');
        endOfGame.appendChild(endOfGameText);

        if (playerResult >= 5) {
            endOfGameText.textContent = ("End of this Rock-paper-scissors game. You're first to reach 5 wins! Congratulations!"); 
        } else if (computerResult >= 5) {
            endOfGameText.textContent = ("End of this Rock-paper-scissors game. The computer is first to reach 5 wins! Better luck next time.");
        }

        //Later make this button work
        //if (playerResult >= 5 || computerResult >= 5) {
          //  const endOfGameButton = document.createElement('button');
          //  endOfGame.appendChild(endOfGameButton);
          //  endOfGameButton.textContent = "Play Again?";
        //}

            //Later make this button work, what need to be done: create a function in which the begin state of the game is set. Make this button go back to this begin state. 
            //endOfGameButton.addEventListener('click', function() { 
              //  ;
            //}); 

        if (playerResult >=5 || computerResult >=5) {
            const showScoreElement = document.querySelector("#showScore");
            while (showScoreElement.firstChild) {
                showScoreElement.removeChild(showScoreElement.firstChild);
            }
        }
        
        if (playerResult >=5 || computerResult >=5) {
            const showPlayroundElement = document.querySelector("#resultPlayround");
            while (showPlayroundElement.firstChild) {
                showPlayroundElement.removeChild(showPlayroundElement.firstChild);
            }
        }        

        if (playerResult >=5 || computerResult >=5) {
            const showComputerChoiceElement = document.querySelector("#computerChoice");
            while (showComputerChoiceElement.firstChild) {
                showComputerChoiceElement.removeChild(showComputerChoiceElement.firstChild);
            }
        }  

        if (playerResult >=5 || computerResult >=5) {
            const showPlayerChoiceElement = document.querySelector("#playerChoice");
            while (showPlayerChoiceElement.firstChild) {
                showPlayerChoiceElement.removeChild(showPlayerChoiceElement.firstChild);
            }
        }  

        if (playerResult >=5 || computerResult >=5) {
            const rockImgElement = document.querySelector("#rockbtn");
            while (rockImgElement.firstChild) {
                rockImgElement.removeChild(rockImgElement.firstChild);
            }
        }  

        if (playerResult >=5 || computerResult >=5) {
            const scissorImgElement = document.querySelector("#scissorsbtn");
            while (scissorImgElement.firstChild) {
                scissorImgElement.removeChild(scissorImgElement.firstChild);
            }
        }  

        if (playerResult >=5 || computerResult >=5) {
            const paperImgElement = document.querySelector("#paperbtn");
            while (paperImgElement.firstChild) {
                paperImgElement.removeChild(paperImgElement.firstChild);
            }
        }  

        if (playerResult >=5 || computerResult >=5) {
            const chooseElement = document.querySelector(".choose");
            while (chooseElement.firstChild) {
                chooseElement.removeChild(chooseElement.firstChild);
            }
        }  
    }

});
