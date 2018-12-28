##配置webpack.config.js文件
    
```
    基于node的遵循commonjs语法
    entry 入口

    output 出口 
        --finename  打包文件名
        --path      绝对路径
    
    devServer 开发服务器

    module 模块配置

    plugins 插件配置

    mode 更改模式

    resolve 配置解析  
```
## 在package.json中设置
```
    npm install webpack-dev-server -D
```
```
    "build":"webpack",
    "start":"webpack-dev-server
```
```
    http://localhost:8080

    devServer:{
        contentBase:'./build'  //配置打包后的虚拟路径
        port:3000,  //端口号
        compress:true, //服务器压缩
        open:true,  //自动打开浏览器
        hot:true
    },
```



