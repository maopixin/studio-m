import React, { Component } from 'react'
import './style/index.css'
export default class Title extends Component {

  render() {
    const {title} = this.props
    return (
      <div className='common_title'>
        <span className='line'></span>
        <span className='text'>
            {title}
        </span>
      </div>
    )
  }
}
