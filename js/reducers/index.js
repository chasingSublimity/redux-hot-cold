import * as actions from '../actions/index';

const initialHotColdState = {
	showInstructions: false,
	playerGuess: null,
	computerChoice: null,
	numberOfGuesses: 0,
	guessedNumbers: [],
	feedback: null
};

export const hotColdReducer = (state=initialHotColdState, action) => {
	let newState = {};

	switch (action.type) {

	case actions.START_NEW_GAME:
		newState = Object.assign({}, state, 
										{computerChoice: Math.random()*(100-1) + 1});
		return newState;

	case actions.GET_INSTRUCTIONS:
		newState = Object.assign({}, state, {showInstructions: true});
		return newState;

	case actions.HIDE_INSTRUCTIONS:
		newState = Object.assign({}, state, {showInstructions: false});
		return newState;

	case actions.GUESS_NUMBER:
		newState = Object.assign({}, state, 
															{playerGuess: action.number}, 
															{guessedNumbers: [...state.guessedNumbers, action.number]},
															{numberOfGuesses: (state.numberOfGuesses) + 1}
															);
		return newState;

	}
	return state;
};