import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import {getStudioObj} from '../../api/index'
import {Tabs, Flex,PullToRefresh,Toast,WhiteSpace} from 'antd-mobile'
export default class Article extends Component {
  constructor(props){
      super(props);
      this.state = {
          pre_page:8,
          TabsData : [
            { title: '全部',data:{list:[],total:0,total_page:0},first:false,category_name:'教学资源' },
          ],
          refreshing: false,
          down: false,
          height: document.documentElement.clientHeight,
      }
  }
  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(() => this.setState({
      height: hei,
    }), 0);
    this.getData()
  }
  getData(){
    getStudioObj({
        studio:this.props.match.params.id,
        category_name:'教师文章',
        pre_page:this.state.pre_page,
        page:1
    }).then(data=>{
        if(data.status.code==0){
            let obj = this.state.TabsData;
            obj[0].data = data.data;
            obj[0].page = 2;
            this.setState({
                TabsData:obj
            })
        }
    })
  }
  render() {
    return (
      <div className='article_page'>
        <Tabs
            tabs = {this.state.TabsData}
            prerenderingSiblingsNumber = {1}
        >
            {
                this.state.TabsData.map((val1,key1)=>{
                    return (
                        <PullToRefresh
                            key={key1}
                            ref={el => this.ptr = el}
                            style={{
                                height: this.state.height,
                                overflow: 'auto',
                            }}
                            direction={this.state.down ? 'down' : 'up'}
                            refreshing={this.state.refreshing}
                            onRefresh={() => {
                                if(val1.page>val1.data.total_page){
                                    Toast.info('已经到底了', 2);
                                    return false;
                                }
                                this.setState({ refreshing: true });
                                
                                getStudioObj({
                                    studio:this.props.match.params.id,
                                    category_name:val1.category_name,
                                    pre_page:this.state.pre_page,
                                    page:val1.page
                                }).then(data=>{
                                    if(data.status.code==0){
                                        let obj = this.state.TabsData;
                                        data.data.list = this.handleType(data.data.list);
                                        obj[key1].data = {list:[...obj[key1].data.list,...data.data.list],total:data.data.total,total_page:data.data.total_page};
                                        obj[key1].page = val1.page+1;
                                        this.setState({
                                            TabsData:obj,
                                            refreshing: false
                                        })
                                    }
                                })
                            }}
                            indicator={{ activate: '松开立即加载', deactivate: '下拉加载更多', finish: '加载完成' }}
                        >   
                            {
                                this.state.TabsData[key1].data.list.map((val,key)=>(
                                    <div 
                                        className='article_item' 
                                        key={key}
                                    >
                                        <a href={val._link}>
                                            <div className='article_info'>
                                                <div className='title'>{val.title}</div>
                                                <div className='time'>{val.utime.y+'-'+val.utime.m+'-'+val.utime.d}</div>
                                            </div>
                                            <div className='article_person_info clearfix'>
                                                <div className='fl'>创建者：{val.username}</div>
                                                <div className='fr'>浏览：{val.hits}次</div>
                                            </div>
                                        </a>
                                    </div>
                                ))
                            }
                            <WhiteSpace/>
                        </PullToRefresh>
                    )
                })
            }
        </Tabs>
        {/* <Flex className='items_box' justify='start' wrap='wrap'>
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
        </Flex> */}
        {/* <div>
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
        </div> */}
      </div>
    )
  }
}
