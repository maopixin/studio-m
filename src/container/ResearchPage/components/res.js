import React, { Component } from 'react';
import {Toast,Modal} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
import {uploadPhoto} from '../../../api/index'
import store from '../../../mobx/index'
import { observer } from 'mobx-react';

@observer
export default withRouter(class res extends Component {
    constructor(props){
        super(props);
        this.state = {
            upLoading:false,
            w:0,
            fileInfo:{},
            fileList:[]
        }
        this.upData = this.upData.bind(this);
        this.setWidth = this.setWidth.bind(this);
    }
    upData(ev){
        // Toast.loading(content, duration, onClose, mask)
        
        if(!this.state.upLoading){
            this.setState({
                upLoading:true
            });
            var data = new FormData();
            data.append('file', ev.currentTarget.files[0]);
            ev.currentTarget.value = '';
            ev.currentTarget.outerHTML = ev.currentTarget.outerHTML;
            this.setState({
                fileInfo:data.get('file')
            })
            uploadPhoto({
                id:this.props.match.params.id,
                id2:this.props.info.id,
                data:data
            },this.setWidth,(data)=>{
                if(data.status.code==10105){
                    Modal.alert('未登录', '此操作需要登录才能继续', [
                        { text: '取消'},
                        { text: '登录', onPress: () =>{
                            window.location.href = 'http://account.dljy.com/user/login/login?goto='+window.location.href;
                        }},
                    ]);
                }
                if(data.status.code==0){
                    Toast.info('上传成功', 2);
                    let obj = {filename:this.state.fileInfo.name,id:data.data.id}
                    this.setState({
                        fileList:[...this.state.fileList,obj],
                        upLoading:false,
                    })
                }else{
                    this.setState({
                        upLoading:false,
                    });
                    Toast.fail('文件上传失败', 2)
                }
            })
        }else{
            Toast.info('文件上传中', 2)
        }
    }
    getLogin(){
        if(!store.userInfo.get_login){
            Modal.alert('未登录', '此操作需要登录才能继续', [
                { text: '取消'},
                { text: '登录', onPress: () =>{
                    window.location.href = 'http://account.dljy.com/user/login/login?goto='+window.location.href;
                }},
            ]);
            return false
        }
    }
    setWidth(res){
        let loaded = res.loaded,
        total = res.total;
        console.log((loaded/total) * 100)
        this.setState({
            w:(loaded/total) * 100
        })
    }
    render(){
        let {info} = this.props;
        let {w,upLoading,fileInfo,fileList} = this.state
        let list = [...info.detail.user_resources.data,...fileList]
        return (
            <div className='res-list'>
                <h4>
                    <span>资源列表</span>
                    <em>
                        +上传文件
                        <input type="file" name="" id="" onChange={this.upData} onClick={this.getLogin}/>
                    </em>
                </h4>
                <div className='file-up-info' style={{display:upLoading?'block':'none'}}>
                    {fileInfo.name}
                    <div className='all-w'>
                        <div className="now-w" style={{width:w+'%'}}></div>
                    </div>
                </div>
                <ul>
                    {
                        info.detail.user_resources.data.map(e=>{
                            return (
                                <li className='res-item' key={e.id}>
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
})