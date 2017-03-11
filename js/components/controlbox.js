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
				<FeedbackBox feedback={this.props.feedback} fewestGuesses={this.props.fewestGuesses}/>
				<GuessForm numberOfGuesses={this.props.numberOfGuesses} />
				<GuessBank guessedNumbers={this.props.guessedNumbers} />
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	numberOfGuesses: state.numberOfGuesses,
	guessedNumbers: state.guessedNumbers,
	feedback: state.feedback,
	fewestGuesses: state.fewestGuesses
});

export default connect(mapStateToProps)(ControlBox);