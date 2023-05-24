import httpInstance from '@/utils/https';

export function getCategoryAPI(id) {
  return httpInstance({
    url: '/category',
    params: {
      id
    }
  });
}
