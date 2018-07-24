import React, { Component } from 'react'
import './style/index.css'
export default class SubjectLeader extends Component {
  render() {
    return (
      <div className='subject_leader_page'>
        <div className='title clearfix'>
            <div className='now fl'>本期推荐</div>
            <div className='studio_info fl'>
                <div className='studio_name'>来自工作室：钟小平工作室</div>
                <div className='studio_msg'>嘻嘻嘻嘻嘻嘻</div>
            </div>
        </div>
        <div className='leader_list clearfix'>
            {
                [{},{},{},{}].map((val,key)=>{
                    return (
                        <div className='leader_item' key={key}>
                            <img src={val.src||require('../../common/assets/img/none.png')} alt=''/>
                            <span>名字</span>
                        </div>
                    )
                })
            }
        </div>
      </div>
    )
  }
}
