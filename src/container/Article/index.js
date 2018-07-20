import React, { Component } from 'react'
import './style/index.css'
import {Tabs, Flex} from 'antd-mobile'
export default class Article extends Component {
  constructor(props){
      super(props);
      this.state = {
          TabsData:[
              {title:'全部',children:['条目一','条目二','条目一','条目二','条目一','条目二']},
              {title:'全部2',children:[]},
              {title:'全部3',children:[]},
              {title:'全部4',children:[]}
          ],
          showData:'全部',
          showDataChild:0
      }
  }
  render() {
    let item;
    this.state.TabsData.forEach(e => {
        if(e.title===this.state.showData){
            item = e;
            return false;
        }
    });
    return (
      <div className='article_page'>
        <Tabs
            tabs = {this.state.TabsData}
            prerenderingSiblingsNumber = {1}
            onTabClick = {(tab,index)=>{
                this.setState({
                    showData:tab.title,
                    showDataChild:0
                })
            }}
        ></Tabs>
        <Flex className='items_box' justify='start' wrap='wrap'>
            {
                item.children.map((val,key)=>{
                    return (
                        <div 
                            className={key===this.state.showDataChild?"active":""} 
                            key={key}
                            onClick={()=>{
                                this.setState({
                                    showDataChild:key
                                })
                            }}
                        >
                            {val}
                        </div>
                    )
                })
            }
        </Flex>
        <div>
            {
                [{},{},{}].map((val,key)=>{
                    return (
                        <div className='article_item' key={key}>
                            <div className='article_info'>
                                <div className='title'>我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题</div>
                                <div className='time'>2018-02-12</div>
                            </div>
                            <div className='article_person_info clearfix'>
                                <div className='fl'>创建者：毛丕新</div>
                                <div className='fr'>浏览：120次</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </div>
    )
  }
}
