关于运行报错的问题！！！
![Image text](https://github.com/maopixin/studio-m/blob/master/src/common/assets/img/fn.jpeg)
require.resolve('babel-plugin-transform-decorators-legacy')

这种方式不是很好 ， 多人协作的话需要单独修改 


1. 不要运行npm run eject暴露配置，ant-design引入方法为不暴露配置的引入方法，暴露配置以后运行会报错。
2. 关于less的使用，（vs-code自动编译less的插件，并在项目中引入编译后的css文件）
3. 路由组件使用异步加载已达到按需加载的目的
4. npm start / npm test / npm run build 