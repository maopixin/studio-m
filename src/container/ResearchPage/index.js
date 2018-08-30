import React, { Component } from 'react'
import Title from '../../component/Title'
import './style/index.css'
export default class ResearchPage extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
        <div className='research_page'>
            <div className='r_page_info'>
                <div className='pic_box'>
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=231878074,3728399985&fm=27&gp=0.jpg" alt=""/>
                    <span className='on_line'></span>
                </div>
                <h3 className='r-title'>
                    借助信息技术提升学生的只管想象水平的研修活动xxxxxxxxxxxx
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
                                张金良
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
                                张金良工作室成员
                                张金良工作室成员
                                张金良工作室成员
                                张金良工作室成员
                                张金良工作室成员
                                张金良工作室成员
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
                                1人
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
                                2018-06-21 至 2018-06-22
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='r-notice'>
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
            </div>
        </div>
        )
    }
}
