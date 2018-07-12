import React, { Component } from 'react'
import './style/index.css'
import VideoPlayItem from '../../component/VideoPlayItem'
import {WhiteSpace , WingBlank,Flex,TextareaItem} from 'antd-mobile'
import LeavingMsg from '../../component/LeavingMsg'
export default class ClassRoomItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      msg:[
        {},{},{}
      ],
      value:'',
      rows:1
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleLeavingBtn = this.handleLeavingBtn.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleLeavingBtn(){
    console.log(this.state.value);
  }
  render() {
    return (
      <div className='class_room_item'>
        <div className='class_room_item_video'>
          <VideoPlayItem></VideoPlayItem>
        </div>
        <div className='class_room_item_info bg_fff'>
          <WingBlank>
            <WhiteSpace/>
            <h4>我是标题</h4>
            <Flex justify='around' className='class_room_item_info_total'>
              <Flex.Item style={{}}>陈祥龙</Flex.Item>
              <Flex.Item style={{textAlign:'center'}}>2018-02-02</Flex.Item>
              <Flex.Item style={{textAlign:'right'}}>132143人访问</Flex.Item>
            </Flex>
            <WhiteSpace/>
          </WingBlank>
        </div>
        <WingBlank className='leaving_mag'>
          <WhiteSpace/>
          最新留言456条
          <WhiteSpace/>
        </WingBlank>
        {
          this.state.msg.map((val,key)=>{
            return (
              <LeavingMsg key={key} itemData={{}}/>
            )
          })
        }
        <div className='leaving_msg_box bg_fff'>
          <input 
              value={this.state.value} 
              className='leaving_msg_btn'
              onChange={(event)=>{
                  this.handleChange(event)
              }}
              placeholder='说点什么吧'
          >
              
          </input>
          <div className='handle_btn' onClick={this.handleLeavingBtn}>
            回复
          </div>
        </div>
      </div>
    )
  }
}
