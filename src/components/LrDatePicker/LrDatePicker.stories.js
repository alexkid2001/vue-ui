import LrDatePicker from './LrDatePicker.vue'
import { ref } from 'vue'

export default {
  title: 'LR UI/LrDatePicker',
  component: LrDatePicker,
  argTypes: {
    size: {
      control: 'select',
      options: ['large', 'medium', 'small']
    },
  },
}

const Template = args => ({
  components: { LrDatePicker },

  setup() {
    const value = ref('2021-05-12')
    return {
      args,
      value,
    }
  },
  template: `
    <LrDatePicker v-model="value" v-bind="args"/>
    <div style="margin-top:30px">Date = {{ value }}</div>`,
})

export const Default = Template.bind({})
Default.args = {
  size: 'large'
}

