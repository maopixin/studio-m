import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import asyncComponent from './../../common/assets/js/AsyncComponent'

const InstituteHome = asyncComponent(()=>import('../institutehome/index'))
const StudioList = asyncComponent(()=> import('../StudioList/index'))

export default class Institute extends Component {
  render() {
    return (
      <div>
        <Route path='/institute/home' exact component={InstituteHome}></Route>
        <Route path='/institute/home/studiolist' component={StudioList}></Route>
      </div>
    )
  }
}
