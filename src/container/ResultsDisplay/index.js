import React, { Component } from 'react'
import {PullToRefresh,WhiteSpace} from 'antd-mobile'
import './style/index.css'

export default class ResultsDisplay extends Component {
  constructor(props){
    super(props);
    this.state = {
      refreshing:false,
      direction:'up',
    }
  }
  render() {
    let {refreshing,direction} = this.state;
    return (
      <div className='result_display_page'>
        <PullToRefresh
          direction = {direction}
          refreshing = {refreshing}
          indicator = {{ activate: (<div className='refresh_tip'>松开立即加载</div>), deactivate: (<div className='refresh_tip'>下拉加载更多</div>),finish: (<div className='refresh_tip'>加载完成</div>) }}
          onRefresh = {()=>{
            this.setState({
              refreshing:true
            })
            setTimeout(() => {
              this.setState({
                refreshing:false
              })
            }, 2000);
          }}
        >
          {
            [{},{},{}].map((val,key)=>{
              return (
                <div key={key}>
                  <div className='result_item'>
                    <div className='result_title'>
                      从哈哈哈哈哈哈哈哈哈哈哈我是标题
                    </div>
                    <div className='result_info'>
                      <div className='result_studio_name'>
                        我是工作室名称
                      </div>
                      <div className='result_state clearfix'>
                        <div className='result_time fl'>
                          时间：2018-05-06
                        </div>
                        <div className='result_visite_num fr'>
                          浏览：123次
                        </div>
                      </div>
                    </div>
                  </div>
                  <WhiteSpace/>
                </div>
              )
            })
          }
        </PullToRefresh>
      </div>
    )
  }
}
