// import LrCheckbox from  './LrCheckbox'
import { LrCheckbox } from '../../index'
import '../../styles/index.scss'
import { ref } from 'vue'

export default {
  title: 'LR UI/LrCheckbox',
  component: LrCheckbox,
  argTypes: {
    label: {
      control: 'text',
      default: 'Checkbox',
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
    onChange: {},
    selectedItem: {
      control: 'boolean',
      default: true,
    },
  },
}

const Template = args => ({
  components: { LrCheckbox },
  setup() {
    const checkboxValue = ref(null)

    return {
      args,
      checkboxValue,
    }
  },
  template: `<lr-checkbox
                v-model="checkboxValue"
                :disabled="args.disabled"
                :error="args.error"
                :size="args.size"
             >{{args.label}}</lr-checkbox>
  <div>value = {{ checkboxValue }}</div>`,
})

const TemplateGroup = args => ({
  components: { LrCheckbox },
  setup() {
    const checkboxValue = ref([1, 3])

    return {
      args,
      checkboxValue,
    }
  },
  template: `<lr-checkbox
                v-model="checkboxValue"
                :value="1"
                :disabled="args.disabled"
                :error="args.error"
                :size="args.size"
                class="myyyyyyy"
             >Value 1</lr-checkbox>
            <lr-checkbox
              v-model="checkboxValue"
              :value="2"
              :disabled="args.disabled"
              :error="args.error"
              :size="args.size"
            >Value 2</lr-checkbox>
            <lr-checkbox
              v-model="checkboxValue"
              :value="3"
              :disabled="args.disabled"
              :error="args.error"
              :size="args.size"
            >Value 3</lr-checkbox>
  <div>value = {{ checkboxValue }}</div>`,
})

export const Checkbox = Template.bind({})
Checkbox.args = {
  disabled: false,
  error: true,
  selectedItem: true,
}

export const GroupCheckboxes = TemplateGroup.bind({})
GroupCheckboxes.args = {
  disabled: false,
  error: true,
  selectedItem: true,
}
