import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export class GuessForm extends React.Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const inputValue = event.target.value;
		this.props.dispatch(actions.changeInput(inputValue));
	}

	handleSubmit(event) {
		event.preventDefault();
		const submittedValue = this.props.guessInputValue;
		this.props.dispatch(actions.guessNumber(submittedValue));
	}

	render() {
		return(
			<div className="guess-form">
				<form onSubmit={this.handleSubmit}>
				<input autoComplete="off" type="text" id="userGuess" value={this.props.guessInputValue} onChange={this.handleChange} />
					<input type="submit" id="guessButton"/>
				</form>
				<p> Guess #<span id="count">{this.props.numberOfGuesses}</span>!</p>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	showInstructions: state.showInstructions,
	playerGuess: state.playerGuess,
	computerChoice: state.computerChoice,
	numberOfGuesses: state.numberOfGuesses,
	guessedNumbers: state.guessedNumbers,
	feedback: state.feedback,
	guessInputValue: state.guessInputValue
});

export default connect(mapStateToProps)(GuessForm);