import React from 'react';

function GuessBank(props) {

	const guesses = props.guessedNumbers.map((guess, i) => {
		return <li key={i}>{guess}</li>;
	});

	return (
		<div className="guess-bank">
			<ul>{guesses}</ul>
		</div>
	);
}



export default GuessBank;