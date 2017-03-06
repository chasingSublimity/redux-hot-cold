import {createStore} from 'redux';

import * as reducers from './reducers/index';


const store = createStore(
	reducers.hotColdReducer, 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;