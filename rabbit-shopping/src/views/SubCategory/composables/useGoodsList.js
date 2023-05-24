import { onMounted, ref } from 'vue';
import { getSubCategoryAPI } from '@/apis/category';

export function useGoodsList(route) {
  // 获取基础列表数据渲染
  const goodList = ref([]);
  const reqData = ref({
    categoryId: route.params.id,
    page: 1,
    pageSize: 20,
    sortField: 'publishTime'
  });
  const getGoodList = async () => {
    const res = await getSubCategoryAPI(reqData.value);
    console.log(res);
    goodList.value = res.result.items;
  };
  onMounted(() => getGoodList());
  return { getGoodList, goodList, reqData };
}
