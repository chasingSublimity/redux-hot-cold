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

// guess number
export const GUESS_NUMBER = 'GUESS_NUMBER';
export const guessNumber = number =>({
	type: GUESS_NUMBER, 
	number
});