#对代码原封不动的拷贝
```
    npm install copy-webpack-plugin -D 

    let CopyWebpackPlugin=require('copy-webpack-plugin');

    //拷贝插件
        new CopyWebpackPlugin([
            {
                from:'./src/doc',
                to:'public'
            }
        ]),
```