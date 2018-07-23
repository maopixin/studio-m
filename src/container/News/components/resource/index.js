import React, { Component } from 'react'
import './style/index.css'
import {Flex} from 'antd-mobile'
const pdf = require('../../../../common/assets/img/pdf.png');
const ppt = require('../../../../common/assets/img/ppt.png');
const word = require('../../../../common/assets/img/word.png');
const rar = require('../../../../common/assets/img/rar.png');
const zip = require('../../../../common/assets/img/zip.png');

export default class Resource extends Component {
  constructor(props){
    super(props);
  }
  render() {
    
    return (
      <div className=''>
        <div className='news_resource clearfix'>
            <div className='resource_type fl'>
                <img src={eval(this.props.data.resourceType)} alt=''/>
            </div>
            <div className='resource_title fl'>
                {this.props.data.resourceTitle}
            </div>
        </div>
        <Flex className='state_box' justify='between'>
            <div>
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-xingxingxuanzhong"></use>
                </svg>
                20
            </div>
            <div>
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-xiazai"></use>
                </svg>
                20
            </div>
            <div>
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-comment"></use>
                </svg>
                20
            </div>
        </Flex>
      </div>
    )
  }
}
