import React, { Component } from 'react'
import ReactSVG from 'react-svg'
import './style/index.css'
export default class VideoPlayItem extends Component {
  render() {
    const {src} = this.props
    return (
      <div className='video_play_item'>
        <img className={src?'':'no_scla'} src={src||require('../../common/assets/img/none.png')}/>
        <div className='video_play_item_bg_black'>
          <ReactSVG 
            path={require("./svg/play.svg")}
            className='play_icon'
            svgStyle={{ width: 30,height:30 }}
          />
        </div>
      </div>
    )
  }
}
