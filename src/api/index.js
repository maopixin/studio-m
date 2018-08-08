import 'whatwg-fetch';
import Promise from 'promise-polyfill';
import fetchJsonp from 'fetch-jsonp';
import qs from 'qs';
const domin = 'http://institute.dljy.lzdev'
// 获取教研活动列表
export function getActivityList(payload){
    let Data = qs.stringify(payload)
    return fetchJsonp( domin + '/activity/api/page_list?'+Data).then(data=>{
        return data.json()
    }).catch(error=>{
        console.log(error)
    })
};
// 参与教研活动
export function joinActivity(payload){
    return fetch( domin+ '/api/activity_auth/join',{
        method:'POST',
        mode:'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(data=>{
        return data.json();
    }).catch(error=>{
        return error;
    })
}