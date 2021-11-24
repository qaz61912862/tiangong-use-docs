import { defineComponent, ref } from 'vue';
import { useConcatList } from '@tiangong/use';

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
            }
          ],
          page: 1,
          total: 10000,
        }
      })
    }, 1500);
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
          pageSize: 3,
        },
      },
    });
    handleSearch();
    return {
      params,
      resData,
      listData,
      listTotal,
      listLoading,
      isLastPage,
      isEmpty,
      handleSearch,
      handleReset,
    };
  },
  render() {
    return (
      <div style="height: 300px; overflow: auto;">
        {
          this.listLoading && <span>Loading...</span>
        }
        {
          !this.listLoading && this.listData.map((item) => {
            return (
              <div style="display: inline-block;width: 50%;height: 190px;border: 1px solid #000;box-sizing: border-box;">
                <div>姓名：{item.name}</div>
                <div>年龄：{item.age}</div>
                <div>爱好：{item.favors.join(', ')}</div>
              </div>
            )
          })
        }
      </div>
    )
  }
});
