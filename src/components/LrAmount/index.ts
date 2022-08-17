import { App } from 'vue'
import LrAmountInput from './LrAmountInput.vue'

LrAmountInput.install = (Vue: App) => {
  Vue.component(LrAmountInput.name, LrAmountInput)
}

export default LrAmountInput
