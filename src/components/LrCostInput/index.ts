import { App } from 'vue'
import LrCostInput from './LrCostInput.vue'

LrCostInput.install = (Vue: App) => {
  Vue.component(LrCostInput.name, LrCostInput)
}

export default LrCostInput