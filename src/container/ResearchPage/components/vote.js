import React, { Component } from 'react';
import {Button} from 'antd-mobile'
export default class vote extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="vote-box">
                <div className="clearfix">
                    <div className="fl yes">
                        80% (1060票)
                    </div>
                    <div className="fr no">
                        80% (1060票)
                    </div>
                </div>
                <div className="nums">
                    <div className="yes-num" style={{width:'50%'}}></div>
                </div>
                <div className='vote-btns'>
                    <Button type="primary" inline className='fl'>已支持确实如此</Button>
                    <Button type="primary" inline className='fr'>不太赞同</Button>
                </div>
            </div>
        )
    }
}