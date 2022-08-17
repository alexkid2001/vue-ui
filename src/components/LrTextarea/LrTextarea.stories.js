import LrTextarea from './LrTextarea.vue'
import { ref } from 'vue'

export default {
  title: 'LR UI/LrTextarea',
  component: LrTextarea,
  argTypes: {
    label: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'text',
    },
    value: {
      control: 'text',
      default: '',
    },
    autosize: {
      control: 'boolean',
    },
    cleanable: {
      control: 'boolean',
    },
  },
}

const Template = args => ({
  components: { LrTextarea },
  setup() {
    const fieldValue = ref(args.value)

    return {
      args,
      fieldValue,
    }
  },
  template: `<lr-textarea v-model="fieldValue" 
                          :label="args.label"
                          :disabled="args.disabled"
                          :error="args.error"
                          :autosize="args.autosize"
                          :cleanable="args.cleanable"
                          ></lr-textarea>
  <div>value = {{ fieldValue }}</div>`,
})

export const Default = Template.bind({})
Default.args = {
  label: 'Ваш email',
  value: '',
}
export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Password',
  value: 'Same text',
  disabled: true,
}

export const Error = Template.bind({})
Error.args = {
  label: 'Ваш email',
  value: 'test Text',
  error: 'Error Message',
}

export const Autosize = Template.bind({})
Autosize.args = {
  label: 'Адрес',
  value: 'test Text',
  autosize: true,
  cleanable: true,
}
