import { App } from 'vue'
import LrInput from './LrInput.vue';

LrInput.install = (Vue: App) => {
  Vue.component(LrInput.name, LrInput)
}

export default LrInput