// axios基础的封装
import axios from 'axios';
import { ElMessage } from 'element-plus';

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
  (e) => {
    // 统一错误提示
    ElMessage({
      type: 'warning',
      message: e.response.data.message
    });
    return Promise.reject(e);
  }
);

export default httpInstance;
