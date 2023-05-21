import httpInstace from '@/utils/https';

export function getCotage() {
  return httpInstace({
    url: 'home/category/head'
  });
}
