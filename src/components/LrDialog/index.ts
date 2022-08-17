import { App } from 'vue'
import LrDialog from './LrDialog.vue'

LrDialog.install = (Vue: App) => {
  Vue.component(LrDialog.name, LrDialog)
}

export default LrDialog