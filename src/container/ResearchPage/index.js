import React, { Component } from 'react'
import Title from '../../component/Title'
import {getActivityDetail} from '../../api/index'
import Text from './components/text'
import Pic from './components/pic'
import Doc from './components/doc'
import Res from './components/res'
import Score from './components/score'
import Vote from './components/vote'
import Video from './components/video'
import LeavingMsg from '../../component/LeavingMsg'
import './style/index.css'
export default class ResearchPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            activityInfo:{
                tache:[]
            },
            index:0
        }
    }
    componentDidMount() {
        getActivityDetail({
            studio_id:this.props.match.params.id,
            id:this.props.match.params.rid
        }).then(data=>{
            if(data.status.code==0){
                this.setState({
                    activityInfo:data.data
                })
            }
        })
    }
    getEle(){
        let {activityInfo,index} = this.state
        if(activityInfo.tache.length<=0){
            return false;
        }
        switch(activityInfo.tache[index].tache_type){
            case '1':
                return <Text info={activityInfo.tache[index]}/>
                break;
            case '2':
                return <Doc info={activityInfo.tache[index]}/>
                break;
            case '3':
                return <Res info={activityInfo.tache[index]}/>
                break;
            case '4':
                var type = activityInfo.tache[index].detail.file_type
                if(type=='image'){
                    return <Pic info={activityInfo.tache[index]}/>
                }else if(type=='video'){
                    return <Video info={activityInfo.tache[index]}/>
                }else if(type=='doc'){
                    return <Doc info={activityInfo.tache[index]}/>
                }else{
                    return <Doc info={activityInfo.tache[index]}/>
                }
                break;
            case '5':
                return <Score info={activityInfo.tache[index]}/>
                break;
            case '6':
                return '直播'
                break;
            case '7':
                return <Pic info={activityInfo.tache[index]}/>
                break;
            case '8':
                return <Vote info={activityInfo.tache[index]}/>
                break;
            default:
                return <Text info={activityInfo.tache[index]}/>
                break;
        }
    }
    render() {
        let {activityInfo,index} = this.state
        let Ele = this.getEle()
        return (
        <div className='research_page'>
            <div className='r_page_info'>
                <div className='pic_box'>
                    <img src={activityInfo.cover} alt=""/>
                    <span className='on_line'></span>
                </div>
                <h3 className='r-title'>
                    {activityInfo.title}
                </h3>
                <div className='r-info-list'>
                    <ul>
                        <li className='clearfix'>
                            <span className="label tj fl">
                                活动组织者
                            </span>
                            <span className="fl">
                                :
                            </span>
                            <span className="fr r-content">
                                {activityInfo.creator_name}
                            </span>
                        </li>
                        <li className='clearfix'>
                            <span className="label tj fl">
                                参与对象
                            </span>
                            <span className="fl">
                                :
                            </span>
                            <span className="fr r-content">
                                {activityInfo.participant_text}
                            </span>
                        </li>
                        <li className='clearfix'>
                            <span className="label tj fl">
                                参与人数
                            </span>
                            <span className="fl">
                                :
                            </span>
                            <span className="fr r-content">
                                {activityInfo.partner_cnt}人
                            </span>
                        </li>
                        <li className='clearfix'>
                            <span className="label tj fl">
                                起止时间
                            </span>
                            <span className="fl">
                                :
                            </span>
                            <span className="fr r-content blue">
                                {activityInfo.start_time} 至 {activityInfo.stop_time}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <div className='r-notice'>
                <Title title='活动公告'/>
                <div className='notice-list'>
                    <ul>
                        <li className='clearfix'>
                            <span className="label tj fl">
                                公告标题
                            </span>
                            <span className='fl'>:</span>
                            <span className="content blue fr">
                                下水道
                            </span>
                        </li>
                    </ul>
                </div>
            </div> */}
            <div className='r-notice'>
                <Title title='活动描述'/>
                <div className='p-content'>
                    {activityInfo.description}
                </div>
            </div>
             <div className='r-notice'>
                <Title title='活动流程'/>
                <div className='activity-step clearfix'>
                    <ul className='step-list fl'>
                        {
                            activityInfo.tache.map((e,i)=>{
                                return (
                                    <li 
                                        className={index==i?'step step-active':'step'}
                                        key={i}
                                        onClick={()=>{
                                            this.setState({
                                                index:i
                                            })
                                        }}
                                    >
                                        活动{e.tache_type_text}<i></i>
                                        {
                                            index==i?(<em></em>):''
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className='step-content fr'>
                        {
                            activityInfo.tache.length>0
                            ?
                            (
                                <div>
                                    <h4>
                                        <span>{activityInfo.tache[index].name}</span>
                                    </h4>
                                    <div className='text-s'>
                                        <span>截止时间：</span>
                                        {activityInfo.tache[index].end_time}
                                    </div>
                                    <div className='text-s mm'>
                                        <span>任务描述：</span>
                                        {activityInfo.tache[index].detail.description}
                                    </div>
                                </div>
                            )
                            :
                            ''
                        }
                        {
                            Ele
                        }
                    </div>
                </div>
            </div>
            <LeavingMsg key={1} itemData={{}}/>
        </div>
        )
    }
}
