import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import useClickInside from '../../../demo/useClickInside';
import useMergeTable from '../../../demo/useMergeTable';
import ElementPlus from 'element-plus'

export function registerComponents(app) {
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
  app.component('d-use-click-inside', useClickInside)
  app.component('d-use-merge-table', useMergeTable)
  app.use(ElementPlus)
}
