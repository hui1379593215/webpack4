##打包时出现把重复的js删除掉
```
    npm install clean-webpack-plugin -D

    let CleamWebpackPlugin = require('clean-webpack-plugin');

--plugins 插件配置
    new CleamWebpackPlugin(['./build'])

```

##单页引用多个js
```
    entry:['./src/index.js','./src/a.js'],
```