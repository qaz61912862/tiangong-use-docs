# useConcatList

上拉加载的列表

## 使用示例

<d-concat-list></d-concat-list>


```tsx
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

```

## 入参
|参数|说明|
|:-:|:-:|
|request|详见下文类型声明|
|response|详见下文类型声明|

## 出参
|参数|说明|
|:-:|:-:|
|params|请求参数|
|resData|接口返回数据|
|listData|当前的已有list|
|listLoading|是否加载中|
|listTotal|接口查询到的总数|
|isLastPage|是否为最后一页|
|isEmpty|是否为空（即接口没有返回一条数据）|
|handleSearch|搜索事件|
|handleReset|重置事件|

## 类型声明

```ts
import { UnwrapRef, Ref } from 'vue-demi';
interface IResponse<T = any> {
    data: T;
    successful: boolean;
    message?: string;
    code?: string;
}
interface UseConcatListConfig<T = any, P = any> {
    request: {
        /**
         * 请求列表方法
         */
        api: any;
        /**
         * 请求参数
         */
        params?: P;
        /**
         * pageNum的字段名，默认为pageNum
         */
        pageNumKey?: string;
        /**
         * pageSize的字段名，默认为pageSize
         */
        pageSizeKey?: string;
        /**
         * 自定义处理params
         */
        handleParams?: (params: P) => P;
    };
    response?: {
        /**
         * 列表数据 默认 data.list
         * 例： 响应数据为 { data: { list: [] } } 则传递 data.list;
         */
        tableDataKey?: string;
        /**
         * 总条数 默认 data.total
         * 例： 响应数据为 { data: { list: [], total: 0 } } 则传递 data.total;
         */
        totalKey?: string;
        /**
         * 自定义处理返回数据
         */
        handleResponseData?: (list: T[], res?: IResponse) => T[];
    };
}
interface IReturns<T, P, U> {
    /**
     * 请求参数
     */
    params: Ref<UnwrapRef<P>>;
    /**
     * 接口返回数据
     */
    resData: Ref<UnwrapRef<U>>;
    /**
     * 当前的已有list
     */
    listData: Ref<UnwrapRef<T[]>>;
    /**
     * 是否加载中
     */
    listLoading: Ref<boolean>;
    /**
     * 接口查询到的总数
     */
    listTotal: Ref<number>;
    /**
     * 是否为最后一页
     */
    isLastPage: Ref<boolean>;
    /**
     * 是否为空（即接口没有返回一条数据）
     */
    isEmpty: Ref<boolean>;
    /**
     * 搜索事件
     */
    handleSearch: (pageNum?: number) => Promise<any>;
    /**
     * 重置事件
     */
    handleReset: () => Promise<any>;
}
export declare function useConcatList<T = any, P = any, U = any>(config: UseConcatListConfig<T, P>): IReturns<T, P, U>;

```