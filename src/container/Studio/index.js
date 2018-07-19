import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import asyncComponent from './../../common/assets/js/AsyncComponent'
const StudioHome = asyncComponent(()=> import('../StudioHome/index'))//工作室首页
const ClassRoom = asyncComponent(()=> import('../ClassRoom/index'))//名师课堂
const ClassRoomItem = asyncComponent(()=> import('../ClassRoomItem/index'))//名师课堂详情页
const informationList = asyncComponent(()=> import('../InformationList/index'))//资讯列表
const BriefIntroduce = asyncComponent(()=>import('../BriefIntroduce/index'))//工作室简介
const MemberList = asyncComponent(()=>import('../MemberList/index'))//成员排行
const ResultsDisplay = asyncComponent(()=>import('../ResultsDisplay'))//成果展示
export default class Studio extends Component {
  render() {
    return (
      <div>
        <Route path='/institute/studio/:id' exact component={StudioHome}/>
        <Route path='/institute/studio/:id/classroom' component={ClassRoom}></Route>
        <Route path='/institute/studio/:id/curriculum/:cid' component={ClassRoomItem}></Route>
        <Route path='/institute/studio/:id/information' component={informationList}></Route>
        <Route path='/institute/studio/:id/introduce' component={BriefIntroduce}></Route>
        <Route path='/institute/studio/:id/member' component={MemberList}></Route>
        <Route path='/institute/studio/:id/results' component={ResultsDisplay}></Route>
      </div>
    )
  }
}
