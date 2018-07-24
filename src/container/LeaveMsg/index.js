import React, { Component } from 'react'
import './style/index.css'
import Title from '../../component/Title'
import {Modal} from 'antd-mobile'
const alert = Modal.alert;
export default class LeaveMsg extends Component {
  constructor(props){
      super(props);
      this.state = {
          value:''
      }
  }
  render() {
    return (
      <div className='leave_msg_page'>
        <Title 
            title='教师寄语' 
            moreText={<div className='msg_num'>留言<span>2016</span>条</div>}
        />
        <div>
            {
                [{}].map((val,key)=>{
                    return (
                        <div className='msg_item_list'>
                            <div className='msg_person_info clearfix'>
                                <div className='fl pic_box'>
                                    <img alt='' src={val.src||require('../../common/assets/img/none.png')}/>
                                </div>
                                <div className='fr person_info'>
                                    <div className='name'>张金良</div>
                                    <div className='time'>2018-01-01 13：13：20</div>
                                </div>
                            </div>
                            <div 
                                className='msg'
                                onClick={() =>
                                    alert('Much Buttons', <div>More than two buttons</div>, [
                                        { text: '回复', onPress: () => console.log('第0个按钮被点击了') },
                                        { text: '复制', onPress: () => console.log('第1个按钮被点击了') },
                                        { text: '举报', onPress: () => console.log('第2个按钮被点击了') },
                                        { text: '取消', onPress: () => console.log('第2个按钮被点击了') },
                                    ])
                                }
                            >
                                就奥斯卡大家解答时间大家都快乐的骄傲，的借口啦大家大家爱看觉得啦
                            </div>
                            <div className='msg_person_info clearfix no_border'>
                                <div className='fr pic_box'>
                                    <img alt='' src={val.src||require('../../common/assets/img/none.png')}/>
                                </div>
                                <div className='fl person_info right'>
                                    <div className='name'>张金良</div>
                                    <div className='time'>2018-01-01 13：13：20</div>
                                </div>
                            </div>
                            <div className='msg right no_border'>
                                就奥斯卡大家解答时间大家都快乐的骄傲，的借口啦大家大家爱看觉得啦
                            </div>
                        </div>
                    )
                })
            }
        </div>
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
