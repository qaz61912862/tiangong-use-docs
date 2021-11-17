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
        // handleParams: (newParams) => {
        //   return newParams;
        // }
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
          style="margin-top: 10px; text-align: right;"
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
