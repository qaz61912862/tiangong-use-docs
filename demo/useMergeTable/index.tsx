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
      {
        id: 1,
        name: '林一',
        age: '18',
        sale: '800.00',
      },
      {
        id: 1,
        name: '小二',
        age: '28',
        sale: '900.00',
      },
      {
        id: 2,
        name: '张三',
        age: '18',
        sale: '1900.00',
      },
      {
        id: 3,
        name: '李四',
        age: '33',
        sale: '400.00',
      },
      {
        id: 3,
        name: '王五',
        age: '9',
        sale: '200.00',
      }
    ];
    onMounted(() => {
      const { mergeCol } = useMergeTable<IListItem>(
        list, 'id', ['id'],
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
          label="姓名"
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
