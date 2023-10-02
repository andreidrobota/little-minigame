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
            document.getElementById('result').innerText = 'tied';
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
});