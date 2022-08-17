import { App } from 'vue'
import LrPhoneField from './LrPhoneField.vue'

LrPhoneField.install = (Vue: App) => {
  Vue.component(LrPhoneField.name, LrPhoneField)
}

export default LrPhoneField