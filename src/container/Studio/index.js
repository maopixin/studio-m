import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import asyncComponent from './../../common/assets/js/AsyncComponent'
const StudioHome = asyncComponent(()=> import('../StudioHome/index'))
const ClassRoom = asyncComponent(()=> import('../ClassRoom/index'))
const ClassRoomItem = asyncComponent(()=> import('../ClassRoomItem/index'))
const informationList = asyncComponent(()=> import('../InformationList/index'))

export default class Studio extends Component {
  render() {
    return (
      <div>
        <Route path='/institute/studio/:id' exact component={StudioHome}/>
        <Route path='/institute/studio/:id/classroom' component={ClassRoom}></Route>
        <Route path='/institute/studio/:id/curriculum/:cid' component={ClassRoomItem}></Route>
        <Route path='/institute/studio/:id/information' component={informationList}></Route>
      </div>
    )
  }
}
