import { App } from 'vue'
import LrSelect from './LrSelect.vue'

LrSelect.install = (Vue: App) => {
  Vue.component(LrSelect.name, LrSelect)
}

export default LrSelect