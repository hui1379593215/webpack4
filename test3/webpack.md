##webpack的插件1将html打包到build下可以自动引入生产的js
```
    npm install html-webpack-plugin -D
```
```
    let HtmlWebpackPlugin = require('html-webpack-plugin'); //引入文件
    
    plugins:[
        //打包html插件
        new HtmlWebpackPlugin({
            template:'./src/index.html',
             title:'第二次来学这个无语死了', //标题
             hash:true , //引入值时添加hash值
             minify:{
                removeAttributeQuotes:true,//去除双引号
                collapseWhitespace:true //折叠空行
            }
        }) //插件配置
    ],
    在html文件的title中添加
    <title><%= htmlWebpackPlugin.options.title %></title>

```