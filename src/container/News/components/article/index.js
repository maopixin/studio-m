import React, { Component } from 'react'
import './style/index.css'
import { Flex } from 'antd-mobile';
export default class article extends Component {
  constructor(props){
      super(props)
  }
  render() {
    return (
      <div>
        <p className='p_text'>
          {this.props.data.text}
        </p>
        <Flex className='state_box' justify='between'>
          <div>
            <svg className='icon' aria-hidden={true}>
              <use xlinkHref='#icon-yanjing'></use>
            </svg>
            300
          </div>
          <div>
            <svg className='icon' aria-hidden={true}>
              <use xlinkHref='#icon-dianzan_active'></use>
            </svg>
            300
          </div>
          <div>
            <svg className='icon' aria-hidden={true}>
              <use xlinkHref='#icon-comment'></use>
            </svg>
            300
          </div>
        </Flex>
      </div>
      
    )
  }
}
