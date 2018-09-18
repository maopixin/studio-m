import React, { Component } from 'react'
import './style/index.css'
export default class LessonCard extends Component {
  render() {
    let {dataItem} = this.props;
    let {y,m,d} = dataItem.utime;
    return (
      <div className='lesson_card_item box-shadow'>
        <a href={dataItem._link}>
          <div className='pic_box'>
              <img alt='' className={dataItem.media.middle?'':'no_scla'} src={dataItem.media.middle||require('../../../../common/assets/img/none.png')}/>
          </div>
          <div className='lesson_card_info'>
              <div className='title'>
                  {dataItem.title}
              </div>
              <div className='person_info clearfix'>
                  <span className='fl'>{dataItem.username}</span>
                  <span className='fr'>{y+'-'+m+'-'+d}</span>
              </div>
          </div>
        </a>
      </div>
    )
  }
}
