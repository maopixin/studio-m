import axios from 'axios';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error.response.data) 
    });

// const domin = http://institute.dljy.com/studio/api/page_list
// 获取研究院下所有工作室列表：institute_id: int [必传]page: int [必传] pre_page: int
export function getStudioList(payload){
    return axios.get('/studio/api/page_list',{
        params:payload
    }).then(data=>{
        return data.data
    }).catch(error=>{
        console.log(error)
    })
};
// 获取研究院/工作室最新动态列表
// 研究院URL：http://institute.dljy.com/source/api/institute_latest
// 工作室URL：http://institute.dljy.com/source/api/studio_latest
export function getStudioLatest(payload){
    return axios.get('/source/api/studio_latest',{
        params:payload
    }).then(data=>{
        return data.data
    }).catch(error=>{
        console.log(error)
    })
}
export function getInstituteLatest(payload){
    return axios.get('/source/api/institute_latest',{
        params:payload
    }).then(data=>{
        return data.data
    }).catch(error=>{
        console.log(error)
    })
};
// 获取活动列表
// URL：http://institute.dljy.com/activity/api/page_list
// process_status 否 int 0:未开始;1:进行中;2:已结束
export function getActivityList(payload){
    return axios.get('/activity/api/page_list',{
        params:payload,
        
    }).then(data=>{
        return data.data
    }).catch(error=>{
        console.log(error)
    })
};
// 参加活动
export function joinActivity(payload){
    return axios.post('/api/activity_auth/join',payload).then(data=>{
        return data.data;
    }).catch(error=>{
        return error;
    })
}
// 获取工作室详情
export function getStudioDetail(payload){
    return axios.get('/studio/api/detail',{
        params:payload
    }).then(data=>{
        return data.data;
    }).catch(error=>{
        console.log(error)
    })
}
// 获取工作室下所有成员
// duty_code	否	int	头衔编码【1：管理员；2：学科带头人；3：普通成员；4：专家；5：助教
// _sort	否	string	排序 【积分正序：+integral；积分倒序 -integral
export function getStuidoMembers(payload){
    return axios.get('/api/member/studio',{
        params:payload
    }).then(data=>{
        return data.data;
    }).catch(error=>{
        console.log(error)
    })
}

// 关注用户:
// URL：http://institute.dljy.com/api/follow/confirm
export function followPerson(payload){
    return axios.post('/api/follow/confirm',payload).then(data=>{
        return data.data
    }).catch(error=>{
        console.log(error)
    })
}
// 取消关注
export function followCancel(payload){
    return axios.post('/api/follow/concel',payload).then(data=>{
        return data.data
    }).catch(error=>{
        console.log(error)
    })
}
// 获取用户信息
export function getUserInfo(payload){
    return axios.get('/api/user/info',{
        params:payload
    }).then(data=>{
        return data.data
    }).catch(error=>{
        console.log(error)
    })
}

// 获取研究院/工作室下所有栏目
export function getCategory(payload){
    return axios.get('/api/category/page_list',{
        params:payload
    }).then(data=>{
        return data.data
    })
}
// 获取研究院/工作室数据列表
// /source/api/studio_data
export function getStudioData(payload){
    return axios.get('/source/api/studio_data',{
        params:payload
    }).then(data=>{
        return data.data
    })
}