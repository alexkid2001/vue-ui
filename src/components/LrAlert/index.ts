import { App } from 'vue'
import LrAlerts from './LrAlert.vue'

LrAlerts.install = (Vue: App) => {
  Vue.component(LrAlerts.name, LrAlerts)
}

export default LrAlerts