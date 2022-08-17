import { App } from 'vue'
import LrRadio from './LrRadio.vue'

LrRadio.install = (Vue: App) => {
  Vue.component(LrRadio.name, LrRadio)
}

export default LrRadio