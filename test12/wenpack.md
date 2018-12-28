##清除到引用时多余的cs文件,把引用多余的cs剔除
```
    npm i purifycss-webpack purify-css glob -D 

    let PurifycssWebpack = require('purifycss-webpack');
    let glob= require('glob');


    //没用的css会被消除掉,一定放在HtmlWebpackPlugin的后面
        new PurifycssWebpack({
            paths:glob.sync(path.resolve('src/*.html'))
        })  
      
```