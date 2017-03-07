import React from 'react';
import GuessBank from './guessbank';
import GuessForm from './guessform';
import FeedbackBox from './feedbackbox';
import ControlBox from './controlbox';
import Header from './header';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return(
			<div className="game">
				<Header />
				<ControlBox />
			</div>
		);
	}

}