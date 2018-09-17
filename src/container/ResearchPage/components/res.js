import React, { Component } from 'react';
import {Button} from 'antd-mobile'
export default class res extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='res-list'>
                <h4>
                    <span>资源列表</span>
                    <em>
                        +上传文件
                        <input type="file" name="" id=""/>
                    </em>
                </h4>
                <ul>
                    <li className='res-item'>
                        活动文档：
                        <span className="title">大会简介</span>
                        <span className="fr down"></span>
                    </li>
                    <li className='res-item'>
                        活动文档：
                        <span className="title">大会简介</span>
                        <span className="fr down"></span>
                    </li>
                </ul>
            </div>
        )
    }
}