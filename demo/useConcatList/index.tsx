import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import { useConcatList } from '@tiangong/use';
import { debounce } from '../../utils'

interface IRequestParams {
  pageNum: number;
  pageSize: number;
}

interface IResponseItem {
  name: string;
  age: number;
  favors: string[];
}
const mockApi = (pageNum: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          list: [
            {
              name: `a${pageNum}`,
              age: 18,
              favors: ['吃饭', '睡觉']
            },
            {
              name: `b${pageNum}`,
              age: 20,
              favors: ['吃饭', '睡觉', '打豆豆']
            },
            {
              name: `c${pageNum}`,
              age: 36,
              favors: ['吃饭']
            },
            {
              name: `d${pageNum}`,
              age: 99,
              favors: ['吃面']
            }
          ],
          page: 1,
          total: 10000,
        }
      })
    }, 1000);
  })
}

export default defineComponent({
  setup() {
    const {
      params,
      resData,
      listData,
      listTotal,
      listLoading,
      isLastPage,
      isEmpty,
      handleSearch,
      handleReset,
    } = useConcatList<IResponseItem, IRequestParams>({
      request: {
        api: () => mockApi(params.value.pageNum),
        params: {
          pageNum: 1,
          pageSize: 4,
        },
      },
    });
    const scrollRef = ref(null);
    const scrollListener = debounce(() => {
      // 判断是否触底
      if (scrollRef.value.scrollHeight === scrollRef.value.scrollTop + 300) {
        params.value.pageNum += 1;
        handleSearch();
      }
    }, 100);
    const removeListener = () => {
      scrollRef.value.removeEventListener('scroll', scrollListener);
    };
    const addListener = () => {
      removeListener();
      scrollRef.value.addEventListener('scroll', scrollListener);
    }
    handleSearch();
    onMounted(() => {
      addListener();
    });
    onBeforeUnmount(() => {
      removeListener();
    });
    const handleClickReset = async () => {
      await handleReset();
      scrollRef.value.scrollTo(0, 0);
    };
    return {
      scrollRef,
      params,
      resData,
      listData,
      listTotal,
      listLoading,
      isLastPage,
      isEmpty,
      handleSearch,
      handleReset,
      handleClickReset,
    };
  },
  render() {
    return (
      <div>
        <div style="margin-bottom: 10px;">listLoading: {String(this.listLoading)}</div>
        <div style="margin-bottom: 10px;">isLastPage: {String(this.isLastPage)}</div>
        <div style="margin-bottom: 10px;">isEmpty: {String(this.isEmpty)}</div>
        <el-button type="primary" onClick={this.handleClickReset}>重置</el-button>
        <div style="height: 300px; overflow: auto; position: relative;" ref="scrollRef">
          {
            this.listData.map((item) => {
              return (
                <div style="margin: 10px;display: inline-block;width: 45%;height: 190px;border: 1px solid #000;box-sizing: border-box;">
                  <div>姓名：{item.name}</div>
                  <div>年龄：{item.age}</div>
                  <div>爱好：{item.favors.join(', ')}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
});
