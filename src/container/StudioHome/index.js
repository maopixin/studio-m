import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {getStudioData, getStudioDetail, getStudioLatest, getActivityList ,getStuidoMembers ,getStudioState} from '../../api/index';
import {Flex,WhiteSpace,Grid,WingBlank} from 'antd-mobile'
import Title from '../../component/Title'
import Information from '../../component/Information'
import Resource from '../../component/Resource'
import LessonCard from './components/LessonCard'
import './style/index.css'
let scrollTop = 0;
export default withRouter(class StudioHome extends Component {
  constructor(props){
    super(props);
    this.state={
      data:{
        src:'',
        gridData:[
          {
            title:'工作室简介', 
            icon:'',
            url:`/institute/studio/${this.props.match.params.id}/introduce`,
          },
          {
            title:'教学资源',
            icon:''
          },
          {
            title:'名师课堂',
            icon:'',
            url:`/institute/studio/${this.props.match.params.id}/classroom`,
          },
          {
            title:'留言板',
            icon:'',
            url:`/institute/studio/${this.props.match.params.id}/leavemsg`,
          },
          {
            title:'活动案例',
            icon:'',
            url:`/institute/studio/${this.props.match.params.id}/activitycase`,
          },
          {
            title:'教师文章',
            icon:'',
            url:`/institute/studio/${this.props.match.params.id}/t_article`,
          },
          {
            title:'最新动态',
            icon:'',
            url:`/institute/studio/${this.props.match.params.id}/news`,
          },
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
    }
  }
  componentDidMount() {
    this.getFirstScreen()
    if (this.node) {
      this.node.scrollTop = scrollTop
    }
  }
  getFirstScreen(){
    getStudioState({
      id:this.props.match.params.id
    }).then(data=>{
        console.log(data,'工作室状态');
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
        })
    }).catch(error=>{
      let obj = this.state.studioState;
      obj.l = true;
      obj.fail = true;
      this.setState({
        studioState:obj
      })
    });
    getStudioData({
      id:this.props.match.params.id,
      category_type_name:'资讯',
      pre_page:3,
    }).then(data=>{
      console.log(data,'资讯');
      let obj = this.state.information;
      obj.l = true;
      if(data.status.code==0){
          obj.list = data.data.list
      }else{
          obj.fail = true;
      };
      this.setState({
        information:obj
      });
    }).catch(error=>{
      let obj = this.state.information;
      obj.l = true;
      obj.fail = true;
      this.setState({
        information:obj
      });
    });
    getStudioData({
      id:this.props.match.params.id,
      category_type_name:'教学资源',
      pre_page:4,
    }).then(data=>{
      console.log(data,'教学资源');
      let obj = this.state.teachingResources;
      obj.l = true;
      if(data.status.code==0){
          obj.list = data.data.list
      }else{
          obj.fail = true;
      };
      this.setState({
        teachingResources:obj
      });
    }).catch(error=>{
      let obj = this.state.teachingResources;
      obj.l = true;
      obj.fail = true;
      this.setState({
        teachingResources:obj
      });
    });

    // 教研活动
    getActivityList({
        studio_id:this.props.match.params.id,
        pre_page:5
    }).then(data=>{
        console.log(data,'教研活动');
        let obj = this.state.activity;
        obj.l = true;
        if(data.status.code==0){
          obj.list = data.data.list
        }else{
          obj.fail = true;
        };
        this.setState({
          activity:obj
        });
    }).catch(error=>{
      let obj = this.state.activity;
      obj.fail = true;
      obj.l = true;
      this.setState({
        activity:obj
      });
    });
    // 名师课堂
    getStudioData({
      id:this.props.match.params.id,
      category_type_name:'名师课堂',
      pre_page:2,
      require_media:1
    }).then(data=>{
        console.log(data,'名师课堂');
        let obj = this.state.achievements;
        obj.l = true;
        if(data.status.code==0){
          obj.list = data.data.list
        }else{
          obj.fail = true;
        };
        this.setState({
          achievements:obj
        });
    }).catch(error=>{
      let obj = this.state.achievements;
      obj.l = true;
      obj.fail = true;
      this.setState({
        achievements:obj
      });
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
        <div className='studio_bg'></div>
        <div className='studio_info bg_fff'>
          <div className='studio_info_pic'>
            <img src={src||require('../../common/assets/img/none.png')} alt=''/>
          </div>
          <div className='studio_name'>张金良名师工作室</div>
          <div className='studio_subject'>高中数学</div>
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
        <Grid data={data} hasLine={false} onClick={(el,index)=>{
          this.props.history.push(gridData[index].url)
        }}/>
        <WhiteSpace/>
        <Title title='工作室资讯' showMore={true} to={`/institute/studio/${params.id}/information`}/>
        <div className='bg_fff'>
          {
            this.state.information.list.map((val,key)=>{
              return (
                <Information type='notice' info={val} time={val.utime.y+'-'+val.utime.m+'-'+val.utime.d} key={key}/>
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
        <Title title='名师课堂' showMore={true} to={`/institute/studio/${params.id}/classroom`}/>
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
        <Title title='最近访客' showMore={true} to='/131'/>
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
        </div>
      </div>
    )
  }
})
