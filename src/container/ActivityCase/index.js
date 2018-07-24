import React, { Component } from 'react'
import './style/index.css'
import {Flex} from 'antd-mobile'
export default class ActivityCase extends Component {
  constructor(props){
      super(props);
      this.state = {
        active:'线上',
        type:['线上','线下','线上线下相结合']
      }
  }
  typeClickHandle(val){
    this.setState({
        active:val
    })
  }
  renderComponent(val,key){
    if(val.type==='hadPic'){
        return (
            <div key={key} className='had_pic_box'>
                <div className='pic'>
                    <img className={val.src?'':'no_scla'} src={val.src||require('../../common/assets/img/none.png')}/>
                </div>
                <div className='title'>我是标题</div>
                <div className='info clearfix'>
                    <div className='fl'>陈祥龙名师工作室</div>
                    <div className='fr'>2018-02-02</div>
                </div>
                <div className={'type_box ' + val.caseType }></div>
            </div>
        )
    }else if(val.type==='notHadPic'){
        return (
            <div key={key} className='not_had_pic clearfix'>
                <div className='fl now'>
                    本期活动
                </div>
                <div className='fr case_info'>
                    <div className='title'>我是标题</div>
                    <div className='info clearfix'>
                        <div className='fl'>陈祥龙名师工作室</div>
                        <div className='fr'>2018-02-02</div>
                    </div>
                </div>
                <div className={'type_box ' + val.caseType }></div>
            </div>
        )
    }
  }
  render() {
    return (
      <div className='activity_case_page'>
        <Flex 
            className='type'
            justify='around'
        >
            {
                this.state.type.map((val)=>(
                    <div
                        key = {val}
                        className={val===this.state.active?'active':''}
                        onClick = {()=>{
                            this.typeClickHandle(val)
                        }}
                    >
                       {val}
                    </div>
                ))
            }
        </Flex>
        <div>
            {
                [{type:'hadPic',caseType:'on_line'},{type:'notHadPic',caseType:'not_line'},{type:'notHadPic',caseType:'all'}].map((val,key)=>{
                    return this.renderComponent(val,key)
                })
            }
        </div>
      </div>
    )
  }
}
