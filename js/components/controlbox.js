import React from 'react';
import GuessBank from './guessbank';
import GuessForm from './guessform';
import FeedbackBox from './feedbackbox';

export default class ControlBox extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="control-box">
				<FeedbackBox feedback={'Cold as hell'}/>
				<GuessForm numberOfGuesses={5} />
				<GuessBank guessedNumbers={[5,25,65,3,1]}/>
			</div>
		);
	}

}