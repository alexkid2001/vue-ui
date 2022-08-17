// import LrButton from "../LrButton/LrButton";
import { LrButton } from '../../index'
import LrAlerts from './LrAlert.vue'
import { openAlert } from '../../utils/dialog-promise'
import { ModalsContainer } from 'vue-final-modal'
import { ref } from 'vue'

export default {
  title: 'LR UI/LrAlert',
  component: LrAlerts,
  argTypes: {
    title: {
      control: 'text',
    },
  },
}

const Template = args => ({
  inheritAttrs: false,
  components: { LrAlerts, LrButton, ModalsContainer },
  setup() {
    const showModal = ref(false)

    return {
      args,
      openHandler: () => (showModal.value = true),
      openModal: () => {
        openAlert(LrAlerts, { title: 'test alert' })
      },
      showModal,
    }
  },
  template: ` <lr-button @click="openModal">show alert</lr-button>
              <ModalsContainer/>`,
})

export const Default = Template.bind({})
Default.args = {}
