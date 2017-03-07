import React from 'react';

function GuessForm(props) {

	return (
		<div className="guess-form">
			<form>
				<input type="text" id="userGuess" />
				<input type="submit" id="guessButton" />
			</form>
			<p> Guess #<span id="count">{props.numberOfGuesses}</span>!</p>
		</div>
	);

}



export default GuessForm;