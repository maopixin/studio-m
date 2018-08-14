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
    let {stateBox} = this.state;
    let {itemData} = this.props;
    let {y,m,d} = itemData.utime;
    return (
      <div className='resource_item clearfix'>
        <div className='fl resource_left'>
            <div className='resource_item_type'>
                [{itemData.category_name}]
            </div>
            <div className={'resource_item_state ' + itemData.state}>
                {stateBox[itemData.state]}
            </div>
        </div>
        <div className='fl resource_right'>
            <h4>{itemData.title}</h4>
            <div className='clearfix'>
                <div className='fl'>{itemData.username}</div>
                <div className='fr'>{y+'-'+m+'-'+d}</div>
            </div>
        </div>
      </div>
    )
  }
}
