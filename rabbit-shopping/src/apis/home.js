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
