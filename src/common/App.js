import React, { Component } from 'react';
import {Route ,Switch} from 'react-router-dom'
import asyncComponent from './assets/js/AsyncComponent.js'
import './assets/style/global.css'
// import NotFoundPage from '../container/NotFoundPage/index'
const StudioList = asyncComponent(() => import("../container/StudioList/index"));
const Studio = asyncComponent(() => import("../container/Studio/index"));
const Belong = asyncComponent(() => import("../container/Belong/index"));


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/belong/:id?" component={Belong}></Route>
          <Route path="/institute/list" component={StudioList}></Route>
          <Route path="/institute" component={Studio}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;





