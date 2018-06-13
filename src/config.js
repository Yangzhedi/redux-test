import axios from "axios";
import { message } from 'antd';
// 拦截请求
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.request.use(function (config) {

    message.loading('加载中', 0.5);
    console.log(config)
    return config;
});
// 拦截响应
axios.interceptors.response.use(function (config) {
    console.log(config)
    // setTimeout(() =>{
    //    message.destroy();
    // }, 1500);
    // const hide = message.loading('加载中', 0);
    // setTimeout(hide, 2500);
    return config;
});