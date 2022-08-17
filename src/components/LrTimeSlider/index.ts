import { App } from 'vue'
import LrTimeSlider from './LrTimeSlider.vue'

LrTimeSlider.install = (Vue: App) => {
  Vue.component(LrTimeSlider.name, LrTimeSlider)
}

export default LrTimeSlider