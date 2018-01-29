import axios from 'axios'
//import qs from 'qs'

//console.log(axios);
axios.defaults.timeout = 5000; //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'; //配置请求头

//配置根路径
axios.defaults.baseURL = 'http://localhost:3014';

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
});
//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
    //对响应数据做些事
    //		if(!res.data.success) {
    //			return Promise.reject(res);
    //		}
    return res;
}, (error) => {
    return Promise.reject(error);
});

export default axios;