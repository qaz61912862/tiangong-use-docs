# useClickInside

Listen for clicks inside of an element. Useful for modal or dropdown.

## Usage

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

## Type Declarations

```ts
import { Ref } from 'vue';
export declare function useClickInside(ref: Ref<HTMLElement | null>, callback: (error?: Error) => void): void;

```