import React, { Component } from 'react';
export default class pic extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <ul className='pic-list'>
                <li style={{backgroundImage:'url("http://static.dljy.com/institute//20180907202628_5b926e749a3f3.png")'}}>
                </li>
                <li style={{backgroundImage:'url("http://static.dljy.com/institute//20180907202628_5b926e749a3f3.png")'}}>
                </li>
            </ul>
        )
    }
}