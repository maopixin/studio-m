import React, { Component } from 'react'
import './style/index.css'
export default class Resource extends Component {
  constructor(props){
      super(props);
      this.state = {
        stateBox:{
            before:'未开始',
            start:'进行中',
            end:'已结束',
        }
      }
  }
  render() {
    let {stateBox} = this.state
    let {itemData} = this.props
    return (
      <div className='resource_item clearfix'>
        <div className='fl resource_left'>
            <div className='resource_item_type'>
                [{itemData.type}]
            </div>
            <div className={'resource_item_state ' + itemData.state}>
                {stateBox[itemData.state]}
            </div>
        </div>
        <div className='fl resource_right'>
            <h4>名师工作室之xxxx</h4>
            <div className='clearfix'>
                <div className='fl'>曲文瑞</div>
                <div className='fr'>2018-12-12</div>
            </div>
        </div>
      </div>
    )
  }
}
