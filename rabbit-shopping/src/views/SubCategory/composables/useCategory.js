import { getCategoryFilterAPI } from '@/apis/category';
import { onMounted, ref } from 'vue';

export function useCategory(route) {
  // 获取面包屑导航数据
  const categoryData = ref({});
  const getCategoryData = async () => {
    const res = await getCategoryFilterAPI(route.params.id);
    categoryData.value = res.result;
  };
  onMounted(() => getCategoryData());
  return { categoryData };
}
