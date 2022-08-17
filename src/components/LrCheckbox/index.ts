import { App } from 'vue'
import LrCheckbox from './LrCheckbox.vue'

LrCheckbox.install = (Vue: App) => {
  Vue.component(LrCheckbox.name, LrCheckbox)
}

export default LrCheckbox