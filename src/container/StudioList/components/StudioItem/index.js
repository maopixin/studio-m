import React, { Component } from 'react'
import {Flex} from 'antd-mobile'
import './style/index.css'

export default class StudioItem extends Component {
  render() {
    let {pic} = this.props  
    return (
      <div className='studio_items clearfix'>
        <div className='pic_box fl'>
            <img src={pic||require('../../../../common/assets/img/none.png')} alt=''/>
        </div>
        <div className='studio_info fr'>
            <div className='name'>工作室名字</div>
            <div className='subject'>数学</div>
            <Flex className='num'>
                <Flex.Item>
                    <div className='num_info'>22313132</div>
                    <div className='num_type'>积分</div>
                </Flex.Item>
                <Flex.Item>
                    <div className='num_info'>22313132</div>
                    <div className='num_type'>成员</div>
                </Flex.Item>
                <Flex.Item>
                    <div className='num_info'>22313132</div>
                    <div className='num_type'>访问</div>
                </Flex.Item>
            </Flex>
        </div>
      </div>
    )
  }
}
