import LrLink from './LrLink.vue'

export default {
  title: 'LR UI/LrLink',
  component: LrLink,
  argTypes: {
    title: {
      control: 'text',
      default: 'Title',
    },
    colorType: {
      control: 'select',
      options: ['', 'blue', 'brand', 'white', 'warning', 'grey'],
    },
    iconName: {
      control: 'text',
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
    },
    href: {
      control: 'text',
    },
  },
}

const Template = args => ({
  components: { LrLink },
  setup() {
    return {
      args,
      linkClickHandler: () => {
        alert('link click')
      },
    }
  },
  template: `<lr-link v-bind="args" @linkClick.stop="linkClickHandler">{{ args.title }}</lr-link>`,
})

export const Default = Template.bind({})
Default.args = {
  title: 'Default link',
  href: 'http:/host.com/',
  iconName: '',
}
export const LeftIcon = Template.bind({})
LeftIcon.args = {
  title: 'Left Icon Title',
  iconPosition: 'left',
  iconName: 'reply',
  href: '#',
}

export const RightIcon = Template.bind({})
RightIcon.args = {
  title: 'Right Icon Title',
  iconPosition: 'right',
  iconName: 'reply',
  href: '#',
}
