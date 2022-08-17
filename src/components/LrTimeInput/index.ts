import { App } from 'vue'
import LrTimeInput from './LrTimeInput.vue'

LrTimeInput.install = (Vue: App) => {
  Vue.component(LrTimeInput.name, LrTimeInput)
}

export default LrTimeInput