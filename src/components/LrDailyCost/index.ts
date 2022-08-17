import { App } from 'vue'
import LrDailyCost from './LrDailyCost.vue'

LrDailyCost.install = (Vue: App) => {
  Vue.component(LrDailyCost.name, LrDailyCost)
}

export default LrDailyCost