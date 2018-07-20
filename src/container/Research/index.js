import React, { Component } from 'react'
import {PullToRefresh} from 'antd-mobile'
import './style/index.css'

export default class Research extends Component {
  constructor(props){
      super(props);
      this.state = {
        typeList:[
            '线上',
            '线下',
            '综合'
        ],
        type:{
            under_line:'线下',
            in_line:'线上',
            all_line:'综合',
        },
        active:'线上',
        refreshing:false
      }
      
  }
  render() {
    let {active} = this.state
    return (
      <div className='research_page'>
        <div className='type_list_box clearfix'>
            {
                this.state.typeList.map((val,key)=>{
                    return (
                        <div 
                            key = {key}
                            className = {active===val?"active fl":'fl'}
                            onClick = {()=>{
                                this.setState({
                                    active:val
                                })
                            }}
                        >
                            {val}
                        </div>
                    )
                })
            }
        </div>
        <PullToRefresh
            direction = 'up'
            refreshing = {this.state.refreshing}
            onRefresh = {()=>{
                this.setState({
                    refreshing:true
                })

                setTimeout(()=>{
                    this.setState({
                        refreshing:false
                    })
                },2000)
            }}
        >
            {
                [{type:'under_line'},{type:'in_line'},{type:'all_line'}].map((val,key)=>{
                    return (
                        <div className='activit_item' key={key}>
                            <div className='title'>
                                <span className={'type '+ val.type}>
                                    
                                </span>
                                <span className='state not_beginning'>
                                    未开始
                                </span>
                            </div>
                            <div></div>
                        </div>
                    )
                })
            }
        </PullToRefresh>
      </div>
    )
  }
}
