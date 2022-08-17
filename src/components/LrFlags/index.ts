import { App } from 'vue'
import LrFlags from './LrFlags.vue'

LrFlags.install = (Vue: App) => {
  Vue.component(LrFlags.name, LrFlags)
}

export default LrFlags
