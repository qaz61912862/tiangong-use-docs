import Theme from 'vitepress/dist/client/theme-default'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components.js'
import 'element-plus/dist/index.css'
// import 'babel-polyfill'

export default {
  ...Theme,
  enhanceApp({ app }) {
    registerComponents(app)
  }
}
