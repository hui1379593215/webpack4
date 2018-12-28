#webpack引入别的样式
```
    --plugins
    --loader

```
#css处理
```
    
    npm install style-loader css-loader less less-loader stylus stylus-loader node-sass sass-loader -D

--验证文件的正则
    module:{
        rules:[
            {
                test:/\.css$/,use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'}
                ]
            },
            {
                test:/\.less$/,use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                    {loader:'less-loader'}
                ] 
            }
        ]
    },

--js引入文件
    import './index.css';
    import './style.less';
```