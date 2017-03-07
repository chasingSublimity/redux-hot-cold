import React from 'react';

function FeedbackBox(props) {

	return (
		<div className="feedback">
			<p>{props.feedback}</p>
		</div>
	);
}

export default FeedbackBox;