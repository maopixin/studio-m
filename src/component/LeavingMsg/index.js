import React, { Component } from 'react'
import './style/index.css'
export default class LeavingMsg extends Component {

  render() {
    let {itemData:e} = this.props
    console.log(e)
    return (
      <div className='leaving_msg bg_fff'>
          <div className='leaving_msg_person clearfix'>
              <img className={e.src?'':"no_scla"} src={e.create_user_mediumAvatar||require('../../common/assets/img/none.png')} alt=''/>
              <div className='info'>
                  <div className='name'>{e.create_user_name}</div>
                  <div className='time'>{e.utime}</div>
              </div>
          </div>
          <div className='leaving_msg_body'>
              {e.content}
          </div>
      </div>
    )
  }
}
