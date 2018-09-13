import React, { Component } from 'react';
import store from '../../mobx/index'
import {Toast} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
import {getCategory} from '../../api/index'
import {observer} from 'mobx-react'

@observer
export default withRouter(class getBodyList extends Component {
  componentDidMount() {
  console.log(this.props)

    getCategory({
        studio:this.props.match.params.id
    }).then(data=>{
        if(data.status.code==0){
          store.changeBodyList(data.data.nav);
        }else{
          Toast.fail('工作室导航信息获取失败', 2)
        }
    })
  }
  render() {
    return (
      <div>
      </div>
    )
  }
})
