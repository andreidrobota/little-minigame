// wait for the DOM to finish loading before running the game

document.addEventListener("DOMContentLoaded", function () {
    // function to generate computer choices
    function compChoice() {
        let choices = ['rock', 'paper', 'scissors'];
        let randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    // how to determine the winner
    function determineWinner(playerChoice, compChoice) {
        if (playerChoice === compChoice) {
            document.getElementById('result').innerText = 'tied! :|';
        } else if (
            (playerChoice === 'rock' && compChoice === 'scissors') ||
            (playerChoice === 'paper' && compChoice === 'rock') ||
            (playerChoice === 'scissors' && compChoice === 'paper')
        ) {
            document.getElementById('result').innerText = "won! :)";
            increasePlayerScore();
        } else {
            document.getElementById('result').innerText = "lost! :(";
            increaseCompScore();
        }
        alertWinner();
    }

    function displayChoices(playerChoice, compChoice) {

        document.getElementById('player-choice').innerText = playerChoice;
        document.getElementById('comp-choice').innerText = compChoice;
    }


    // handle the button clicks 

    function play(playerChoice) {
        let computer = compChoice();
        let result = determineWinner(playerChoice, computer);

        displayChoices(playerChoice, computer);
    }

    // Add click event listeners to buttons 

    document.getElementById('rock').addEventListener('click', () => play('rock'));
    document.getElementById('paper').addEventListener('click', () => play('paper'));
    document.getElementById('scissors').addEventListener('click', () => play('scissors'));


    function increasePlayerScore() {
        let incrementP = parseInt(document.getElementById('player-score').innerText);
        ++incrementP;
        document.getElementById('player-score').innerText = incrementP;
    }

    function increaseCompScore() {
        let incrementC = parseInt(document.getElementById('comp-score').innerText);
        ++incrementC;
        document.getElementById('comp-score').innerText = incrementC;
    }

    // Display an alert when the player or the computer wins, and reset the score for a new round
    
    function alertWinner () {
        playerWin = parseInt(document.getElementById('player-score').innerText);
        compWin = parseInt(document.getElementById('comp-score').innerText);

        if (playerWin === 10) {
            alert ('Congratulations! You beat the game!');
            resetScore();
        } else if (compWin === 10) {
            alert ('Aww! Better luck next time!');
            resetScore();
        }
    }

    function resetScore() {
        document.getElementById('player-score').innerText = '0';
        document.getElementById('comp-score').innerText = '0';
    }
});