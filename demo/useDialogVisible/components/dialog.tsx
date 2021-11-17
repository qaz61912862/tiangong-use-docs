import { defineComponent } from 'vue';
import { useDialogVisible } from '@tiangong/use';

export default defineComponent({
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      required: true,
      type: Boolean,
    },
  },
  setup(props, { emit }) {
    const { visible } = useDialogVisible(props, emit);
    const close = () => {
      visible.value = false;
    };
    return {
      visible,
      close,
    };
  },
  render() {
    const footer = () => {
      return (
        <el-button
          size="small"
          onClick={this.close}
        >关闭</el-button>
      );
    };
    return (
      <div>
        <el-dialog
          v-slots={{ footer }}
          title="操作日志"
          v-model={this.visible}
          close-on-click-modal={false}
        ></el-dialog>
      </div>
    )
  }
})