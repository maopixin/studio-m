import React, { Component } from 'react'
import './style/index.css'
export default class LeavingMsg extends Component {

  render() {
    let {itemData} = this.props
    return (
      <div className='leaving_msg bg_fff'>
          <div className='leaving_msg_person clearfix'>
              <img className={itemData.src?'':"no_scla"} src={itemData.src||require('../../common/assets/img/none.png')} alt=''/>
              <div className='info'>
                  <div className='name'>人名</div>
                  <div className='time'>2018-10-10 13:12:13</div>
              </div>
          </div>
          <div className='leaving_msg_body'>
              老师授课的方式 案例三等奖阿里还是大量黄色的考拉还是刘德华阿里山的考拉还是打款了哈蓝色大海暗杀了圣诞快乐安徽省
          </div>
      </div>
    )
  }
}
