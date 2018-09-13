import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import asyncComponent from './../../common/assets/js/AsyncComponent'
import GetBodyList from '../getBodyList'
const StudioHome = asyncComponent(()=> import('../StudioHome'))//工作室首页
const ClassRoom = asyncComponent(()=> import('../ClassRoom'))//名师课堂
const ClassRoomItem = asyncComponent(()=> import('../ClassRoomItem'))//名师课堂详情页
const informationList = asyncComponent(()=> import('../InformationList'))//资讯列表
const BriefIntroduce = asyncComponent(()=>import('../BriefIntroduce'))//工作室简介
const MemberList = asyncComponent(()=>import('../MemberList'))//成员排行
const ResultsDisplay = asyncComponent(()=>import('../ResultsDisplay'))//成果展示
const ResourcesTeach = asyncComponent(()=>import('../ResourcesTeach/'))//教学资源
const Article = asyncComponent(()=>import('../Article'))//教师文章
const Research = asyncComponent(()=>import('../Research'))//教研活动
const News = asyncComponent(()=>import('../News'))//最新动态
const ActivityCase = asyncComponent(()=>import('../ActivityCase'))//活动案例
const LeaveMsg = asyncComponent(()=>import('../LeaveMsg'))//留言板
const ResearchPage = asyncComponent(()=>import('../ResearchPage'))

export default class Studio extends Component {
  render() {
    return (
      <div>
        <GetBodyList/>
        <Route path='/institute/studio/:id' exact component={StudioHome}/>
        <Route path='/institute/studio/:id/classroom' component={ClassRoom}></Route>
        <Route path='/institute/studio/:id/curriculum/:cid' component={ClassRoomItem}></Route>
        <Route path='/institute/studio/:id/information' component={informationList}></Route>
        <Route path='/institute/studio/:id/introduce' component={BriefIntroduce}></Route>
        <Route path='/institute/studio/:id/member' component={MemberList}></Route>
        <Route path='/institute/studio/:id/results' component={ResultsDisplay}></Route>
        <Route path='/institute/studio/:id/t_resource' component={ResourcesTeach}></Route>
        <Route path='/institute/studio/:id/t_article' component={Article}></Route>
        <Route path='/institute/studio/:id/research/:rid' component={ResearchPage}></Route>
        <Route path='/institute/studio/:id/research' exact component={Research}></Route>
        <Route path='/institute/studio/:id/news' component={News}></Route>
        <Route path='/institute/studio/:id/activitycase' component={ActivityCase}></Route>
        <Route path='/institute/studio/:id/leavemsg' component={LeaveMsg}></Route>
      </div>
    )
  }
}
