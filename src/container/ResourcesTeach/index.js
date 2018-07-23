import React, { Component } from 'react'
import {Tabs,Flex} from 'antd-mobile'
import './style/index.css'
const pdf = require('../../common/assets/img/pdf.png');
const ppt = require('../../common/assets/img/ppt.png');
const word = require('../../common/assets/img/word.png');
const rar = require('../../common/assets/img/rar.png');
const zip = require('../../common/assets/img/zip.png');
export default class ResourcesTeach extends Component {
  constructor(props){
      super(props);
      this.state = {
          TabsData : [
            { title: '全部', sub: '1' },
            { title: '教学设计', sub: '2' },
            { title: '教学体会', sub: '3' },
          ]
      }
  }
  render() {
    return (
      <div className='t_resource_page'>
        <Tabs
            tabs = {this.state.TabsData}
            prerenderingSiblingsNumber = {1}
        >
            {
                this.state.TabsData.map((val1,key1)=>{
                    return (
                        <div key={key1}>
                            {
                                [{type:'pdf'},{type:'zip'},{type:'rar'}].map((val,key)=>(
                                    <div className='resource_items' key={key}>
                                        <div className='resource_item_info'>
                                            <div className='pic'>
                                                <img src={eval(val.type)} alt=''/>
                                            </div>
                                            <div className='text'>
                                                <div className='title'>我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题</div>
                                                <div className='time'>2018-15-18</div>
                                            </div>
                                        </div>
                                        <Flex className='resource_person_info' justify='between'>
                                            <div>创建者：毛丕新</div>
                                            <div>浏览：10次</div>
                                            <div>下载：10次</div>
                                        </Flex>
                                    </div>
                                ))
                            }
                        </div>
                    )
                })
            }
        </Tabs>
      </div>
    )
  }
}
