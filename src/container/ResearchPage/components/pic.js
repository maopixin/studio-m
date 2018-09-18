import React, { Component } from 'react';
export default class pic extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let {info} = this.props
        return (
            <ul className='pic-list'>
                {
                    info.detail.user_resources.data.map(e=>{
                        return (
                            <li style={{backgroundImage:'url('+e.source_path+')'}}>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}