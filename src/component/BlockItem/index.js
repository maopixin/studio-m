import React, { Component } from 'react'
import './style/index.css'

export default class BlockItem extends Component {

  render() {
    const {itemData} = this.props;
    return (
      <div className='block_item box-shadow'>
        <img className={itemData.src?'':"no_scla"} src={itemData.src||require('../../common/assets/img/none.png')} alt=''/>
        <span className='block_item_title'>{itemData.title||'标题'}</span>
        <span className='block_item_studio'>{itemData.studioname||'工作室名称'}</span>
      </div>
    )
  }
}
