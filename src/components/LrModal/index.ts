import { App } from 'vue'
import LrModal from './LrModal.vue'

LrModal.install = (Vue: App) => {
  Vue.component(LrModal.name, LrModal)
}

export default LrModal
