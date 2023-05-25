// 切换和load加载
import { getSubCategoryAPI } from '@/apis/category';
import { ref } from 'vue';

export function useLoad({ getGoodList, reqData, goodList }) {
  // tab切换回调
  const tabChange = () => {
    console.log('tab切换了', reqData.value.sortField);
    reqData.value.page = 1;
    getGoodList();
  };

  // 加载更多
  const disabled = ref(false);
  const load = async () => {
    console.log('加载更多数据咯');
    // 获取下一页的数据
    reqData.value.page++;
    const res = await getSubCategoryAPI(reqData.value);
    goodList.value = [...goodList.value, ...res.result.items];
    // 加载完毕 停止监听
    if (res.result.items.length === 0) {
      disabled.value = true;
    }
  };
  return { tabChange, load, disabled };
}
