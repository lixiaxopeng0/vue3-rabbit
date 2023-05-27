// axios基础的封装
import axios from 'axios';
import { ElMessage } from 'element-plus';
import { useUserStore } from '@/stores/userStore';
// 为什么不直接导入useRoute,因为useRoute只能在 .vue 文件中引用！！！
import route from '@/router';

const httpInstance = axios.create({
  // 基础地址
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
});

// axios请求拦截
httpInstance.interceptors.request.use(
  (config) => {
    // 1. 从pinia获取token数据
    const userStore = useUserStore();
    // 1. 从pinia获取token数据
    // 2. 按照后端的要求拼接token数据
    const token = userStore.userInfo.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
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
    // 1. 从pinia获取token数据
    const userStore = useUserStore();
    // 统一错误提示
    ElMessage({
      type: 'warning',
      message: e.response.data.message
    });

    // status:401 token失效处理
    //1.清除本地用户数据
    //2，跳转到登录页
    if (e.response.status === 401) {
      userStore.clearUserInfo();
      route.push('/login');
    }
    return Promise.reject(e);
  }
);

export default httpInstance;
