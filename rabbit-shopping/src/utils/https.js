// axios基础的封装
import axios from 'axios';

const httpInstance = axios.create({
  // 基础地址
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
});

// axios请求拦截
httpInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (e) => Promise.reject(e)
);

// axios相应拦截
httpInstance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (e) => Promise.reject(e)
);

export default httpInstance;
