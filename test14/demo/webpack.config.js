
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleamWebpackPlugin = require('clean-webpack-plugin');
let webpack=require('webpack');
let ExtractTextWebpackPlugin= require('extract-text-webpack-plugin');
let cssExtract=new ExtractTextWebpackPlugin({
    filename:'css/css.css',
});
let CopyWebpackPlugin=require('copy-webpack-plugin');
let PurifycssWebpack = require('purifycss-webpack');
let glob= require('glob');
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
        cssExtract,
        //拷贝插件
        new CopyWebpackPlugin([
            {
                from:'./src/doc',
                to:'public'
            }
        ]),
        new webpack.HotModuleReplacementPlugin(),
        new CleamWebpackPlugin(['./build']),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            title:'第二次来学这个无语死了',
            hash:true 
        }),
        //没用的css会被消除掉,一定放在HtmlWebpackPlugin的后面
        new PurifycssWebpack({
            paths:glob.sync(path.resolve('src/*.html'))
        })
    ],
    mode:'development',
    resolve:{},
    module:{
        rules:[
            {
                test:/\.css$/,use:cssExtract.extract({
                    fallback:'style-loader',
                    use:[
                        {loader:'css-loader'},
                        {loader:'postcss-loader'}
                    ]
                })},
        ]
    },
}