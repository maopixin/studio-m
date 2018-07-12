import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import StudioHome from '../StudioHome/index'
import ClassRoom from '../ClassRoom/index'
export default class Studio extends Component {
  render() {
    return (
      <div>
        <Route path='/institute/studio/:id' exact component={StudioHome}/>
        <Route path='/institute/studio/:id/classroom' component={ClassRoom}></Route>
      </div>
    )
  }
}
