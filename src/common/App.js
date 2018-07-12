import React, { Component } from 'react';
import {Route } from 'react-router-dom'
// import NotFoundPage from '../container/NotFoundPage/index'
import InstituteHome from '../container/institutehome/index'
import Studio from '../container/Studio/index'
import './assets/style/global.css'
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





