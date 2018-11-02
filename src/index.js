import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './index.css';
import App from './App';
import App1 from './login';
import registerServiceWorker from './registerServiceWorker';
import {
    // BrowserRouter as Router,//无#
    HashRouter as Router,//有#
    Route,
    Switch
} from 'react-router-dom';
const RouterConfig = () => (
    <Provider store={configureStore}>
        <Router>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/login" component={App1} />
            </Switch>
        </Router>
    </Provider>
)
ReactDOM.render(<RouterConfig />, document.getElementById('root'));
registerServiceWorker();
