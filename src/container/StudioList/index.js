import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {SearchBar,Flex,Icon,PullToRefresh,Toast,Modal} from 'antd-mobile'
import {getStudioIndex,getInstituteDetail} from '../../api'
import './style/index.css'

export default class StudioList extends Component {
  constructor(props){
      super(props);
      this.state={
        page:1,
        limit:8,
        total:8,
        height: document.documentElement.clientHeight,
        rankType:[
          {
            text:"默认",
            sortText:""
          },
          {
            text:"访问量升序",
            sortText:"pv"
          },
          {
            text:"访问量降序",
            sortText:"-pv"
          },
          {
            text:"成员数升序",
            sortText:"member_cnt"
          },
          {
            text:"成员数降序",
            sortText:"-member_cnt"
          },
          {
            text:"开通时间升序",
            sortText:"ctime"
          },
          {
            text:"开通时间降序",
            sortText:"-ctime"
          },
        ],
        rankTypeChecked:0,
        refreshing:false,
        value:"",
        showType:false,
        list:[],
        institute:""
      }
      this.rankOnclickHandle = this.rankOnclickHandle.bind(this);
  }

  onChange= (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  handleClick = () => {
    this.manualFocusInst.focus();
  }
  rankOnclickHandle(){
    this.setState({
      showType:!this.state.showType
    })
  }
  rankItemClickHandle(i){
    this.setState({
      rankTypeChecked:i,
      showType:!this.state.showType,
      page:1,
      list:[]
    },()=>{
      this.pageChange();
    })
  }
  componentDidMount() {
    
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(() => this.setState({
      height: hei
    }), 0);
    this.pageChange();
    this.getInstituteInfo();
  }
  getInstituteInfo(){
    if(this.props.institute){
      Toast.loading("努力加载中", 0 )
      getInstituteDetail({
        id:this.props.institute
      }).then((res)=>{
        Toast.hide();
        if(res.status.code==0){
          this.setState({
            institute:res.data.name
          })
        }else{
          Modal.alert('错误', "研究院信息获取失败，确定要重新获取吗？", [
            { text: '取消', onPress: () => {} },
            { text: '确定', onPress: () => {this.getInstituteInfo()} },
          ])
        }
      })
    }
  }
  pageChange(){
    if(this.state.total/this.state.limit<=this.state.page-1){
      Toast.info('已经到底了',0.5);
      return false;
    }
    this.setState({ refreshing: true });
    let query = this.createSearchData();
    console.log(query)
    getStudioIndex(query).then((res)=>{
      if(res.status.code==0){
        this.setState({
          list:[...this.state.list,...res.data.list],
          refreshing: false,
          page:this.state.page+1,
          total:res.data.total
        })
      }
    })
  }
  createSearchData(){
    return {
      _sort:this.state.rankType[this.state.rankTypeChecked].sortText,
      p:this.state.page,
      k:this.state.value,
      limit:this.state.limit,
      institute_id:this.props.institute || "",
    }
  }
  render() {
    let { rankType ,rankTypeChecked ,showType } = this.state ;
    let { rankOnclickHandle ,rankItemClickHandle} = this;
    return (
      <div className='studio_list_page'>
        <SearchBar 
          placeholder="请输入工作室名称" 
          maxLength={12}
          value={this.state.value} 
          onClear={()=>{this.clear()}}
          onCancel={()=>{
            this.setState({
              value:"",
              page:1,
              list:[]
            },()=>{
              this.pageChange();
            })
          }}
          onChange={(val) => {this.onChange(val)}}
          onSubmit={()=>{this.setState({
            page:1,
            list:[]
          },()=>{
            this.pageChange();
          })}}
        />
        <Flex
          className='rank_type_list'
          justify="start"
          style={{backgroundColor:"#fff"}}
        >
          <Flex.Item
            onClick={()=>{rankOnclickHandle()}}
            className="sort"
          >
            <div style={{color:showType?"#1b9fe2":""}}>
              <span>{rankType[rankTypeChecked].text}</span>
              <Icon type={showType?"up":"down"} size='xxs'/>
            </div>
            <ul className="show-type-list" style={{display:showType?"":"none"}}>
              {
                rankType.map((e,i)=>{
                  return (
                    <li
                      key={i}
                      className={rankTypeChecked==i?"clearfix active":"clearfix"}
                      onClick={()=>{this.rankItemClickHandle(i)}}
                    >
                      <div className="fl">{e.text}</div>
                      <div className="fr"><Icon type="check" size='xxs'/></div>
                    </li>
                  )
                })
              }
            </ul>
          </Flex.Item>
          <Flex.Item style={{textAlign:'right',paddingRight:"15px",color:"#1b9fe2"}}>
            {this.state.institute}
          </Flex.Item>
        </Flex>
        <PullToRefresh
          direction='up'
          style={{
            height: this.state.height,
            overflow: 'auto',
            background: "repeating-linear-gradient(#fff, #f5f5f9 5%,#f5f5f9 100%)"
          }}
          refreshing={this.state.refreshing}
          ref={el => this.ptr = el}
          onRefresh={()=>{
            this.pageChange();
          }}
        >
          <ul 
            className="studio_list clearfix"
          >
            {
              this.state.list.map((e,i)=>{
                return (
                  <li
                    className="studio_item" 
                    key={e.id}
                    onClick={()=>{
                      this.props.history.push({pathname:'/institute/studio/'+e.id})
                    }}
                  >
                    <div className="img_box">
                      <img src={e.logo}/>
                    </div>
                    <div className="studio_info">
                      <h4 className="title">{e.name}</h4>
                      <div className='subject'>学科：{e.subject_major||"暂无"}</div>
                      <div className="clearfix">
                        <span className="fl">成员：{e.member_cnt}</span>
                        <span className="fr">访问量：{e.pv}</span>
                      </div>
                    </div>
                  </li>
                )
              })  
            }
          </ul>
        </PullToRefresh>
      </div>
    )
  }
}
