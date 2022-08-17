// import LrButton from "./LrButton";
import { LrButton } from '../../index'

export default {
  title: 'LR UI/LrButton',
  component: LrButton,
  argTypes: {
    label: {
      control: 'text',
    },
    type: {
      control: 'select',
      options: ['simple', 'secondary', 'cancel', 'tertiary', 'link'],
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
    },
    disabled: {
      control: 'boolean',
    },
    iconType: {
      control: 'select',
      options: ['no', 'left', 'right', 'only_icon'],
    },
    iconName: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: ['default', 'brand'],
    },
  },
}

const Template = args => ({
  components: { LrButton },
  setup() {
    return { args }
  },
  template: '<lr-button v-bind="args" >{{ args.label }}</lr-button>',
})

export const Button = Template.bind({})
Button.args = {
  label: 'LrButton',
}

export const LinkButton = Template.bind({})
LinkButton.args = {
  label: 'LrButton',
  type: 'link',
  iconName: 'trash',
  iconType: 'left',
}
