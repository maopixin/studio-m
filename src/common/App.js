import React, { Component } from 'react';
import {Route } from 'react-router-dom'
import asyncComponent from './assets/js/AsyncComponent.js'
import './assets/style/global.css'
// import NotFoundPage from '../container/NotFoundPage/index'
const InstituteHome = asyncComponent(() => import("../container/institutehome/index"));
const Studio = asyncComponent(() => import("../container/Studio/index"));



class App extends Component {
  render() {
    return (
      <div>
        <Route path="/institute/home" component={InstituteHome}></Route>
        <Route path="/institute/studio" component={Studio}></Route>
      </div>
    );
  }
}

export default App;





