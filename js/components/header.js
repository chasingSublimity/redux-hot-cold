import React from 'react';


export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<nav>
				<button>What?</button>
				<button>+ New Game</button>
			</nav>
		);
	}

}