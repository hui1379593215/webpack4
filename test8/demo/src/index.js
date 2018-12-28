let str= require('./a.js');
console.log(str);
document.getElementById('app').innerHTML=str;
import './index.css';
import './style.less';
if(module.hot){
    module.hot.accept();
}
