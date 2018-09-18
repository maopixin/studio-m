import React, { Component } from 'react';
import {TextareaItem,Button,Toast,Modal} from 'antd-mobile'
import {activitiyUserAppraisal} from '../../../api/index'
import store from '../../../mobx/index'
import { observer } from 'mobx-react';

@observer
export default class score extends Component {
    constructor(props){
        super(props);
        this.state = {
            score:['极差','不满意','一般','满意','很满意'],
            rateText:['','worst','low','ordinary','better','top'],
            index:0,
            textarea:''
        }
        this.up = this.up.bind(this);
    }
    up(){
        if(!store.userInfo.get_login){
            Modal.alert('未登录', '此操作需要登录才能继续', [
                { text: '取消'},
                { text: '登录', onPress: () =>{
                    window.location.href = 'http://account.dljy.com/user/login/login?goto='+window.location.href;
                }},
            ]);
            return false
        }
        if(this.state.index<=0){
            Toast.info('请先打分再进行提交', 2);
            return false;
        };
        if(this.state.textarea.trim()==''){
            Toast.info('请输入内容再进行提交', 2);
            return false;
        }
        Toast.offline('努力提交中', 5)
        activitiyUserAppraisal({
            activity_appraisal_id:this.props.info.detail.id,
            description:this.state.textarea.trim(),
            appraisal:this.state.rateText[this.state.index]
        }).then(data=>{
            if(data.status.code==0){
                Toast.hide();
                Toast.success('评价成功', 2)
            }
        })
    }
    render(){
        let {score,index,textarea}  = this.state
        let {info} = this.props
        return (
            <div className='score-box'>
                <div>
                    <div className="show-text">
                        {
                            score[index-1]
                        }
                    </div>
                    <div className='star-list'>
                    {
                        score.map((e,i)=>{
                            return (
                                <span 
                                    className={i+1<=index?'star':''}
                                    key={i}
                                    onClick={()=>{
                                        this.setState({
                                            index:i+1
                                        })
                                    }}
                                ></span>
                            )
                        })
                    }
                    </div>
                </div>
                <div className='textarea-box'>
                    <TextareaItem
                        ref={el => this.autoFocusInst = el}
                        placeholder="感想"
                        autoHeight
                        onClick={()=>{
                            this.autoFocusInst.focus();
                        }}
                        value={textarea}
                        onInput={(event)=>{
                            this.setState({textarea: event.target.value});
                        }}
                        count={280}
                    />
                </div>
                <div>
                    <Button 
                        type="primary"
                        onClick={this.up}
                    >提交</Button>
                </div>
            </div>
        )
    }
}