import httpInstance from '@/utils/https';

// 获取banner
export function getBannerAPI(params = {}) {
  // 默认为1 商品为2
  const { distributionSite = '1' } = params;
  return httpInstance({
    url: '/home/banner',
    params: {
      distributionSite
    }
  });
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
  return httpInstance({
    url: '/home/new'
  });
};
