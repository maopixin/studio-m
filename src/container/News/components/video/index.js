import React, { Component } from 'react'
import './style/index.css'
import {Flex} from 'antd-mobile'
import VideoPlayItem from '../../../../component/VideoPlayItem'
export default class Video extends Component {
  render() {
    return (
      <div>
        <div className='video'>
          <VideoPlayItem/>
        </div>
        <Flex justify='between' className='state_box'>
          <div>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-dianzan_active"></use>
            </svg>
            20
          </div>
          <div>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-comiispinglun"></use>
            </svg>
            1
          </div>
        </Flex>
      </div>
    )
  }
}
