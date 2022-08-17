import { App } from 'vue'
// @ts-ignore
import LrSlider from './LrSlider.vue'

LrSlider.install = (Vue: App) => {
  Vue.component(LrSlider.name, LrSlider)
}

export default LrSlider
