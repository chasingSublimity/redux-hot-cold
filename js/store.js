import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import * as reducers from './reducers/index';


const store = createStore(
	reducers.hotColdReducer, applyMiddleware(thunk));

export default store;