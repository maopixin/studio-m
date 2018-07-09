import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from "react-router-dom";
import App from './common/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router >
        <Route path="/institute"  render={(props)=>{
            return (<App location={props.location}/>)
        }} />
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
