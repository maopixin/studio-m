import React, { Component } from 'react';
import store from '../../mobx/index'
import {Toast} from 'antd-mobile'
import jsonp from 'jsonp'
import {withRouter} from 'react-router-dom'
import {getCategory,getUserInfo} from '../../api/index'
import {observer} from 'mobx-react'

@observer
export default withRouter(class getBodyList extends Component {
  componentDidMount() {
    jsonp('http://account.dljy.com/user/api/get_login_user', null, (err, data) => {
      if (err) {
        Toast.fail('登录信息获取失败', 2)
      } else {
        if(data.status.code===0){
          if(data.data.is_login){
            getUserInfo().then(data=>{
              if(data.status.code===0){
                data.data.user.get_login = true;
                store.changeUserState(data.data.user);
              }
            }).catch(error=>{
              console.log(error,'登录信息请求出错');
            })
          }
        }else{
          Toast.fail('登录信息获取失败', 2)
        }
      }
    });

    getCategory({
        studio:this.props.match.params.id
    }).then(data=>{
        if(data.status.code===0){
          console.log(store,data.data.nav)
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
