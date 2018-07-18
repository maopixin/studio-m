import React, { Component } from 'react'
import {Picker,WingBlank,WhiteSpace,Flex,Icon,PullToRefresh} from 'antd-mobile'
import StudioItem from './components/StudioItem/index'
import './style/index.css'

const CustomChildren = props => (
  <div 
    className={'check_box ' + props.className}
    onClick={props.onClick}
  >
    {props.extra}
  </div>
)

export default class StudioList extends Component {
  constructor(props){
      super(props);
      this.state={
        area:[
          {
            label: '北京',
            value:'北京',
          },
          {
            label: '上海',
            value:'上海',
          }
        ],
        study:[
          {
            label:'一年级',
            value:'一年级'
          },
          {
            label:'二年级',
            value:'二年级'
          },
        ],
        pickerAreaValue:'',
        pickerStudyValue:'',
        rankType:[
          '默认',
          '访问量',
          '成员数',
          '开通时间'
        ],
        rankTypeChecked:'默认',
        refreshing:false
      }
      this.rankOnclickHandle = this.rankOnclickHandle.bind(this);
  }
  rankOnclickHandle(val){
    this.setState({
      rankTypeChecked:val
    })
  }
  render() {
    let { area ,study ,rankType ,rankTypeChecked } = this.state ;
    let { rankOnclickHandle } = this;
    return (
      <div className='studio_list_page'>
        <WingBlank>
            <Picker
              title="选择区域"
              extra="请选择区域"
              data={area}
              cols={1}
              value={this.state.pickerAreaValue}
              onChange={v => this.setState({ pickerAreaValue: v })}
              onOk={v => this.setState({ pickerAreaValue: v })}
            >
              <CustomChildren className='box1'>Customized children</CustomChildren>
            </Picker>
            <Picker
              title="选择学段"
              extra="请选择学段"
              data={study}
              cols={1}
              value={this.state.pickerStudyValue}
              onChange={v => this.setState({ pickerStudyValue: v })}
              onOk={v => this.setState({ pickerStudyValue: v })}
            >
              <CustomChildren className='box2'>Customized children</CustomChildren>
            </Picker>
        </WingBlank>
        <Flex className='rank_type_list'>
          {
            rankType.map((val,key)=>(
              <Flex.Item 
                key={key} 
                onClick={()=>{rankOnclickHandle(val)}}
                className={rankTypeChecked===val?"active":''}
              >
                <span>{val}</span>
                <Icon type="up" size='xxs'/>
              </Flex.Item>
            ))
          }
        </Flex>
        <PullToRefresh
          direction='up'
          refreshing={this.state.refreshing}
          onRefresh={()=>{
            this.setState({ refreshing: true });
            //获取完数据 改为false；
          }}
        >
          {
            [{},{}].map((val,key)=>(
              <StudioItem key={key}/>
            ))
          }
        </PullToRefresh>
      </div>
    )
  }
}
