##抽离样式，抽离到一个css文件 通过css文件方式来引用
```
     npm install extract-text-webpack-plugin@next  mini-css-extract-plugin -D

     let ExtractTextWebpackPlugin= require('extract-text-webpack-plugin');

     new ExtractTextWebpackPlugin({
            filename:'css/index.css'
     }), //打包之后输出到哪里


     module:{
        rules:[
            {
                test:/\.css$/,use:ExtractTextWebpackPlugin.extract({
                    use:[
                        {loader:'css-loader'}
                    ]
                })},
            {
                test:/\.less$/,use:ExtractTextWebpackPlugin.extract({
                    use:[
                        {loader:'css-loader'},
                        {loader:'less-loader'}
                    ] 
                })}
        ]
    },
```