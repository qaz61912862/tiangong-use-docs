# useDialog

控制ElDialog的打开和隐藏

## 使用示例

<d-use-dialog-visible></d-use-dialog-visible>

### 父组件

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

### 子组件

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

## 入参
|参数|说明|
|:-:|:-:|
|props|直接传入setup()的参数props|
|emit|直接传入setup()emit|

## 出参
|参数|说明|
|:-:|:-:|
|visible|赋值给ElDialog的v-model|


## 类型声明

```ts
export interface DialogProps {
    visible?: boolean;
    [key: string]: any;
}

export declare function useDialogVisible<T extends DialogProps>(props: T, emit: (event: any, ...args: any[]) => void, event?: string): {
    visible: import("vue").WritableComputedRef<boolean>;
};

```