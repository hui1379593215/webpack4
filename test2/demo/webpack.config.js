
let path = require('path');
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'build.js',
        //这个是绝对路径
        path:path.resolve('./build')
    },
    devServer:{
        contentBase:'./build',
        port:3000,
        compress:true,
        open:true,
        // hot:true
    },
    module:{},
    plugins:[],
    mode:'development',
    resolve:{}
}