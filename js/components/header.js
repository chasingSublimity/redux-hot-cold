import React from 'react';
import * as actions from '../actions/index';
import {connect} from 'react-redux';


export class Header extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		event.preventDefault();
		this.props.dispatch(actions.startNewGame());
	}

	render() {
		return(
			<nav>
				<button>What?</button>
				<button onClick={this.handleClick}>+ New Game</button>
			</nav>
		);
	}
}


export default connect()(Header);