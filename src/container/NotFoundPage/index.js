import React, { Component } from 'react'
import {Link } from 'react-router-dom';
import './style/index.css'

export default class NotFoundPage extends Component {
  
  render() {
    return (
      <div className='n_content'>
        <div className="n_pic not-sprite">

        </div>
        <div className="btns">
          <div className='back not-sprite' 
            onClick={()=>{
              this.props.history.goBack();
            }}
          >
          </div>
          <div className='home not-sprite' 
            onClick={()=>{
              window.location.href = '//www.dljy.com'
            }}
          >
          </div>
        </div>
      </div>
    )
  }
}
