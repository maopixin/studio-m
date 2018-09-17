import React, { Component } from 'react';
export default class vote extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let {info} = this.props
        return (
            <div className="video-box">
                {
                    info.detail.user_resources.data.map(e=>{
                        return (
                            <div className="video-item">
                                <div className="video-player">
                                
                                </div>
                                <div className="clearfix video-info">
                                    <div className="fl video-title">
                                        {e.filename}
                                    </div>
                                    <div className="fr down">
                                        <a href={'/index/file/download?activity_user_resource='+e.id}>下载</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}