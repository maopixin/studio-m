import React, { Component } from 'react'
import {Flex,WhiteSpace,Grid,WingBlank} from 'antd-mobile'
import Title from '../../component/Title'
import Information from '../../component/Information'
import Resource from '../../component/Resource'
import './style/index.css'

export default class StudioHome extends Component {
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
            icon:''
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
  render() {
    let {src,gridData} = this.state.data;
    const data = gridData.map((val, i) => ({
      icon: require('./img/grid'+(i+1)+'.png'),
      text: val.title,
    }));
    return (
      <div>
        <div className='studio_bg'></div>
        <div className='studio_info bg_fff'>
          <div className='studio_info_pic'>
            <img src={src||require('../../common/assets/img/none.png')}/>
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
        <Grid data={data} hasLine={false} />
        <WhiteSpace/>
        <Title title='工作室资讯' showMore={true} to='/131'/>
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
      </div>
    )
  }
}
