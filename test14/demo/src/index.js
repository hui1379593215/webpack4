let str= require('./a.js');
console.log(str);
document.getElementById('app').innerHTML=str;
import './index.css';
if(module.hot){
    module.hot.accept();
}
