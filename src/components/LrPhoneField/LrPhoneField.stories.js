// import LrPhoneField from 'LrPhoneField'
import { LrPhoneField } from '../../index'
import '../../styles/index.scss'
import countries from './countries'
import { ref } from 'vue'

export default {
  title: 'LR UI/LrPhoneField',
  component: LrPhoneField,
  argTypes: {
    message: {
      control: 'text',
    },
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
      options: ['large', 'medium', 'small'],
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
  components: { LrPhoneField },

  setup() {
    const phoneNumber = ref('')

    return {
      countries,
      phoneNumber,
      args,
    }
  },
  template: `<LrPhoneField
                v-model="phoneNumber"
                :size="args.size"
                :error="args.error"
              />
              <div>Phone Number = {{ phoneNumber}}</div>
  `,
})

export const PhoneField = Template.bind({})
PhoneField.args = {
  message:
    'Укажите доступные по номеру мессенджеры. Мы будем стараться в первую очередь связываться по ним',
}
export const ErrorPhoneField = Template.bind({})
ErrorPhoneField.args = {
  message:
    'Укажите доступные по номеру мессенджеры. Мы будем стараться в первую очередь связываться по ним',
}
