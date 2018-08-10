import React, { Component } from 'react'
import {Flex,PullToRefresh,WhiteSpace} from 'antd-mobile'
import './style/index.css'
import './svg/iconfont'
import {getUserInfo,followPerson} from '../../api/index'
export default class MemberList extends Component {
  constructor(props){
      super(props);
      this.state = {
          mineInfo:{},
          roleType:['全部','创建者','学科带头人','普通成员','专家','助教'],
          roleTypeActive:'全部',
          medalList:['#icon-jinpai','#icon-yinpai','#icon-tongpai'],
          refreshing:false
      }
      this.roleTypeHandleClick = this.roleTypeHandleClick.bind(this);
  }
  roleTypeHandleClick(val){
      this.setState({
        roleTypeActive:val
      })
  }
  componentDidMount(){
    followPerson({follow_user_id:5}).then(data=>{
        console.log(data)
    })
  }
  
  render() {
    let {src} = this.state.mineInfo;
    let {roleTypeActive,medalList} = this.state;
    return (
      <div className='member_list_page'>
        <div className='mine_rank clearfix'>
            <div className='fl'>
                <img src={src||require('../../common/assets/img/person_none.png')} alt=''/>
                <div className='mine_info'>
                    <div className='name'>张金良</div>
                    <div className='integral'>积分：812231313</div>
                </div>
            </div>
            <div className='fr'>
                <div className='rank_label fl'>我的排名</div>
                <div className='rank_num fl'>48</div>
            </div>
        </div>
        <div className='student_num'>
            共<span>0</span>位学员
        </div>
        <Flex className='role_type' justify='around'>
            {
                this.state.roleType.map((val,key)=>(
                    <div 
                        className={roleTypeActive==val?'active':''} 
                        key={key}
                        onClick = {()=>{
                            this.roleTypeHandleClick(val)
                        }}
                    >
                        {val}
                    </div>
                ))
            }
        </Flex>
        <div>
            <div className='rank_list_box'>
                <div className='clearfix li_item'>
                    <div className='rank_num'>名次</div>
                    <div className='name'>姓名</div>
                    <div className='school'>学校</div>
                    <div className='integral'>积分</div>
                </div>
                <PullToRefresh
                    className='list_box'
                    direction='up'
                    refreshing={this.state.refreshing}
                    indicator={{ activate: '松开立即加载', deactivate: '下拉加载更多', finish: '加载完成' }}
                    onRefresh={()=>{
                        this.setState({
                            refreshing:true
                        })
                        setTimeout(()=>{
                            this.setState({
                                refreshing:false
                            })
                        },2000)
                    }}
                >
                    {
                        [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}].map((val,key)=>{
                            let rankNum = key+1;
                            if(key<3){
                                rankNum = (
                                    <svg className="icon" aria-hidden="true">
                                        <use xlinkHref={medalList[key]}></use>
                                    </svg>
                                )
                            }
                            return (
                                <div className='clearfix li_item' key={key}>
                                    <div className='rank_num'>
                                        <span>
                                            {rankNum}
                                        </span>
                                        <img src={require('../../common/assets/img/person_none.png')} alt=''/>
                                    </div>
                                    <div className='name'>张金良</div>
                                    <div className='school'>教育学院</div>
                                    <div className='integral'>12313123</div>
                                </div>
                            )
                        })
                    }
                    <WhiteSpace/>
                 </PullToRefresh>
            </div>
        </div>
      </div>
    )
  }
}
