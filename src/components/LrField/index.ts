import { App } from 'vue'
import LrField from './LrField.vue'

LrField.install = (Vue: App) => {
  Vue.component(LrField.name, LrField)
}

export default LrField