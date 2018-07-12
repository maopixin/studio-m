import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import VideoPlayItem from '../../../../component/VideoPlayItem/index'
import './style/index.css'
export default withRouter(class VideoPlayBox extends Component {
  constructor(props){
    super(props);
  }
  render() {
    let {url} = this.props
    return (
      <div 
        className='video_play_box box-shadow'
        onClick={()=>{
          this.props.history.push(url)
        }}
      >
        <div className='height_box'>
            <VideoPlayItem/>
        </div>
        <div className='video_play_box_info bg_body'>
            <div className='title'>标题</div>
            <div className='name_time clearfix'>
                <span className='fl'>陈祥龙</span>
                <span className='fr'>2018-05-04</span>
            </div>
        </div>
      </div>
    )
  }
})
