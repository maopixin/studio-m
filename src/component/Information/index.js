import React, { Component } from 'react'
import {WingBlank} from 'antd-mobile'
import './style/index.css'

export default class Information extends Component {
  constructor(props){
      super(props);
      this.state={
        typeList:{information:'资讯',notice:'通告',propaganda:'成果展示'}
      }
  }
  render() {
    let {typeList} = this.state;
    let {time,person,info} = this.props
    return (
      <div className='bg_fff information_box'>
        <WingBlank className='information_item'>
            <div className='information_item_title'>
                <span className={info.type}>{'['+typeList[info.type]+']'}</span>
                {info.title}
                {/* <span className='clam_line'>...</span> */}
            </div>
            <div className='information_item_time clearfix'>
              <div className='fl'>{person}</div>
              <div className='fr'>{time}</div>
            </div>
        </WingBlank>
      </div>
    )
  }
}
