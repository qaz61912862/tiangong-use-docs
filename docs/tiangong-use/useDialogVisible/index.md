# useDialog

Control visible for ElDialog

## Usage

<d-use-dialog-visible></d-use-dialog-visible>

### Parent

```tsx
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

```

### Child

```tsx
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

```

## Type Declarations

```ts
export interface DialogProps {
    visible?: boolean;
    [key: string]: any;
}

export declare function useDialogVisible<T extends DialogProps>(props: T, emit: (event: any, ...args: any[]) => void, event?: string): {
    visible: import("vue").WritableComputedRef<boolean>;
};

```