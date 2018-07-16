import React, { Component } from 'react'
import Information from './../../component/Information'
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
        ]
      }
  }
  render() {
    return (
      <div>
        {
            this.state.list.map((val,key)=>{
                return (
                    <Information type='information' person='张金良' time='2017-10-14' key={key}/>
                )
            })
        }
      </div>
    )
  }
}
