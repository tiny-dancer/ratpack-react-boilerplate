import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute} from 'react-router';

import configureStore from './store/configureStore';

import App from './containers/App';
import Login from './containers/Login';
import Secured from './containers/Secured';
import Home from './containers/Home';
import Monitor from './containers/Monitor';
import NotFound from './containers/NotFound';

import  'bootstrap/dist/css/bootstrap.css';

const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="/login" component={Login}/>
                <Route component={Secured}>
                    <Route path="/monitor" component={Monitor}/>
                </Route>

                <Route path="*" component={NotFound}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
