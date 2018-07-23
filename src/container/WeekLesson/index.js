import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import {PullToRefresh} from 'antd-mobile'
import VideoPlayItem from '../../component/VideoPlayItem'
export default class WeekLesson extends Component {
  constructor(props){
      super(props);
      this.state = {
        refreshing: false,
        height: document.documentElement.clientHeight,
      }
  }
  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(() => this.setState({
      height: hei,
    }), 0);
  }
  render() {
    return (
      <div className='week_lesson'>
        <PullToRefresh
            direction = 'up'
            refreshing = {this.state.refreshing}
            ref={el => this.ptr = el}
            style={{
                height: this.state.height,
                overflow: 'auto',
            }}
            onRefresh={() => {
                this.setState({ refreshing: true });
                setTimeout(() => {
                    this.setState({ refreshing: false });
                }, 1000);
            }}
        >
            {
                [{},{}].map((val,key)=>{
                    return (
                        <div className='week_lesson_item' key={key}>
                            <div>
                                <VideoPlayItem/>
                            </div>
                            <div className='title'>我是标题</div>
                            <div className='info clearfix'>
                                <div className='fl'>授课人：毛丕新</div>
                                <div className='fr'>2018-01-01</div>
                            </div>
                            <div className='comment'>点评：奥术大师领导好洛氏硬度拉还是点了哈里斯</div>
                        </div>
                    )
                })
            }
        </PullToRefresh>
      </div>
    )
  }
}
