import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
// import VideoPlayItem from '../../../../component/VideoPlayItem/index'
import './style/index.css'
export default withRouter(class VideoPlayBox extends Component {
  constructor(props){
    super(props);
  }
  render() {
    let {url,pic,info} = this.props
    return (
      <div className='video_play_box'>
        <a href={info._link}>
          <div className='height_box'>
            <img className={pic?'':'no_scla'} src={info.detail.middle||require('../../../../common/assets/img/none.png')} alt=''/>
          </div>
          <div className='video_play_box_info bg_body'>
              <div className='title'>{info.title}</div>
              <div className='name_time clearfix'>
                  <span className='fl'>{info.username}</span>
                  <span className='fr'>{info.utime.y+'-'+info.utime.m+'-'+info.utime.d}</span>
              </div>
          </div>
        </a>
      </div>
    )
  }
})
