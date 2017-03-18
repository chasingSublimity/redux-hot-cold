import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import {winMessage} from '../reducers/handleFeedback';


export class FeedbackBox extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.feedback === winMessage) {
			this.props.dispatch(actions.postFewestGuesses(this.props.numberOfGuesses));
		}
	}

	render() {
		return (
				<div className="feedback">
					<p>{this.props.feedback}</p>
				</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	numberOfGuesses: state.numberOfGuesses,
	feedback: state.feedback,
	fewestGuesses: state.fewestGuesses,
	computerChoice: state.computerChoice
});

export default connect(mapStateToProps)(FeedbackBox);