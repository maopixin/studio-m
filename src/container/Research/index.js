import React, { Component } from 'react'
import ReactDOM from "react-dom";
import {PullToRefresh,Icon} from 'antd-mobile';
import {getActivityList,joinActivity} from '../../api/index'
import './style/index.css';

export default class Research extends Component {
  constructor(props){
      super(props);
      this.state = {
        goingList:[],
        notBeginningList:[],
        overList:[],
        typeList:[
            {
                title:'进行中',
                type:'goingList',
                firstLoading:true,
                process_status:1,
                page:1
            },
            {
                title:'未开始',
                type:'notBeginningList',
                firstLoading:false,
                process_status:0,
                page:1
            },
            {
                title:'已结束',
                type:'overList',
                firstLoading:false,
                process_status:2,
                page:1
            },
        ],
        lineType:{
            '线下':'under_line',
            '线上':'in_line',
            '综合':'all_line',
        },
        timeType:{
            '1':'not_beginning',
            '2':'going',
            '3':'over'
        },
        active:0,
        refreshing:false,
        height: document.documentElement.clientHeight,
        pre_page:1,
        firstLoading:true
      }
      
  }
  componentDidMount() {
    getActivityList({
        page: 1,
        pre_page: this.state.pre_page,
        process_status:1
    }).then(data=>{
        console.log(data)
        if(data.status.code==0){
            this.setState({
                goingList:data.data.list,
                firstLoading:false
            })
        }else{
            this.setState({
                firstLoading:false
            })
        }
        
    });
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(() => this.setState({
      height: hei,
    }), 0);
  }
  render() {
    let {
        active,
        lineType,
        typeList
    } = this.state
    return (
      <div className='research_page'>
        <div className='type_list_box clearfix'>
            {
                this.state.typeList.map((val,key)=>{
                    return (
                        <div 
                            key = {key}
                            className = {active===key?"active fl":'fl'}
                            onClick = {()=>{
                                if(active===key){
                                    return false
                                };
                                if(!val.firstLoading){
                                    let data = this.state.typeList;
                                    data[active].firstLoading = true;
                                    this.setState({
                                        active:key,
                                        typeList:data
                                    })
                                    getActivityList({
                                        page: 1,
                                        pre_page: this.state.pre_page,
                                        process_status: val.process_status
                                    }).then(data=>{
                                        this.setState({
                                            [val.type]:data.data.list,
                                        })
                                    });
                                }else{
                                    this.setState({
                                        active:key
                                    })
                                }
                            }}
                        >
                            {val.title}
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
                getActivityList({
                    page: typeList[active].page+1,
                    pre_page: this.state.pre_page,
                    process_status: typeList[active].process_status
                }).then(data=>{
                    this.setState({
                        [typeList[active].type]:[...this.state[typeList[active].type],...data.data.list],
                        refreshing:false
                    })
                });
            }}
        >
            {
                this.state.firstLoading
                ?
                <div style={{textAlign:'center',paddingTop:'20px'}}><Icon type='loading' /></div>
                :
                this.state[typeList[active].type].map((val,key)=>{
                    return (
                        <div className='activit_item' key={key}>
                            <div className='title'>
                                <span className={'type '+ lineType[val.type_text]}>
                                    
                                </span>
                                <span className='state not_beginning'>
                                    {val.process_status_text}
                                </span>
                                {val.title}
                            </div>
                            <div className='activit_info'>
                                <div className='info_item clearfix'>
                                    <div className='label'>创建者</div>
                                    <div>:</div>
                                    <div className='text'>{val.creator_name}</div>
                                </div>
                                <div className='info_item clearfix color'>
                                    <div className='label'>起止时间</div>
                                    <div>:</div>
                                    <div className='text'>{val.start_time} 至 {val.stop_time}</div>
                                </div>
                                <div className='info_item clearfix'>
                                    <div className='label'>活动描述</div>
                                    <div>:</div>
                                    <div className='text'>{val.direction}</div>
                                </div>
                                <div className='info_item clearfix color'>
                                    <div className='label'>参与人数</div>
                                    <div>:</div>
                                    <div className='text'>{val.partner_cnt}人</div>
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
