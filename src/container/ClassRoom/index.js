import React, { Component } from 'react'
import { Tabs, WhiteSpace,WingBlank } from 'antd-mobile';
import VideoPlayBox from './components/VideoPlayBox'
import './style/index.css'
export default class ClassRoom extends Component {
  constructor(props){
    super(props);
    this.state = {
      tabs : [
        {
          title:'全部'
        },
        {
          title:'汇报课'
        },
        {
          title:'微课程'
        },
        {
          title:'示范课'
        },
        {
          title:'公开课'
        },
        {
          title:'说课'
        },
      ]
    }
  }
  componentDidMount() {
    this.node.scrollIntoView();
  }
  renderContent = tab =>
    (
      <div className='bg_fff'>
        <WhiteSpace size='md' className='bg_body'/>
        <WingBlank size='lg' className='class_room_list clearfix'>
          <WhiteSpace size='md'/>
          {this.state.tabs.map((val,key)=>{
            return (
              <VideoPlayBox
                key={key} 
                url='/institute/studio/00/curriculum/00'
              />
            )
          })}
        </WingBlank>
      </div>
    );
  render() {
    let {tabs} = this.state
    return (
      <div ref={node=>this.node=node}>
          <Tabs tabs={tabs} prerenderingSiblingsNumber={1} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
            {this.renderContent}
          </Tabs>
      </div>
    )
  }
}
