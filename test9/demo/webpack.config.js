
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleamWebpackPlugin = require('clean-webpack-plugin');
let webpack=require('webpack');
let ExtractTextWebpackPlugin= require('extract-text-webpack-plugin');
let LessExtract=new ExtractTextWebpackPlugin('css/less.css');
let cssExtract=new ExtractTextWebpackPlugin('css/css.css');
module.exports = {
    entry:'./src/index.js',
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
        hot:true   //热更新
    },
    plugins:[
        LessExtract,
        cssExtract,
        new webpack.HotModuleReplacementPlugin(),
        new CleamWebpackPlugin(['./build']),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            title:'第二次来学这个无语死了',
            hash:true 
        })
    ],
    mode:'development',
    resolve:{},
    module:{
        rules:[
            {
                test:/\.css$/,use:cssExtract.extract({
                    use:[
                        {loader:'css-loader'}
                    ]
                })},
            {
                test:/\.less$/,use:LessExtract.extract({
                    use:[
                        {loader:'css-loader'},
                        {loader:'less-loader'}
                    ] 
                })}
        ]
    },
}