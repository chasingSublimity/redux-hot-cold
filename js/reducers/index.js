import * as actions from '../actions/index';
import handleFeedback from './handleFeedback';

const initialHotColdState = {
	showInstructions: false,
	playerGuess: null,
	computerChoice: Math.round(Math.random()*(100-1) + 1),
	numberOfGuesses: 0,
	guessedNumbers: [],
	feedback: 'Make your guess below!',
	guessInputValue: '',
	fewestGuesses: null
};

export const hotColdReducer = (state=initialHotColdState, action) => {
	let newState = {};
	let feedback;

	switch (action.type) {

	case actions.START_NEW_GAME:
		newState = Object.assign({}, initialHotColdState,
										{computerChoice: Math.round(Math.random()*(100-1) + 1)});
		return newState;

	case actions.GET_INSTRUCTIONS:
		newState = Object.assign({}, state, {showInstructions: true});
		return newState;

	case actions.HIDE_INSTRUCTIONS:
		newState = Object.assign({}, state, {showInstructions: false});
		return newState;

	case actions.CHANGE_INPUT:
		newState = Object.assign({}, state, {guessInputValue: action.value});
		return newState;

	case actions.GUESS_NUMBER:
		feedback = handleFeedback(state.computerChoice, action.number, state.numberOfGuesses);
		newState = Object.assign({}, state, 
															{playerGuess: action.number}, 
															{guessedNumbers: [...state.guessedNumbers, action.number]},
															{numberOfGuesses: (state.numberOfGuesses) + 1},
															{feedback: feedback},
															{guessInputValue: ''}
															);
		return newState;

	case actions.FETCH_FEWEST_GUESSES_SUCCESS:
		newState = Object.assign({}, state, 
																{fewestGuesses: action.guesses});
		return newState;

	case actions.POST_FEWEST_GUESSES_SUCCESS:
		newState = Object.assign({}, state, {fewestGuesses: action.guesses});
		return newState;
	}

	return state;
};