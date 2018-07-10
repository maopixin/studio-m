import React, { Component } from 'react';
import {Route } from 'react-router-dom'
import NotFoundPage from '../container/NotFoundPage/index'
import InstituteHome from '../container/institutehome/index'
import StudioHome from '../container/StudioHome/index'
import './assets/style/global.css'
class App extends Component {
  
  render() {
    return (
      <div>
        <Route path="/institute/home" component={InstituteHome}></Route>
        <Route path="/institute/studio/:id" component={StudioHome}></Route>
      </div>
    );
  }
}

export default App;





