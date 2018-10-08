import React, { Component } from 'react'
import {Flex,PullToRefresh,WhiteSpace,Toast} from 'antd-mobile'
import './style/index.css'
import './svg/iconfont'
import {getStuidoMembers} from '../../api/index'
export default class MemberList extends Component {
  constructor(props){
      super(props);
      this.state = {
          mineInfo:{},
          roleType:['全部','管理员','学科带头人','普通成员','专家','助教'],
          roleTypeActive:0,
          medalList:['#icon-jinpai','#icon-yinpai','#icon-tongpai'],
          refreshing:false,
          member:{
              total_page:0,
              total:0,
              list:[]
          },
          page:1,
          pre_page:1000
      }
      this.roleTypeHandleClick = this.roleTypeHandleClick.bind(this);
  }
  roleTypeHandleClick(val){
      this.setState({
        roleTypeActive:val
      })
  }
  componentDidMount(){
    Toast.loading('努力加载中', 5, ()=>{
        Toast.hide();
        Toast.info('获取超时', 1);
    }, true)
    getStuidoMembers({
        studio_id:this.props.match.params.id,
        pre_page:this.state.pre_page,
    }).then(data=>{
        Toast.hide();
        if(data.status.code==0){
            this.setState({
                member:data.data,
                page:2
            })
        }else{
            Toast.info('成员列表获取失败', 1);
        }
    }).catch(error=>{
        console.log(error)
    });
  }
  
  render() {
    let {src} = this.state.mineInfo;
    let {roleTypeActive,medalList} = this.state;
    let memberListFilter = this.state.member.list.filter(e=>{
        if(this.state.roleTypeActive==0){
            return true
        }else{
            return e.duty_code==this.state.roleTypeActive
        }
    })
    return (
      <div className='member_list_page'>
        {/* <div className='mine_rank clearfix'>
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
        </div> */}
        <div className='student_num'>
            共<span>{memberListFilter.length}</span>位学员
        </div>
        <Flex className='role_type' justify='around'>
            {
                this.state.roleType.map((val,key)=>(
                    <div 
                        className={roleTypeActive==key?'active':''} 
                        key={key}
                        onClick = {()=>{
                            this.roleTypeHandleClick(key)
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
                    <div className='school'>单位</div>
                    <div className='integral'>积分</div>
                </div>
                <PullToRefresh
                    className='list_box'
                    direction='up'
                    refreshing={this.state.refreshing}
                    indicator={{ activate: '松开立即加载', deactivate: '上拉加载更多', finish: '加载完成' }}
                    onRefresh={()=>{
                        if(this.state.page<=this.state.member.total_page){
                            this.setState({
                                refreshing:true
                            })
                            getStuidoMembers({
                                studio_id:this.props.match.params.id,
                                pre_page:this.state.pre_page,
                                page:this.state.page
                            }).then(data=>{
                                Toast.hide();
                                if(data.status.code==0){
                                    this.setState({
                                        member:data.data,
                                        page:this.state.page+1
                                    })
                                }else{
                                    Toast.info('成员列表获取失败', 1);
                                }
                            }).catch(error=>{
                                console.log(error)
                            })
                        }else{
                            Toast.info('暂无更多', 2, ()=>{}, true)
                        }
                    }}
                >
                    {
                        memberListFilter.map((val,key)=>{
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
                                        <img src={val.mediumAvatar || require('../../common/assets/img/person_none.png')} alt=''/>
                                    </div>
                                    <div className='name'>{val.nickname}</div>
                                    <div className='school'>{val.company||'无'}</div>
                                    <div className='integral'>{val.integral}</div>
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
