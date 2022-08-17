import { App } from 'vue'
import LrButton from './LrButton.vue'

LrButton.install = (Vue: App) => {
  Vue.component(LrButton.name, LrButton)
}

export default LrButton
