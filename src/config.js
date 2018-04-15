import axios from "axios";
import { message } from 'antd';
// 拦截请求
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.request.use(function (config) {

    message.loading('加载中', 0);
    return config;
});
// 拦截响应
axios.interceptors.response.use(function (config) {
    setTimeout(() =>{
       message.destroy();
    }, 500);
    // const hide = message.loading('加载中', 0);
    // setTimeout(hide, 2500);
    return config;
});