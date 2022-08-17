import { App } from 'vue'
import LrTextarea from './LrTextarea.vue'

LrTextarea.install = (Vue: App) => {
  Vue.component(LrTextarea.name, LrTextarea)
}

export default LrTextarea