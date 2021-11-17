import { defineComponent, reactive } from 'vue';
import Dialog from './components/dialog';

export default defineComponent({
  components: {
    Dialog,
  },
  setup() {
    const dialog = reactive({
      visible: false,
    })
    const open = () => {
      dialog.visible = true;
    };
    return {
      open,
      dialog,
    };
  },
  render() {
    return (
      <div>
        <el-button onClick={this.open}>打开弹窗</el-button>
        <Dialog
          v-model={this.dialog.visible}
        ></Dialog>
      </div>
    )
  }
})