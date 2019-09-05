// 引入axios
import axios from "axios";
import { Loading } from 'element-ui';
// 转义post提交的数据
import qs from "qs"
// 地址前缀的公共部分
axios.defaults.baseURL="http://59.110.138.169"
// 设置超时, 当后端返回数据过慢时设置了超时就会自动断开请求
axios.defaults.timeout=5000;
var Loadings;
//request 是请求服务器执行的拦截函数
axios.interceptors.request.use(function(config){
    if(config.method=="post"){
        // 假如是post请求,则转义
        config.data=qs.stringify(config.data)
    }
   Loadings=Loading.service();
    return config;
},function(error){
    // 对请求失败做处理
    return Promise.reject(error);
});
axios.interceptors.response.use(function(config){
    Loadings.close();
    return config;
},function(error){
    Loadings.close();
    return Promise.reject(error);
});
export default axios
