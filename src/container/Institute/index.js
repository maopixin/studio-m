import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import asyncComponent from './../../common/assets/js/AsyncComponent'

const InstituteHome = asyncComponent(()=>import('../institutehome'))//工作室
const StudioList = asyncComponent(()=> import('../StudioList'))//工作室列表
const WeekLesson = asyncComponent(()=>import('../WeekLesson'))//每周一课
export default class Institute extends Component {
  render() {
    return (
      <div>
        <Route path='/institute/home' exact component={InstituteHome}></Route>
        <Route path='/institute/home/studiolist' component={StudioList}></Route>
        <Route path='/institute/home/week' component={WeekLesson}></Route>
      </div>
    )
  }
}
