import LrAmountInput from './index'
import { ref } from 'vue'

export default {
  title: 'LR UI/LrAmountInput',
  component: LrAmountInput,
  argTypes: {},
}

const Template = args => ({
  components: { LrAmountInput },
  setup() {
    const value = ref(args.value)
    return { args, value }
  },
  template: `<LrAmountInput v-model="value" v-bind="args" />
  <div style="margin-top:50px">{{value}}</div>
  `,
})

export const AmountInput = Template.bind({})
AmountInput.args = {
  value: 10,
}
