import LrDaySettings from './LrDaySettings.vue'
import { ref } from 'vue'

export default {
  title: 'LR UI/LrDaySettings',
  component: LrDaySettings,
  argTypes: {
    InputValue: {
      control: 'text',
    },
  },
}

const Template = args => ({
  components: { LrDaySettings },

  setup() {
    const value = ref([])
    return {
      args,
      value,
    }
  },
  template: `
    <lr-day-settings v-model="value"></lr-day-settings>
    <div style="margin-top:30px">{{ value }}</div>`,
})

export const Default = Template.bind({})
Default.args = {}
