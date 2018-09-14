import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Tabs, WhiteSpace,WingBlank ,PullToRefresh,Toast} from 'antd-mobile';
import VideoPlayBox from './components/VideoPlayBox'
import {getColumnChildByName,getLessonMore} from '../../api/index'
import './style/index.css'
export default class ClassRoom extends Component {
  constructor(props){
    super(props);
    this.state = {
      pre_page:2,
      refreshing: false,
      down: true,
      height: document.documentElement.clientHeight,
      active:0,
      tabs : [
        {
          title:'全部',
          id:'all',
          data:{
            list:[],
            total:0,
            total_page:0
          },
          first:false,
          page:1
        },
      ]
    }
  }
  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(() => this.setState({
      height: hei,
      refreshing:true
    }), 0);
    this.node.scrollIntoView();
    getColumnChildByName({
      studio_id:this.props.match.params.id,
      parent_name:this.props.match.params.cname
    }).then(data=>{
      if(data.status.code==0){
        let list = data.data;
        for (let i = 0; i < list.length; i++) {
          list[i].title = list[i].name;
          list[i].data = {
            list:[],
            total:0,
            total_page:0
          };
          list[i].first = false;
          list[i].page=1;
        }
        this.setState({
          tabs:[...this.state.tabs,...list]
        })
      }
    });
    getLessonMore({
      studio:this.props.match.params.id,
      category_id:this.state.tabs[0].id,
      pre_page:this.state.pre_page
    }).then(data=>{
      let obj = this.state.tabs;
      obj[0].data = data.data;
      obj[0].page++;
      obj[0].first = true;
      this.setState({
        tabs:obj,
        refreshing:false,
        down:false
      })
    })
  }
  render() {
    let {
      tabs,
      active
    } = this.state
    return (
      <div ref={node=>this.node=node}>
          <Tabs 
            tabs={tabs} 
            prerenderingSiblingsNumber={1} 
            renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}
            onChange={(tab, index) => {
              this.setState({
                refreshing:false,
                active:index
              })
              setTimeout(()=>{
                if(this.state.tabs[index].first==true){
                  this.setState({ down:false });
                }else{
                  this.setState({ refreshing: true,down:true });
                  getLessonMore({
                    studio:this.props.match.params.id,
                    category_id:this.state.tabs[index].id,
                    pre_page:this.state.pre_page
                  }).then(data=>{
                    if(data.status.code==0){
                      let obj = this.state.tabs;
                      obj[index].data = data.data;
                      obj[index].page++;
                      obj[index].first = true;
                      this.setState({
                        tabs:obj,
                        refreshing:false,
                        down:false
                      })
                    }else{
                      Toast.info('获取'+tab.name+'失败', 2)
                    }
                  })
                }
              },0)
            }}
          >
            {
              this.state.tabs.map((val,key) => {
                return (
                  <div className='bg_fff' key={key}>
                    <WhiteSpace size='md' className='bg_body'/>
                    <WingBlank size='lg' className='class_room_list clearfix'>
                      <WhiteSpace size='md'/>
                        <PullToRefresh
                          ref={el => this.ptr = el}
                          style={{
                            height: this.state.height,
                            overflow: 'auto',
                          }}
                          direction={this.state.down ? 'down' : 'up'}
                          indicator={{ activate: '松开立即加载', deactivate: '下拉加载更多', finish: '加载完成' }}
                          refreshing={this.state.refreshing}
                          onRefresh={() => {
                            if(tabs[active].page>tabs[active].data.total_page){
                              Toast.info('已经到底了', 2);
                              return false;
                            }
                            this.setState({ refreshing: true});
                              getLessonMore({
                                studio:this.props.match.params.id,
                                category_id:this.state.tabs[active].id,
                                pre_page:this.state.pre_page,
                                page:tabs[active].page
                              }).then(data=>{
                                if(data.status.code==0){
                                  let obj = this.state.tabs;
                                  data.data.list = [...obj[active].data.list,...data.data.list];
                                  obj[active].data = data.data;
                                  obj[active].page++;
                                  this.setState({
                                    tabs:obj,
                                    refreshing:false,
                                  })
                                }else{
                                  Toast.info('获取'+tabs[active].name+'失败', 2)
                                }
                              })
                          }}
                        >
                          <div className={'clearfix'}>
                            {
                              val.data.list.map((val1,key1)=>{
                                return (
                                  <VideoPlayBox
                                    info={val1}
                                    key={key1}
                                    url=''
                                  />
                                )
                              })
                            }
                          </div>
                      </PullToRefresh>
                    </WingBlank>
                  </div>
                )
              })
            }
          </Tabs>
      </div>
    )
  }
}
