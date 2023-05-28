import httpInstance from '@/utils/https';

export const getOrderAPI = (id) => {
  return httpInstance({
    url: `/member/order/${id}`
  });
};
