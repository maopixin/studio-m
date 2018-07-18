import React, { Component } from 'react'
import Information from './../../component/Information'
import {PullToRefresh,WhiteSpace} from 'antd-mobile'
import './style/index.css'
export default class InformationList extends Component {
  constructor(props){
      super(props);
      this.state={
        list:[
            {},
            {},
            {},
            {},
        ],
        refreshing:false
      }
  }
  render() {
    return (
      <PullToRefresh
        direction='up'
        refreshing={this.state.refreshing}
        onRefresh={() => {
          this.setState({ refreshing: true });
          setTimeout(() => {
            this.setState({ refreshing: false });
          }, 2000);
        }}
      >
        {
            this.state.list.map((val,key)=>{
                return (
                    <Information type='information' person='张金良' time='2017-10-14' key={key}/>
                )
            })
        }
        <WhiteSpace size='lg'/>
      </PullToRefresh>
    )
  }
}
