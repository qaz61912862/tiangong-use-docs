# useMergeTable

ElTable根据某个相同的列属性进行行合并 

## 使用示例

<d-use-merge-table></d-use-merge-table>

```tsx
import { defineComponent, ref, onMounted } from 'vue';
import { useMergeTable } from '@tiangong/use';

interface IListItem {
  id: number;
  name: string;
  age: string;
  sale: string;
}

export default defineComponent({
  setup() {
    const mergeColFn = ref<any>();
    const list = [
      { id: 1, name: '林一', age: '18', sale: '800.00' },
      { id: 1, name: '小二', age: '28', sale: '900.00' },
      { id: 2, name: '张三', age: '18', sale: '1900.00' },
      { id: 3, name: '李四', age: '33', sale: '400.00' },
      { id: 3, name: '王五', age: '9', sale: '200.00' },
    ];
    onMounted(() => {
      const { mergeCol } = useMergeTable<IListItem>(
        list, 'id', ['id'], // 第三个参数可传入['id']或[0]
      );
      mergeColFn.value = mergeCol
    });
    return {
      list,
      mergeColFn,
    };
  },
  render() {
    return (
      <el-table
        border={true}
        data={this.list}
        spanMethod={this.mergeColFn}
      >
        <el-table-column
          label="订单号"
          prop="id"
          width="120"
        />
        <el-table-column
          label="姓名"
          prop="name"
        />
        <el-table-column
          label="年龄"
          prop="age"
        />
        <el-table-column
          label="销售额"
          prop="sale"
        />
      </el-table>
    )
  }
});

```
## 入参
|参数|说明|
|:-:|:-:|
|data|ElTable的data参数|
|key|data的item的某个字段名（根据该字段相同则合并行）|
|mergeColumns|需进行合并的列（el-table-column的prop值或者列的下标（从0开始））组成的数组|

## 出参
|参数|说明|
|:-:|:-:|
|mergeCol|赋值给ElTable的span-method属性|

## 类型声明

```ts
export declare function useMergeTable<T>(data: T[], key: keyof T, mergeColumns: (string | number)[]): {
    mergeCol: ({ column, rowIndex, columnIndex }: {
        row: T;
        column: any;
        rowIndex: number;
        columnIndex: number;
    }) => {
        rowspan: number;
        colspan: number;
    } | undefined;
};

```
