require('babel-polyfill');

import store from './store';
import hotColdReducer from './reducers/index';
import * as actions from './actions/index';


store.dispatch(actions.startNewGame());
store.dispatch(actions.getInstructions());
store.dispatch(actions.hideInstructions());
store.dispatch(actions.guessNumber(5));
console.log(store.getState());