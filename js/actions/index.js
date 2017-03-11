import 'isomorphic-fetch';

// Start new game
export const START_NEW_GAME = 'START_NEW_GAME';
export const startNewGame = () =>({
	type: START_NEW_GAME
});

// get instructions
export const GET_INSTRUCTIONS = 'GET_INSTRUCTIONS';
export const getInstructions = () =>({
	type: GET_INSTRUCTIONS
});

// hide instructions
export const HIDE_INSTRUCTIONS = 'HIDE_INSTRUCTIONS';
export const hideInstructions = () =>({
	type: HIDE_INSTRUCTIONS
});

// change form input
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const changeInput = value =>({
	type: CHANGE_INPUT, 
	value
});

// guess number
export const GUESS_NUMBER = 'GUESS_NUMBER';
export const guessNumber = number =>({
	type: GUESS_NUMBER, 
	number
});

export const WIN_GAME = 'WIN_GAME';
export const winGame = numberOfGuesses =>({
	type: WIN_GAME, 
	numberOfGuesses
});

export const fetchFewestGuesses = () => dispatch => {
	const url = 'http://localhost:8080/fewest-guesses';
	return fetch(url).then(response => {
		return response.json();
	})
	.then(data => 
		dispatch(fetchFewestGuessesSuccess(data.fewestGuesses))
	);
};

export const FETCH_FEWEST_GUESSES_SUCCESS = 'FETCH_FEWEST_GUESSES_SUCCESS';
export const fetchFewestGuessesSuccess = guesses => ({
	type: FETCH_FEWEST_GUESSES_SUCCESS,
	guesses: guesses
});

export const postFewestGuesses = guesses => dispatch => {
	console.log(guesses);
	const url = 'http://localhost:8080/fewest-guesses';
	const settings = {method: 'post', body: JSON.stringify({guesses: guesses}), headers: {'Content-Type': 'application/json'}};
	return fetch(url, settings)
	.then(response => {
		return response.json();
	})
	.then(data => {
		return dispatch(postFewestGuessesSuccess(data.fewestGuesses));
	});
};

export const POST_FEWEST_GUESSES_SUCCESS = 'POST_FEWEST_GUESSES_SUCCESS';
export const postFewestGuessesSuccess = guesses => ({
	type: POST_FEWEST_GUESSES_SUCCESS,
	guesses: guesses
});
