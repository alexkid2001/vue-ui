import { App } from 'vue'
import LrLink from './LrLink.vue'

LrLink.install = (Vue: App) => {
  Vue.component(LrLink.name, LrLink)
}

export default LrLink