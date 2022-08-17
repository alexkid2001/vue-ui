// import LrButton from "../LrButton/LrButton";
import { LrButton, LrModal } from '../../index'
import { ref } from 'vue'

export default {
  title: 'LR UI/LrModal',
  component: LrModal,
  argTypes: {
    closeButton: {
      control: 'boolean',
    },
    title: {
      control: 'text',
    },
  },
}

const Template = args => ({
  inheritAttrs: false,
  components: { LrModal, LrButton },
  setup() {
    const showModal = ref(false)

    return {
      args,
      showModal,
    }
  },
  template: `<lr-modal v-model="showModal" v-bind="args">
              <template v-slot>
                same contents
              </template>
            </lr-modal>
    <lr-button @click="showModal=true">show alert</lr-button>`,
})

export const Default = Template.bind({})
Default.args = {}
