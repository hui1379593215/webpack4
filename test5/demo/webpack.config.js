
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleamWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry:{
        //多入口多出口
        index:'./src/index.js',
        a:'./src/a.js'
    },
    output:{
        filename:'[name].[hash:8].js',
        //这个是绝对路径
        path:path.resolve('./build')
    },
    devServer:{
        contentBase:'./build',
        port:3000,
        compress:true,
        open:true,
        // hot:true
    },
    module:{},
    plugins:[
        new CleamWebpackPlugin(['./build']),
        new HtmlWebpackPlugin({
            filename:'a.html',
            template:'./src/index.html',
            title:'第二次来学这个无语死了',
            hash:true ,
            chunks:['index']
        }),
        new HtmlWebpackPlugin({
            filename:'b.html',
            template:'./src/index.html',
            title:'第二次来学这个无语死了',
            hash:true ,
            chunks:['a']
        })
    ],
    mode:'development',
    resolve:{}
}