import React, { Component } from 'react'
import {WingBlank} from 'antd-mobile'
import './style/index.css'

export default class Information extends Component {
  constructor(props){
      super(props);
      this.state={
        typeList:{information:'资讯',notice:'公告',propaganda:'宣传'}
      }
  }
  render() {
    let {typeList} = this.state;
    let {type,time} = this.props
    return (
      <div className='bg_fff'>
        <WingBlank className='information_item'>
            <div className='information_item_title'>
                <span className={type}>{'['+typeList[type]+']'}</span>
                爱词霸英语为广大网友提供在线翻译在线词典、英语口语、英语学习资料、汉语词典,金山词霸下载等服务,致力于为您提供优质权威的在线英语服务,是5000万英语学习者的
                <span className='clam_line'>...</span>
            </div>
            <div className='information_item_time'>
                {time}
            </div>
        </WingBlank>
      </div>
    )
  }
}
