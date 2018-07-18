import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
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
            icon:''
          },
          {
            title:'教学资源',
            icon:''
          },
          {
            title:'名师课堂',
            icon:'',
            url:`/institute/studio/${this.props.match.params.id}/classroom`
          },
          {
            title:'留言板',
            icon:''
          },
          {
            title:'活动案例',
            icon:''
          },
          {
            title:'教师文章',
            icon:''
          },
          {
            title:'最新动态',
            icon:''
          },
          {
            title:'成员排名',
            icon:''
          },
        ]
      }
    }
  }
  componentDidMount() {
    if (this.node) {
      this.node.scrollTop = scrollTop
    }
  }

  componentWillUnmount() {
    if (this.node) {
      scrollTop = this.node.scrollTop
    }
  }
  render() {
    let {src,gridData} = this.state.data;
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
              <div className='num'>2222</div>
              <div className='num_label'>昨日新增</div>
            </Flex.Item>
            <Flex.Item>
              <div className='num'>2222</div>
              <div className='num_label'>年活跃度</div>
            </Flex.Item>
            <Flex.Item>
              <div className='num'>2222</div>
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
            [{},{},{}].map((val,key)=>{
              return (
                <Information type='notice' time='2018-12-20' key={key}/>
              )
            })
          }
        </div>
        <WhiteSpace/>
        <Title title='教学资源' showMore={true} to='/131'/>
        <div className='bg_fff'>
          {
            [{},{},{},{}].map((val,key)=>{
              return (
                <Resource itemData={{type:'高考资源'}} key={key}/>
              )
            })
          }
        </div>
        <WhiteSpace/>
        <Title title='教研活动' showMore={true} to='/131'/>
        <div className='bg_fff'>
          {
            [{},{},{},{}].map((val,key)=>{
              return (
                <Resource itemData={{type:'活动类型',state:'before'}} key={key}/>
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
              [{},{}].map((val,key)=>{
                return (
                  <LessonCard dataItem={{}} key={key}/>
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
                <span>1160</span>人
              </div>
            </div>
            <div className='statistics'>
              <div className='statistics_title'>文章数</div>
              <div className='num_box'>
                <span>1160</span>人
              </div>
            </div>
            <div className='statistics'>
              <div className='statistics_title'>资源数</div>
              <div className='num_box'>
                <span>1160</span>人
              </div>
            </div>
            <div className='statistics'>
              <div className='statistics_title'>名师课堂数</div>
              <div className='num_box'>
                <span>1160</span>人
              </div>
            </div>
            <div className='statistics'>
              <div className='statistics_title'>教研活动数</div>
              <div className='num_box'>
                <span>1160</span>人
              </div>
            </div>
            <div className='statistics'>
              <div className='statistics_title'>话题数</div>
              <div className='num_box'>
                <span>1160</span>人
              </div>
            </div>
            <div className='statistics'>
              <div className='statistics_title'>总活跃度</div>
              <div className='num_box'>
                <span>1160</span>人
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
              [{},{},{},{}].map((val,key)=>{
                return (
                  <div className='visitor_item' key={key}>
                    <div className='pic_box'>
                      <img src={val.src||require('../../common/assets/img/none.png')} alt=''/>
                    </div>
                    <div className='person'>胡剑锋</div>
                    <div className='time'>刚刚</div>
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
                200000
              </div>
            </div>
            <div className='visite_num_item'>
              <div className='visite_type'>
                访问总量
              </div>
              <div className='visite_num'>
                200000
              </div>
            </div>
          </Flex>
          <WhiteSpace size='lg'/>
        </div>
      </div>
    )
  }
})
