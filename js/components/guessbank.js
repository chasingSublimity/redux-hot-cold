import React from 'react';

export default function GuessBank(props) {

	const guesses = props.guessedNumbers.map((guess, i) => {
		return <li key={i}>{guess}</li>;
	});

	return (
		<div className="guess-bank">
			<ul>{guesses}</ul>
		</div>
	);
}