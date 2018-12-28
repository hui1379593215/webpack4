
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleamWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'build.[hash:8].js',
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
            template:'./src/index.html',
            title:'第二次来学这个无语死了',
            hash:true 
            // minify:{
            //     removeAttributeQuotes:true,
            //     collapseWhitespace:true
            // }
        })
    ],
    mode:'development',
    resolve:{}
}