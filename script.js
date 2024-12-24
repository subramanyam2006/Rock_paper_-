document.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissors'];
    const playerChoices = document.querySelectorAll('.choice');
    const resultDiv = document.getElementById('result');
    const resetButton = document.getElementById('resetButton');
    const instructions = document.getElementById('instructions');

    function playGame(playerChoice) {
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        let result = '';

        if (playerChoice === computerChoice) {
            result = 'It\'s a tie!';
            resultDiv.classList.remove('lost');
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            result = 'You win!';
            resultDiv.classList.remove('lost');
        } else {
            result = 'You lose! Better luck next time! 😔';
            resultDiv.classList.add('lost');
        }

        resultDiv.textContent = `You chose ${playerChoice}. The computer chose ${computerChoice}. ${result}`;
        resetButton.style.display = 'block';
        instructions.style.display = 'none';
    }

    playerChoices.forEach(button => {
        button.addEventListener('click', () => {
            playGame(button.getAttribute('data-choice'));
        });
    });

    resetButton.addEventListener('click', () => {
        resultDiv.textContent = '';
        resultDiv.classList.remove('lost');
        resetButton.style.display = 'none';
        instructions.style.display = 'block';
    });
});
