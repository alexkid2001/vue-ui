import { App } from "vue"
import LrFileUpload from "./LrFileUpload.vue"

LrFileUpload.install = (Vue: App) => {
  Vue.component(LrFileUpload.name, LrFileUpload)
}

export default LrFileUpload
