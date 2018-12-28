## mini-css-extract-plugin抽取css
```
    let MiniCssTractPlugin = require('mini-css-extract-plugin');

---plugins
        new MiniCssTractPlugin({
            filename:'css/css.css'
        }),
    
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
```