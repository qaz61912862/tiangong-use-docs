# useList

用于ElTable分页列表

## 使用示例

<d-use-list></d-use-list>


```tsx
import { defineComponent, ref } from 'vue';
import { useList } from '@tiangong/use';

interface IRequestParams {
  pageNum: number;
  pageSize: number;
}

interface IResponseItem {
  name: string;
  age: number;
  favors: string[];
}
const mockApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          list: [
            {
              name: 'a',
              age: 18,
              favors: ['吃饭', '睡觉']
            },
            {
              name: 'b',
              age: 20,
              favors: ['吃饭', '睡觉', '打豆豆']
            },
            {
              name: 'c',
              age: 36,
              favors: ['吃饭']
            }
          ],
          page: 1,
          total: 30,
        }
      })
    }, 1500);
  })
}

export default defineComponent({
  setup() {
    const {
      params,
      tableTotal,
      tableData,
      tableLoading,
      handleSearch,
      handleReset,
      handleSizeChange,
      handleCurrentChange,
    } = useList<IResponseItem, IRequestParams>({
      request: {
        api: mockApi,
        params: {
          pageNum: 1,
          pageSize: 20,
        },
        handleParams: (paramsObj) => {
          // ...处理params
          // delete paramsObj.xxx
          return paramsObj;
        }
      },
    });
    handleSearch();
    return {
      params,
      tableTotal,
      tableData,
      tableLoading,
      handleSearch,
      handleReset,
      handleSizeChange,
      handleCurrentChange,
    };
  },
  render() {
    return (
      <div>
        <el-table
          border
          height={240}
          data={this.tableData}
          v-loading={this.tableLoading}
        >
          <el-table-column
            label="姓名"
            prop="name"
            width="120"
          />
          <el-table-column
            label="年龄"
            prop="age"
            width="120"
          />
          <el-table-column
            label="爱好"
            v-slots={
              {
                default: ({ row }: { row: any; }) => {
                  return row?.favors ?? [].map((item) => {
                    return (
                      <div>{item}</div>
                    )
                  })
                }
              }
            }
          />
        </el-table>
        <el-pagination
          style="float: right;margin-top: 10px;"
          v-model={[this.params.pageNum, 'currentPage']}
          pageSize={3}
          layout="prev, pager, next, jumper"
          total={this.tableTotal}
          onSizeChange={this.handleSizeChange}
          onCurrentChange={this.handleCurrentChange}
        />
      </div>
    )
  }
});

```

## 入参
|参数|说明|
|:-:|:-:|
|updateRouteUrl|是否刷新列表|
|request|详见下文类型声明|
|response|详见下文类型声明|

## 出参
|参数|说明|
|:-:|:-:|
|params|请求参数|
|resData|接口返回数据|
|tableData|接口返回数据的list|
|tableTotal|总数|
|tableLoading|是否加载中|
|handleSearch|搜索事件|
|handleReset|重置事件|
|handleSizeChange|每页的数量改变事件|
|handleCurrentChange|翻页事件|


## 类型声明

```ts
import { UnwrapRef, Ref } from 'vue';

interface IResponse<T = any> {
    data: T;
    successful: boolean;
    message?: string;
    code?: string;
}

interface UseListConfig<T = any, P = any> {
    isUpdateRouterUrl?: boolean;
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
        /**
         * 校验函数返回true 往下执行
         */
        handleValidate?: (params: any) => boolean;
        /**
         * 自定义重置方法
         */
        handleCustomReset?: (params: P, defaultParams: P) => P;
        /**
         * 重置请求地址
         */
        resetApi?: () => any;
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
     * 接口返回数据的list
     */
    tableData: Ref<UnwrapRef<T[]>>;
    /**
     * 总数
     */
    tableTotal: Ref<number>;
    /**
     * 是否加载中
     */
    tableLoading: Ref<boolean>;
    /**
     * 搜索事件
     */
    handleSearch: (pageNum?: number) => any;
    /**
     * 重置事件
     */
    handleReset: () => any;
    /**
     * 每页的数量改变事件
     */
    handleSizeChange: (pageNum: number) => any;
    /**
     * 翻页事件
     */
    handleCurrentChange: (pageNum: number) => any;
}
export declare function useList<T = any, P = any, U = any>(config: UseListConfig<T, P>): IReturns<T, P, U>;

```