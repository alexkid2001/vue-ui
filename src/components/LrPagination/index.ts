import { App } from 'vue'
import LrPagination from './LrPagination.vue'

LrPagination.install = (Vue: App) => {
  Vue.component(LrPagination.name, LrPagination)
}

export default LrPagination
