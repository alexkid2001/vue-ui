import { createApp } from 'vue'
import App from './App.vue'
import Lr from './index'
import { createI18n } from 'vue-i18n/dist/vue-i18n'
// @ts-ignore
import calendarLocales from './components/Calendar/Calendar.i18n'
// @ts-ignore
import { VueFinalModal } from 'vue-final-modal'
// import './common_styles/colors.scss'

const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  calendarLocales, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
})

createApp(App).use(Lr).use(VueFinalModal()).use(i18n).mount('#app')
