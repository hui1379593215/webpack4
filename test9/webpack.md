##抽离出多个的css文件
```
    let LessExtract=new ExtractTextWebpackPlugin('css/less.css');

    let cssExtract=new ExtractTextWebpackPlugin('css/css.css');

--  plugins
        LessExtract,
        cssExtract,

    //越靠右越先执行
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
```