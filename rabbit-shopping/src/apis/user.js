// 封装所有和用户相关的接口函数
import httpInstance from '@/utils/https';

export const loginAPI = ({ account, password }) => {
  console.log(111);
  return httpInstance({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password
    }
  });
};

export const getLikeListAPI = ({ limit = 4 }) => {
  return httpInstance({
    url: '/goods/relevant',
    params: {
      limit
    }
  });
};
