// using objects for the players
const p1 = {
	score: 0,
	button: document.querySelector('#p1Button'),
	display: document.querySelector('#p1Display')
};

const p2 = {
	score: 0,
	button: document.querySelector('#p2Button'),
	display: document.querySelector('#p2Display')
};

// variables reset buttons and select
const resetButton = document.querySelector('#reset');
const playToSelect = document.querySelector('#playTo');

// variable for the starting winning socre
let winningScore = 3;
// variables for the player 1 and player 2 score
let p1Score = 0;
let p2Score = 0;
// variable for the game state to be false at first
let isGameOver = false;

// function for updating the score
function updateScore(player, opponent) {
	if (!isGameOver) {
		// after clicking the button, the score will be added by 1
		player.score += 1;
		// however after reaching the winning socre
		if (player.score === winningScore) {
			// gameover will be true and the game will end
			isGameOver = true;
			// changinc color to success according to bulma
			player.display.classList.add('has-text-success');
			// changinc color to danger according to bulma
			opponent.display.classList.add('has-text-danger');
			// disable the button to prevent further clicking
			player.button.disabled = true;
			opponent.button.disabled = true;
		}
		// changing the score
		player.display.textContent = player.score;
	}
}

// adding listener for the player 1 button
p1.button.addEventListener('click', function(e) {
	updateScore(p1, p2);
});
// adding listener for the player 2 button
p2.button.addEventListener('click', function(e) {
	updateScore(p2, p1);
});
// adding listener for the select element
playToSelect.addEventListener('change', function(e) {
	// change the value of the winning score and reset p1 and p2 scores
	winningScore = parseInt(this.value);
	reset();
});

// adding listener to the reset button using the function below it
resetButton.addEventListener('click', reset);

function reset() {
	isGameOver = false;
	// loop according to the number of players
	for (let p of [ p1, p2 ]) {
		p.score = 0;
		p.display.textContent = 0;
		p.display.classList.remove('has-text-success', 'has-text-danger');
		p.button.disabled = false;
	}
}
