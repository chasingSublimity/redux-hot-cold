require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Game from './components/game';

import store from './store';
import hotColdReducer from './reducers/index';
import * as actions from './actions/index';



document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(
		<Provider store={store}>
			<Game />
		</Provider>,
		document.getElementById('app')
	)
);