import React, { Component } from 'react'
import './style/index.css'
export default class LessonCard extends Component {
  render() {
    let {dataItem} = this.props;
    return (
      <div className='lesson_card_item box-shadow'>
        <div className='pic_box'>
            <img alt='' className={dataItem.src?'':'no_scla'} src={dataItem.src||require('../../../../common/assets/img/none.png')}/>
        </div>
        <div className='lesson_card_info'>
            <div className='title'>
                我是标题
            </div>
            <div className='person_info clearfix'>
                <span className='fl'>李金星</span>
                <span className='fr'>2017-11-09</span>
            </div>
        </div>
      </div>
    )
  }
}
