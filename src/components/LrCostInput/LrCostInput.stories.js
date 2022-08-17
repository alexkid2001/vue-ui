// import LrCostInput from "./LrCostInput";
import { LrCostInput } from '../../index'
import { ref } from 'vue'

export default {
  title: 'LR UI/LrCostInput',
  component: LrCostInput,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    currency: {
      control: 'text',
    },
    decimalSymbol: {
      control: 'text',
    },
    value: {
      control: 'text',
      default: 0,
    },
    highLimit: 'text',
  },
}

const Template = args => ({
  components: { LrCostInput },

  setup() {
    const price = ref(args.value)

    return {
      args,
      price,
    }
  },
  template: `<lr-cost-input 
                v-model="price"
                v-bind="args"
  >
            </lr-cost-input>
  
            <div>Price = {{ price }}</div>`,
})

export const Default = Template.bind({})
Default.args = {
  currency: '€',
  value: 0,
}

export const Preset = Template.bind({})
Preset.args = {
  currency: '₽',
  value: 30.5,
}

export const limited = Template.bind({})
limited.args = {
  currency: '₽',
  value: 300.5,
  highLimit: 100,
}
