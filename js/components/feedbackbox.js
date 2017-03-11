import React from 'react';

export default function FeedbackBox(props) {

	return (
		<div className="feedback">
			<p>{props.feedback}</p>
		</div>
	);
}