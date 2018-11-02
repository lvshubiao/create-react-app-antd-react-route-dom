
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import array from './array';
import analytics from './analytics';
import reducers from '../reducers';
//var configureStore = createStore(reducers);
var configureStore = applyMiddleware(thunk, array, analytics, createLogger)(createStore)(reducers);

export default configureStore;