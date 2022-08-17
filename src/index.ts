import LrIco from '@/components/LrIco'
import LrButton from '@/components/LrButton'
import LrLink from '@/components/LrLink'
import LrCheckbox from '@/components/LrCheckbox'
import LrRadio from '@/components/LrRadio'
import LrField from '@/components/LrField'
import LrFileUpload from '@/components/LrFileUpload'
import LrTextarea from '@/components/LrTextarea'
import LrSelect from '@/components/LrSelect'
import { LrGallery } from '@/components/Gallery'
import LrInput from '@/components/LrInput'
import LrCostInput from '@/components/LrCostInput'
import LrCostField from '@/components/LrCostField'
import LrPhoneField from '@/components/LrPhoneField'
import LrTimeInput from '@/components/LrTimeInput'
import LrTimeSlider from '@/components/LrTimeSlider'
import LrDailyCost from '@/components/LrDailyCost'
import LrDaySettings from '@/components/LrDaySettings'
import LrCloseButton from '@/components/LrCloseButton'
import LrModal from '@/components/LrModal'
import LrAlert from '@/components/LrAlert'
import LrDialog from '@/components/LrDialog'
import LrSlider from '@/components/LrSlider'
import LrPagination from '@/components/LrPagination'
import LrFlags from '@/components/LrFlags'
import Calendar from '@/components/Calendar'
import LrAmountInput from '@/components/LrAmount'

import './styles/index.scss'
import { App } from 'vue'

const components = {
  LrIco,
  LrButton,
  LrLink,
  LrCheckbox,
  LrRadio,
  LrField,
  LrFileUpload,
  LrTextarea,
  LrSelect,
  LrGallery,
  LrInput,
  LrCostInput,
  LrCostField,
  LrPhoneField,
  LrTimeInput,
  LrTimeSlider,
  LrDailyCost,
  LrDaySettings,
  LrCloseButton,
  LrModal,
  LrAlert,
  LrDialog,
  LrSlider,
  LrPagination,
  LrFlags,
  Calendar,
  LrAmountInput,
}

function install(Vue: App) {
  for (const component in components) {
    // @ts-expect-error
    Vue.component(components[component].name, components[component])
  }
}

export default { install }

export { default as LrIco } from '@/components/LrIco'
export { default as LrButton } from '@/components/LrButton'
export { default as LrLink } from '@/components/LrLink'
export { default as LrCheckbox } from '@/components/LrCheckbox'
export { default as LrRadio } from '@/components/LrRadio'
export { default as LrField } from '@/components/LrField'
export { default as LrFileUpload } from '@/components/LrFileUpload'
export { default as LrTextarea } from '@/components/LrTextarea'
export { default as LrSelect } from './components/LrSelect'
export { LrGallery } from '@/components/Gallery'
export { default as LrInput } from '@/components/LrInput'
export { default as LrCostInput } from '@/components/LrCostInput'
export { default as LrCostField } from '@/components/LrCostField'
export { default as LrPhoneField } from '@/components/LrPhoneField'
export { default as LrTimeInput } from '@/components/LrTimeInput'
export { default as LrTimeSlider } from '@/components/LrTimeSlider'
export { default as LrDailyCost } from '@/components/LrDailyCost'
export { default as LrDaySettings } from '@/components/LrDaySettings'
export { default as LrCloseButton } from '@/components/LrCloseButton'
export { default as LrModal } from '@/components/LrModal'
export { default as LrAlert } from '@/components/LrAlert'
export { default as LrDialog } from '@/components/LrDialog'
export { default as LrSlider } from '@/components/LrSlider'
export { default as LrPagination } from '@/components/LrPagination'
export { default as LrFlags } from '@/components/LrFlags'
export { default as Calendar } from '@/components/Calendar'
export { default as LrAmountInput } from '@/components/LrAmount'
