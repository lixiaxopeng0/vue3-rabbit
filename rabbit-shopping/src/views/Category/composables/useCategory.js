import { getCategoryAPI } from '@/apis/category';
import { onMounted, ref } from 'vue';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';

export function useCategory() {
  const route = useRoute();
  const categoryData = ref({});
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id);
    categoryData.value = res.result;
  };
  // to是到哪
  onBeforeRouteUpdate((to) => {
    // route.params.id有滞后性
    // 存在问题：使用最新的路由参数请求最新的分类数据
    getCategory(to.params.id);
  });

  onMounted(() => getCategory());
  //目标：路由参数变化的时候可以把分类数据接口重新发送
  return { categoryData };
}
