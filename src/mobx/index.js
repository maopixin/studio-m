import { observable ,computed , action } from 'mobx';
import { Toast } from 'antd-mobile';

class AppStore {
    @observable bodyList = {}; //bodylist

    @action changeBodyList= (data) => {
        this.bodyList = data;
    }
}

export default new AppStore();