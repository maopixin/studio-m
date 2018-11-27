import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './style/index.css'
export default withRouter(class Resource extends Component {
  constructor(props){
      super(props);
      this.state = {
        stateBox:['before','start','end']
      }
  }
  render() {
    let {stateBox} = this.state;
    let {itemData} = this.props;
    let {y,m,d} = itemData.utime;
    return (
      <div className='resource_item clearfix'>
        <a href={itemData._link||'javascript:;'}
            onClick={()=>{
                if(!itemData._link){
                    this.props.history.push(this.props.match.url+'/research/'+itemData.source_id)
                }
            }}
        >
            <div className='fl resource_left'>
                <div className='resource_item_type'>
                    [{itemData.category_name}]
                </div>
                <div className={'resource_item_state ' + stateBox[itemData.detail.process_status]}>
                    {itemData.detail.process_status_text}
                </div>
            </div>
            <div className='fl resource_right'>
                <h4>{itemData.title}</h4>
                <div className='clearfix'>
                    <div className='fl'>{itemData.username}</div>
                    <div className='fr'>{y+'-'+m+'-'+d}</div>
                </div>
            </div>
        </a>
      </div>
    )
  }
})
