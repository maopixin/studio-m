import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from "react-router-dom";
import { browserHistory } from 'react-router'
import App from './common/App';
import registerServiceWorker from './registerServiceWorker';
import initReactFastclick from 'react-fastclick';
initReactFastclick();


ReactDOM.render(
    <Router>
        <Route path="/institute"  render={(props)=>{
            return (<App location={props.location}/>)
        }} />
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
