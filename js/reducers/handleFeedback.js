export default function handleFeedback(computerChoice, playerGuess) {
	var difference = Math.abs(computerChoice - playerGuess);

	/* Error Handling */
	if (computerChoice < 1 || computerChoice > 100 || isNaN(computerChoice) === true) {
		alert('Invalid Input: Please enter a number larger than 1 and less than 100.');

	} else if (difference === 0) {
		return ('You Won. Click new game to play again');
	} else if (difference <= 5) {
		return ('extremely hot');
	} else if (difference <= 10) {
		return ('hot');
	} else if (difference <= 39) {
		return ('kinda warm');
	} else if (difference >= 40) {
		return ('cold');	
	}
}