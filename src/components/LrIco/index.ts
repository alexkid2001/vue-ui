import { App } from 'vue'
import LrIco from './LrIco.vue'

LrIco.install = (Vue: App) => {
  Vue.component(LrIco.name, LrIco)
}

export default LrIco