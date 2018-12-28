
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleamWebpackPlugin = require('clean-webpack-plugin');
let webpack=require('webpack');
let MiniCssTractPlugin = require('mini-css-extract-plugin');
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
        hot:true   //热更新
    },
    plugins:[
        new MiniCssTractPlugin({
            filename:'css/css.css'
        }),
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
                test:/\.css$/,use:[
                        MiniCssTractPlugin.loader,
                        {loader:'css-loader'}
                    ]
                },
            {
                test:/\.less$/,use:[
                        MiniCssTractPlugin.loader,
                        {loader:'css-loader'},
                        {loader:'less-loader'}
                    ] 
                }
        ]
    },
}