import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import ElementPlus from 'element-plus'
import useClickInside from '../../../demo/useClickInside';
import useMergeTable from '../../../demo/useMergeTable';
import useList from '../../../demo/useList';
import useConcatList from '../../../demo/useConcatList';
import useDialogVisible from '../../../demo/useDialogVisible';

export function registerComponents(app) {
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
  app.component('d-use-click-inside', useClickInside)
  app.component('d-use-merge-table', useMergeTable)
  app.component('d-use-list', useList)
  app.component('d-concat-list', useConcatList)
  app.component('d-use-dialog-visible', useDialogVisible)
  app.use(ElementPlus)
}
