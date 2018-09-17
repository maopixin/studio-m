import React, { Component } from 'react';
export default class doc extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let {info} = this.props
        return (
            <div className='res-list'>
                <h4>
                    <span>文档列表</span>
                </h4>
                <ul>
                    {
                        info.detail.user_resources && info.detail.user_resources.data.map((e)=>{
                            return (
                                <li className='res-item'>
                                    活动文档：
                                    <span className="title">
                                        <a href={'/index/file/download?activity_user_resource='+e.id}>{e.filename}</a>
                                    </span>
                                    <span className="fr down">
                                        <a href={'/index/file/download?activity_user_resource='+e.id}></a>
                                    </span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}