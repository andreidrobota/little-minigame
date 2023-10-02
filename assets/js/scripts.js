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
            document.getElementById('result').innerText = 'You tied';
        } else if (
            (playerChoice === 'rock' && compChoice === 'scissors') ||
            (playerChoice === 'paper' && compChoice === 'rock') ||
            (playerChoice === 'scissors' && compChoice === 'paper')
        ) {
            document.getElementById('result').innerText = "You won! :)";
            increasePlayerScore();
        } else {
            document.getElementById('result').innerText = "You lost! :(";
            increaseCompScore();
        }
    }




};