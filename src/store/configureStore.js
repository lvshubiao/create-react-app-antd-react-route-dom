
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import array from './array';
import reducers from '../reducers';
//var configureStore = createStore(reducers);
var configureStore = applyMiddleware(thunk, array, createLogger)(createStore)(reducers);

export default configureStore;