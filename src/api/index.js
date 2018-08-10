import 'whatwg-fetch';
import Promise from 'promise-polyfill';
import fetchJsonp from 'fetch-jsonp';
import qs from 'qs';
// const domin = 'http://institute.dljy.lzdev'
const domin = '';

function post(url,payload){
    return fetch( domin + url , {
        method:'POST',
        mode:'cors',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(payload)
    }).then(data=>{
        return data.json();
    })
}
function get(url,payload){
    return fetch( domin + url + '?' + qs.stringify(payload) , {
        method: 'GET',
        credentials: 'include'
    })
}
// 获取教研活动列表
export function getActivityList(payload){
    let Data = qs.stringify(payload)
    return fetchJsonp( domin + '/activity/api/page_list?'+Data , {}).then(data=>{
        return data.json()
    })
};
// 参与教研活动
export function joinActivity(payload){
    return fetch( domin+ '/api/activity_auth/join',{
        method:'POST',
        mode:'cors',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(data=>{
        return data.json();
    })
}

// 获取工作室下所有成员
export function getStuidoMembers(payload){
    return fetchJsonp(domin + '/api/member/studio' + qs.stringify(payload) ).then(data=>{
        return data.json();
    })
}
// 关注用户
// export function followPerson(payload){
//     return fetch( domin + '/api/follow/confirm',payload).then(data=>{
//         return data.json();
//     })
// }
export function followPerson(payload){
    return post('/api/follow/confirm',payload).then(data=>{
        return data;
    })
}
// 取消关注用户
export function followCancel(payload){
    return post('/api/follow/concel',payload).then(data=>{
        return data;
    })
}
// 获取用户信息
export function getUserInfo(payload){
    return get(domin + '/api/user/info' , payload).then(data=>{
        return data.json();
    })
}
