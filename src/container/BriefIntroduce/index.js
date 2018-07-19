import React, { Component } from 'react'
import Title from '../../component/Title'
import {WhiteSpace} from 'antd-mobile'
import './style/index.css'

export default class BriefIntroduce extends Component {
  constructor(props){
      super(props);
      this.state= {
          studioInfo:{
              
          }
      }
  }
  render() {
    let {studioInfo} = this.state;
    return (
      <div className='brief_introduce_page'>
        <div className='studio_info'>
            <div className='pic_box'>
                <img src={studioInfo.src||require('../../common/assets/img/none.png')} alt=''/>
            </div>
            <div className='studio_text'>
                <div>
                    <span className='text_label'>名师</span>
                    <span>:</span>
                    <span className='text'>凌英强</span>
                </div>
                <div>
                    <span className='text_label'>学科</span>
                    <span>:</span>
                    <span className='text'>凌英强</span>
                </div>
                <div>
                    <span className='text_label'>职称</span>
                    <span>:</span>
                    <span className='text'>凌英强</span>
                </div>
                <div>
                    <span className='text_label'>成立时间</span>
                    <span>:</span>
                    <span className='text'>凌英强</span>
                </div>
                <div>
                    <span className='text_label'>设立单位</span>
                    <span>:</span>
                    <span className='text'>凌英强</span>
                </div>
            </div>
        </div>
        <WhiteSpace/>
        <Title title='工作室简介'/>
        <div className='text_boxs'>
            <p>
            工作室简介工作室简介工作室简介工作室简介
            </p>
            <p>
            工作室简介工作室简介工作室简介工作室简介
            </p>
        </div>
        <Title title='工作室2018年度计划'/>
        <div className='text_boxs'>

        </div>
        <Title title='工作室实施方案'/>
        <div className='text_boxs'>

        </div>
      </div>
    )
  }
}
