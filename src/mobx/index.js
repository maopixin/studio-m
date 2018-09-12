import { observable ,computed , action } from 'mobx';
import { Toast } from 'antd-mobile';

class AppStore {
    @observable bodyList = []; //bodylist
}

export default AppStore;