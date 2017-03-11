import React from 'react';
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