import { App } from 'vue'
import LrDailyCost from './LrDaySettings.vue'

LrDailyCost.install = (Vue: App) => {
  Vue.component(LrDailyCost.name, LrDailyCost)
}

export default LrDailyCost