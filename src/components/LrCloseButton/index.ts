import { App } from 'vue'
import LrCloseButton from './LrCloseButton.vue'

LrCloseButton.install = (Vue: App) => {
  Vue.component(LrCloseButton.name, LrCloseButton)
}

export default LrCloseButton