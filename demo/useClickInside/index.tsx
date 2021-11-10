import { defineComponent, ref } from 'vue';
import { useClickInside } from '@tiangong/use';

export default defineComponent({
  setup() {
    const divRef = ref<any>(null);
    useClickInside(divRef, (error) => {
      if (!error) {
        console.log('点击了内部');
      }
    });
    return {
      divRef,
    };
  },
  render() {
    return (
      <div ref="divRef" style="width: 200px;height: 200px; background: red;"></div>
    )
  }
});
