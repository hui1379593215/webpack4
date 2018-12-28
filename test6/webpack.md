#热更新引入webpack自带的
```
    let webpack=require('webpack');

    new webpack.HotModuleReplacementPlugin(),

--js文件添加这个只刷新要更新的组件
    if(module.hot){
    module.hot.accept()
}
```