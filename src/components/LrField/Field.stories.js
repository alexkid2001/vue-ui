// import Field from "./LrField";
import { LrField } from '../../index'
import { ref } from 'vue'
import { boolean } from 'smooth-scrollbar/decorators'

export default {
  title: 'LR UI/LrField',
  component: LrField,
  argTypes: {
    label: {
      control: 'text',
      default: 'Checkbox',
    },
    buttonType: {
      control: 'select',
      options: ['select', 'search', 'password', 'clean'],
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
    value: {
      control: 'text',
      default: '',
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'tel', 'url', 'number'],
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
    },
    darkTheme: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
  },
}

const Template = args => ({
  components: { LrField },
  setup() {
    const fieldValue = ref(args.value)

    return {
      args,
      fieldValue,
    }
  },
  template: `<lr-field 
                v-model="fieldValue" 
                :button-type="args.buttonType"
                :label="args.label"
                :type="args.type"
                :error="args.error"
                :error-message="args.errorMessage"
                :disabled="args.disabled"
                :size="args.size"
                :dark-theme="args.darkTheme"
                :required="args.required">
             </lr-field>
  <div>value = {{ fieldValue }}</div>`,
})

export const TextField = Template.bind({})
TextField.args = {
  label: 'Ваш email',
  type: 'text',
  required: true,
}
export const PasswordField = Template.bind({})
PasswordField.args = {
  label: 'Password',
  type: 'password',
  value: 'Password',
  buttonType: 'password',
}

export const CleanableField = Template.bind({})
CleanableField.args = {
  label: 'Ваш email',
  type: 'text',
  value: 'test Text',
  buttonType: 'clean',
}
