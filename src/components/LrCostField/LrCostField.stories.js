import { LrCostField } from '../../index'
import { ref } from 'vue'

export default {
  title: 'LR UI/LrCostField',
  component: LrCostField,
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
    showDecimals: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
}

const Template = args => ({
  components: { LrCostField },

  setup() {
    const price = ref(args.value)

    return {
      args,
      price,
    }
  },
  template: `<lr-cost-field 
                v-model="price"
                label="Цена"
                :currency="args.currency"
                :high-limit="args.highLimit"
                :show-decimals="args.showDecimals"
                :disabled="args.disabled"
                :size="args.size"
                :allow-null="args.allowNull"
                size="large">
            </lr-cost-field>
  
            <div>Price = {{ price }}</div>
            <input type="text" v-model="price">`,
})

export const Default = Template.bind({})
Default.args = {
  currency: '€',
  value: 0,
}

export const Preset = Template.bind({})
Preset.args = {
  currency: '₽',
  decimalSymbol: ',',
  value: 30.5,
}

export const limited = Template.bind({})
limited.args = {
  currency: '₽',
  decimalSymbol: ',',
  value: 300.5,
  highLimit: 100,
}
