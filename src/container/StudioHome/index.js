import React, { Component } from 'react'
import {withRouter,Link} from 'react-router-dom'
import { observer,inject } from 'mobx-react';
import store from '../../mobx/index'
import {getStudioData, getStudioDetail, getStudioLatest, getActivityList ,getStuidoMembers ,getStudioState ,getStudioAllInfo} from '../../api/index';
import {Flex,WhiteSpace,Grid,WingBlank,Toast} from 'antd-mobile'
import Title from '../../component/Title'
import Information from '../../component/Information'
import Resource from '../../component/Resource'
import LessonCard from './components/LessonCard'
import './style/index.css'
let scrollTop = 0;

@observer
export default withRouter(class StudioHome extends Component {
  constructor(props){
    super(props);
    this.state={
      data:{
        src:'',
        gridData:[
          // {
          //   title:'工作室简介', 
          //   icon:'',
          //   url:`/institute/studio/${this.props.match.params.id}/introduce`,
          // },
          {
            title:'教学资源',
            icon:'',
            url:`/institute/studio/${this.props.match.params.id}/t_resource`
          },
          {
            title:'名师课堂',
            icon:'',
            url:`/institute/studio/${this.props.match.params.id}/classroom/名师课堂`,
          },
          // {
          //   title:'留言板',
          //   icon:'',
          //   url:`/institute/studio/${this.props.match.params.id}/leavemsg`,
          // },
          // {
          //   title:'活动案例',
          //   icon:'',
          //   url:`/institute/studio/${this.props.match.params.id}/activitycase`,
          // },
          {
            title:'教师文章',
            icon:'',
            url:`/institute/studio/${this.props.match.params.id}/t_article`,
          },
          // {
          //   title:'最新动态',
          //   icon:'',
          //   url:`/institute/studio/${this.props.match.params.id}/news`,
          // },
          {
            title:'成员排名',
            icon:'',
            url:`/institute/studio/${this.props.match.params.id}/member`,
          },
        ],
      },
      studioState:{
        l:false,
        data:{
          visitors:[]
        },
        fail:false
      },
      information:{
        l:false,
        list:[],
        fail:false
      },
      teachingResources:{
        l:false,
        list:[],
        fail:false
      },
      activity:{
        l:false,
        list:[],
        fail:false
      },
      achievements:{
        l:false,
        list:[],
        fail:false
      },
      loading:false,
      sdtudInfo:{
        user:{

        }
      }
    }
  }
  componentDidMount() {
    this.getFirstScreen();
    this.firstLoading();
    if (this.node) {
      this.node.scrollTop = scrollTop
    }
  }




  getFirstScreen(){
    Toast.loading('努力加载中', 10, ()=>{
      
    })
    getStudioState({
      id:this.props.match.params.id
    }).then(data=>{
        
        let obj = this.state.studioState;
        obj.l = true;
        if(data.status.code==0){
          obj.data = data.data;
          obj.data.visitors = obj.data.visitors.slice(0,4);
        }else{
          obj.fail = true;
        }
        this.setState({
          studioState:obj
        },()=>{
          Toast.hide();
        })
    }).catch(error=>{
      let obj = this.state.studioState;
      obj.l = true;
      obj.fail = true;
      this.setState({
        studioState:obj
      })
    });
    
  }
firstLoading(){
  this.setState({
    loading:true
  })
  getStudioAllInfo({
      studio:this.props.match.params.id,
  }).then(res=>{
      console.log(res,'studio');
      let data = res.data;
      var arr = [...data.info.list.slice(0,1),...data.notice.list.slice(0,1),...data.achievements.list.slice(0,1)];
      arr[0].type = 'information';
      arr[1].type = 'notice';
      arr[2].type = 'propaganda';
      console.log(arr)
      this.setState({
        loading:false,
        information:{list:arr},
        teachingResources:{list:data.resource.list},
        activity:{list:data.activities.list},
        achievements:{list:data.schoolrooms.list},
        sdtudInfo:data.studio
      })
  }).catch(error=>{
    this.setState({
      loading:false
    })
    console.log(error);
  })
}
  componentWillUnmount() {
    if (this.node) {
      scrollTop = this.node.scrollTop
    }
  }
  render() {
    let {src,gridData} = this.state.data;
    let sDate = this.state.studioState.data
    const data = gridData.map((val, i) => ({
      icon: require('./img/grid'+(i+1)+'.png'),
      text: val.title,
    }));
    let {params} = this.props.match;
    return (
      <div ref={node=>this.node=node}>
        <div className='studio_bg' style={{backgroundImage:'url('+this.state.sdtudInfo.user.mediumAvatar+')'}}></div>
        <div className='studio_info bg_fff'>
          <div className='studio_info_pic'>
            <img src={this.state.sdtudInfo.user.mediumAvatar || require('../../common/assets/img/none.png')} alt=''/>
          </div>
          <div className='studio_name'>{this.state.sdtudInfo.subject_major}</div>
          <div className='studio_subject'>暂无学科</div>
          <Flex className='studio_data_num'>
            <Flex.Item>
              <div className='num'>{sDate.yesterday_added}</div>
              <div className='num_label'>昨日新增</div>
            </Flex.Item>
            <Flex.Item>
              <div className='num'>{sDate.year_active}</div>
              <div className='num_label'>年活跃度</div>
            </Flex.Item>
            <Flex.Item>
              <div className='num'>{sDate.rank}</div>
              <div className='num_label'>排名</div>
            </Flex.Item>
          </Flex>
        </div>
        <WhiteSpace/>
        <Grid data={data} hasLine={false} columnNum={4} onClick={(el,index)=>{
          this.props.history.push(gridData[index].url)
        }}/>
        <WhiteSpace/>
        <Title title='工作室资讯' showMore={true} to={`/institute/studio/${params.id}/information`}/>
        <div className='bg_fff'>
          {
            this.state.information.list.map((val,key)=>{
              return (
                <Information info={val} time={val.utime.y+'-'+val.utime.m+'-'+val.utime.d} key={key}/>
              )
            })
          }
        </div>
        <WhiteSpace/>
        <Title title='教学资源' showMore={true} to={`/institute/studio/${params.id}/t_resource`}/>
        <div className='bg_fff'>
          {
            this.state.teachingResources.list.map((val,key)=>{
              return (
                <Resource itemData={val} key={key}/>
              )
            })
          }
        </div>
        <WhiteSpace/>
        <Title title='教研活动' showMore={true} to={`/institute/studio/${params.id}/research`}/>
        <div className='bg_fff'>
          {
            this.state.activity.list.map((val,key)=>{
              return (
                <Resource itemData={val} key={key}/>
              )
            })
          }
        </div>
        <WhiteSpace/>
        <Title title='名师课堂' showMore={true} to={`/institute/studio/${params.id}/classroom/名师课堂`}/>
        <div className='bg_fff'>
          <WhiteSpace size='lg'/>
          <WingBlank className='clearfix'>
            {
              this.state.achievements.list.map((val)=>{
                return (
                  <LessonCard dataItem={val} key={val.id}/>
                )
              })
            }
          </WingBlank>
          <WhiteSpace size='lg'/>
        </div>
        <WhiteSpace/>
        <Title title='统计'/>
        <div className='bg_fff'>
          <WhiteSpace/>
          <WingBlank className='fl_box clearfix'>
            <div className='statistics'>
              <div className='statistics_title'>成员数</div>
              <div className='num_box'>
                <span>{sDate.member_count}</span>
              </div>
            </div>
            <div className='statistics'>
              <div className='statistics_title'>文章数</div>
              <div className='num_box'>
                <span>{sDate.article_count}</span>
              </div>
            </div>
            <div className='statistics'>
              <div className='statistics_title'>资源数</div>
              <div className='num_box'>
                <span>{sDate.resource_count}</span>
              </div>
            </div>
            <div className='statistics'>
              <div className='statistics_title'>名师课堂数</div>
              <div className='num_box'>
                <span>{sDate.course_count}</span>
              </div>
            </div>
            <div className='statistics'>
              <div className='statistics_title'>教研活动数</div>
              <div className='num_box'>
                <span>{sDate.activity_count}</span>
              </div>
            </div>
            <div className='statistics'>
              <div className='statistics_title'>话题数</div>
              <div className='num_box'>
                <span>{sDate.rank}</span>
              </div>
            </div>
            <div className='statistics'>
              <div className='statistics_title'>总活跃度</div>
              <div className='num_box'>
                <span>{sDate.activity}</span>
              </div>
            </div>
          </WingBlank>
          <WhiteSpace/>
        </div>
        <WhiteSpace/>
        {/* <Title title='最近访客' showMore={true} to='/131'/>
        <div className='bg_fff'>
          <WhiteSpace size='lg'/>
          <Flex justify='around'>
            {
             sDate.visitors.map((val,key)=>{
                return (
                  <div className='visitor_item' key={key}>
                    <div className='pic_box'>
                      <img src={val.src||require('../../common/assets/img/none.png')} alt=''/>
                    </div>
                    <div className='person'>{val.nickname}</div>
                    <div className='time'>{val.time_ago}</div>
                  </div>
                )
              })
            }
          </Flex>
          <WhiteSpace size='lg'/>
          <Flex justify='around'>
            <div className='visite_num_item'>
              <div className='visite_type'>
                今日访问量
              </div>
              <div className='visite_num'>
                {sDate.today_pv}
              </div>
            </div>
            <div className='visite_num_item'>
              <div className='visite_type'>
                访问总量
              </div>
              <div className='visite_num'>
                {sDate.total_pv}
              </div>
            </div>
          </Flex>
          <WhiteSpace size='lg'/>
        </div> */}
      </div>
    )
  }
})
