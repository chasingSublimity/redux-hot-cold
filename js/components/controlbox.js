import React from 'react';
import {connect} from 'react-redux';

import GuessBank from './guessbank';
import GuessForm from './guessform';
import FeedbackBox from './feedbackbox';

import * as actions from '../actions/index';

export class ControlBox extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="control-box">
				<FeedbackBox feedback={this.props.feedback}/>
				<GuessForm numberOfGuesses={this.props.numberOfGuesses} />
				<GuessBank guessedNumbers={this.props.guessedNumbers} />
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

export default connect(mapStateToProps)(ControlBox);