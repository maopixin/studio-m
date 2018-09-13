import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from "react-router-dom";
import App from './common/App';
import registerServiceWorker from './registerServiceWorker';
import initReactFastclick from 'react-fastclick';
import 'promise-polyfill/src/polyfill';
import asyncComponent from './common/assets/js/AsyncComponent.js'
const Studio = asyncComponent(() => import("./container/Studio/index"));
initReactFastclick();
 

ReactDOM.render(
    <Router>
        <Route path="/" component={Studio}></Route>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
