# useClickInside

判断是否点击了元素内部

## 使用示例

<d-use-click-inside></d-use-click-inside>

```tsx
import { defineComponent, ref } from 'vue';
import { useClickInside } from '@tiangong/use';

export default defineComponent({
  setup() {
    const areaRef = ref<any>(null);
    useClickInside(areaRef, (error) => {
      if (!error) {
        console.log('点击了内部');
      }
    });
    return {
      areaRef,
    };
  },
  render() {
    return (
      <div ref="areaRef" style="width: 200px;height: 200px; background: red;"></div>
    )
  }
});
```

## 入参
|参数|说明|
|:-:|:-------------:|
|ref|绑定的dom节点|
|callback|回调函数，接收error字段，若点击了元素外部，error不为空|

## 类型声明

```ts
import { Ref } from 'vue';
export declare function useClickInside(ref: Ref<HTMLElement | null>, callback: (error?: Error) => void): void;

```