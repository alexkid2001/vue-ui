import { App } from 'vue'
import LrCostField from './LrCostField.vue'

LrCostField.install = (Vue: App) => {
  Vue.component(LrCostField.name, LrCostField)
}

export default LrCostField
