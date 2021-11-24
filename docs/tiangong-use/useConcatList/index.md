# useConcatList

上拉加载的列表

## Usage

<d-concat-list></d-concat-list>


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

## Type Declarations

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
        pageNumKey?: string;
        pageSizeKey?: string;
        /**
         * 接口响应数据 key
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
        handleResponseData?: (list: T[], res?: IResponse) => T[];
    };
}

interface IReturns<T, P, U> {
    params: Ref<UnwrapRef<P>>;
    resData: Ref<UnwrapRef<U>>;
    tableData: Ref<UnwrapRef<T[]>>;
    tableTotal: Ref<number>;
    tableLoading: Ref<boolean>;
    handleSearch: (pageNum?: number) => any;
    handleReset: () => any;
    handleSizeChange: (pageNum: number) => any;
    handleCurrentChange: (pageNum: number) => any;
}
export declare function useList<T = any, P = any, U = any>(config: UseListConfig<T, P>): IReturns<T, P, U>;

```