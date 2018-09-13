import React, { Component } from 'react'
import Information from './../../component/Information'
import ReactDOM from 'react-dom'
import {withRouter} from 'react-router-dom'
import {PullToRefresh,WhiteSpace,Tabs,Toast} from 'antd-mobile'
import {getStudioObj} from '../../api/index'
import './style/index.css'
export default withRouter(class InformationList extends Component {
  constructor(props){
      super(props);
      this.state={
        refreshing:false,
        pre_page:15,
        i:{
            title:'资讯',
            data:{
              list:[],
              total:0,
              total_page:0
            },
            page:1,
            first:false
          },
        t:{
            title:'通告',
            data:{
              list:[],
              total:0,
              total_page:0
            },
            page:1,
            first:false
          },
        c:{
            title:'成果展示',
            data:{
              list:[],
              total:0,
              total_page:0
            },
            page:1,
            first:false
          },
        height: document.documentElement.clientHeight,
        direction:'up',
        typeList:['i','t','c'],
        allTypeList:['information','notice','propaganda'],
        active:0
      }
  }
  componentWillMount() {
    Toast.loading('努力加载中', 5, ()=>{
      Toast.info('请求超时', 2)
    }, true)
    getStudioObj({
      studio:this.props.match.params.id,
      category_name:'资讯',
      pre_page:this.state.pre_page
    }).then(data=>{
      Toast.hide();
      if(data.status.code==0){
        data.data.list.forEach(e=>{
          e.type='information'
        })
        let obj = Object.assign({},this.state.i,{data:data.data,page:this.state.i.page+1,first:true});
        this.setState({
          i:obj
        })
      }else{
        Toast.info('获取资讯列表失败', 2)
      }
    })
  }
  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(() => this.setState({
      height: hei,
    }), 0);
  }
  render() {
    let {i,t,c,direction,allTypeList,typeList,active} = this.state
    let aEle = this.state[this.state.typeList[active]]
    var tabs = [i,t,c];
    console.log(tabs)
    return (
      <div className='itc-page'>
        <Tabs tabs={tabs}
          initialPage={0}
          onChange={(tab, index) => {
            this.setState({
              refreshing:false,
              active:index
            })
            setTimeout(()=>{
              if(this.state[this.state.typeList[index]].first==true){
                this.setState({ direction:'up' });
              }else{
                this.setState({ refreshing: true,direction:'down' });
                getStudioObj({
                  studio:this.props.match.params.id,
                  category_name:this.state[this.state.typeList[index]].title,
                  pre_page:this.state.pre_page
                }).then(data=>{
                  if(data.status.code==0){
                    data.data.list.forEach(e=>{
                      e.type=allTypeList[index]
                    })
                    let obj = Object.assign({},this.state[this.state.typeList[index]],{data:data.data,page:this.state[this.state.typeList[index]].page+1,first:true});
                    this.setState({
                      [typeList[index]]:obj,
                      refreshing:false,
                      direction:'up'
                    })
                  }else{
                    Toast.info('获取资讯列表失败', 2)
                  }
                })
              }
            },0)
          }}
        >
          {
            tabs.map((e,i)=>{
              return (
                <div key={i} className='list-box-i'>
                  <PullToRefresh
                    direction={direction}
                    refreshing={this.state.refreshing}
                    indicator={{ activate: '松开立即加载', deactivate: '下拉加载更多', finish: '加载完成' }}
                    style={{
                      height: this.state.height,
                      overflow: 'auto',
                    }}
                    ref={el => this.ptr = el}
                    onRefresh={() => {
                      if(aEle.page>aEle.data.total_page){
                        Toast.info('已经到底了', 2 ,()=>{},false)
                        return false;
                      }
                      this.setState({ refreshing: true,direction:'up' });
                      getStudioObj({
                        studio:this.props.match.params.id,
                        category_name:this.state[this.state.typeList[active]].title,
                        pre_page:this.state.pre_page,
                        page:this.state[this.state.typeList[active]].page
                      }).then(data=>{
                        if(data.status.code==0){
                          data.data.list.forEach(e=>{
                            e.type=allTypeList[active]
                          })
                          data.data.list = [...this.state[this.state.typeList[active]].data.list,...data.data.list];
                          let obj = Object.assign({},this.state[this.state.typeList[active]],{data:data.data,page:this.state[this.state.typeList[active]].page+1,first:true});
                          this.setState({
                            [typeList[active]]:obj,
                            refreshing:false,
                          })
                        }else{
                          Toast.info('获取资讯列表失败', 2)
                        }
                      })
                    }}
                  >
                    {
                        e.data.list.map((val,key)=>{
                            return (
                                <Information type='information' info={val} person={val.username} time={val.utime.y+'-'+val.utime.m+'-'+val.utime.d} key={key}/>
                            )
                        })
                    }
                    <WhiteSpace size='lg'/>
                  </PullToRefresh>
                </div>
              )
            })
          }
        </Tabs>
        
      </div>
      
    )
  }
})
