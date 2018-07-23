import React, { Component } from 'react'
import ReactDOM from "react-dom";
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
        refreshing:false,
        height: document.documentElement.clientHeight,
      }
      
  }
  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(() => this.setState({
      height: hei,
    }), 0);
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
            ref={el => this.ptr = el}
            style={{
                height: this.state.height,
                overflow: 'auto',
            }}
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
                [{type:'under_line'},{type:'in_line'},{type:'all_line'},{type:'all_line'}].map((val,key)=>{
                    return (
                        <div className='activit_item' key={key}>
                            <div className='title'>
                                <span className={'type '+ val.type}>
                                    
                                </span>
                                <span className='state not_beginning'>
                                    未开始
                                </span>
                                我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题
                            </div>
                            <div className='activit_info'>
                                <div className='info_item clearfix'>
                                    <div className='label'>创建者</div>
                                    <div>:</div>
                                    <div className='text'>曲文瑞</div>
                                </div>
                                <div className='info_item clearfix color'>
                                    <div className='label'>起止时间</div>
                                    <div>:</div>
                                    <div className='text'>2018-06-21 00：50治2018-06-22 00：50</div>
                                </div>
                                <div className='info_item clearfix'>
                                    <div className='label'>活动描述</div>
                                    <div>:</div>
                                    <div className='text'>奥术大师多奥术大师多奥术大师多奥术大师多奥术大师多奥术大师多奥术大师多奥术大师多奥术大师多</div>
                                </div>
                                <div className='info_item clearfix color'>
                                    <div className='label'>参与人数</div>
                                    <div>:</div>
                                    <div className='text'>59人</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </PullToRefresh>
      </div>
    )
  }
}
