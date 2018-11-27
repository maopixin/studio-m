import { 
    observable ,
    // computed , 
    action 
} from 'mobx';
// import { Toast } from 'antd-mobile';

class AppStore {
    @observable bodyList = {}; //bodylist
    @observable userInfo = {get_login:false}; //userInfo

    @action changeBodyList= (data) => {
        this.bodyList = data;
    }
    @action changeUserState= (data) => {
        this.userInfo = data;
    }
}

export default new AppStore();