import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App1 from './App1';
import registerServiceWorker from './registerServiceWorker';
import {
    // BrowserRouter as Router,//无#
    HashRouter as Router,//有#
    Route,
    Switch
} from 'react-router-dom';
const RouterConfig = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="/login" component={App1} />
        </Switch>
    </Router>
)
ReactDOM.render(<RouterConfig />, document.getElementById('root'));
registerServiceWorker();
