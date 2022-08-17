// import Radio from "./LrRadio";
import { LrRadio } from '../../index'
import '../../styles/index.scss'
import { ref } from 'vue'

export default {
  title: 'LR UI/LrRadio',
  component: LrRadio,
  argTypes: {
    label1: {
      control: 'text',
      default: 'Radiobutton',
    },
    label2: {
      control: 'text',
      default: 'Radiobutton',
    },
    size: {
      control: 'select',
      options: ['normal', 'small'],
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
    radioValue: {
      control: 'text',
      default: '',
    },
  },
}

const Template = args => ({
  components: { LrRadio },

  setup() {
    const radioValue = ref(args.radioValue)

    return {
      args,
      radioValue,
    }
  },
  template: `<div>
                <lr-radio
                  v-model="radioValue"
                  name="radio"
                  :value="args.label1"
                  :disabled="args.disabled"
                  :error="args.error"
                  :size="args.size"
               >{{args.label1}}</lr-radio>
            </div>
            <div>
              <lr-radio
                v-model="radioValue"
                name="radio"
                :value="args.label2"
                :disabled="args.disabled"
                :error="args.error"
                :size="args.size"
              >{{args.label2}}</lr-radio>
            </div>
            <div>value = {{ radioValue }}</div>`,
})

export const DefaultRadio = Template.bind({})
DefaultRadio.args = {
  label1: 'Checkbox1',
  label2: 'Checkbox2',
  disabled: false,
  error: false,
  size: 'small',
  radioValue: 'Checkbox1',
}
export const ErrorRadio = Template.bind({})
ErrorRadio.args = {
  label1: 'Checkbox1',
  label2: 'Checkbox2',
  disabled: false,
  error: true,
  size: 'small',
  radioValue: 'Checkbox1',
}
