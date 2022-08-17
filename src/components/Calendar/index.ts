import { App } from 'vue'
import Calendar from './Calendar.vue'

Calendar.install = (Vue: App) => {
  Vue.component(Calendar.name, Calendar)
}

export default Calendar
