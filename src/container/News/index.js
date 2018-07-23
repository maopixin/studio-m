import React, { Component } from 'react'
import {PullToRefresh} from 'antd-mobile'
import ReactDOM from 'react-dom'
import Article from './components/article'
import Video from './components/video'
import Resource from './components/resource'
import './style/index.css'
import './svg/iconfont'
export default class News extends Component {
  constructor(props){
      super(props);
      this.state = {
        refreshing:false,
        height:document.documentElement.clientHeight,
      }
  }
  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(() => this.setState({
      height: hei,
    }), 0);
  }
  checkComponents(type,data){
    if(type==='article'){
        return (
            <Article data={data}/>
        )
    }else if(type==='video'){
        return (
            <Video data={data}/>
        )
    }else if(type==='resource'){
        return (
            <Resource data={data}/>
        )
    }
  }
  render() {
    return (
      <div className='news_page'>
        <PullToRefresh
            direction='up'
            refreshing={this.state.refreshing}
            ref={el=>this.ptr=el}
            style={{
                height:this.state.height,
                overflow:'auto'
            }}
            onRefresh={() => {
                this.setState({ refreshing: true });
                setTimeout(() => {
                    this.setState({ refreshing: false });
                }, 1000);
            }}
        >
            {
                [{type:'article',text:'xxxxx'},{type:'video',url:'xxxx'},{type:'resource',resourceType:'zip',resourceTitle:'asdd'}].map((val,key)=>{
                    return (
                        <div key={key} className='news_item'>
                            <div className='news_title clearfix'>
                                <div className='fl head_pic'>
                                    <img src={val.src||require('../../common/assets/img/none.png')} alt=''/>
                                </div>
                                <div className='fr news_title_info'>
                                    <h4>标题标题标题标题标题标题标题标题标题标题</h4>
                                    <div className='person_a_time clearfix'>
                                        <div className='fl'>创建者：曲文瑞</div>
                                        <div className='fr'>2018-08-01</div>
                                    </div>
                                </div>
                            </div>
                            <div className='news_body'>
                                {this.checkComponents(val.type,val)}
                            </div>
                        </div>
                    )
                })
            }
        </PullToRefresh>
      </div>
    )
  }
}
