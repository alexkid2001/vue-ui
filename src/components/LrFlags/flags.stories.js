import '../../styles/index.scss'
import LrFlags from './LrFlags.vue'

export default {
  title: 'LR UI/LrFlags',
  argTypes: {
    symbol: {
      control: 'select',
      options: ['de', 'ru', 'tr', 'es', 'en'],
    },
    width: {
      control: 'number',
      default: 28,
    },
    height: {
      control: 'number',
      default: 20,
    },
  },
}

const Template = args => ({
  components: { LrFlags },
  setup() {
    return { args }
  },
  template: `
<!--  <svg><use xlink:href="src/components/LrFlags/flags.sprite.svg#DE"></use></svg>-->
<!--  <svg><use xlink:href="src/components/LrFlags/flags.sprite.svg#RU"></use></svg>-->
<!--  <svg><use xlink:href="src/components/LrFlags/flags.sprite.svg#TR"></use></svg>-->
<!--  <svg><use xlink:href="src/components/LrFlags/flags.sprite.svg#ES"></use></svg>-->
<!--  <svg><use xlink:href="src/components/LrFlags/flags.sprite.svg#GB"></use></svg>-->
  <LrFlags :width="args.width" :height="args.height" :symbol="args.symbol"/>
<!--  <LrFlags symbol="RU"/>-->
<!--  <LrFlags symbol="TR"/>-->
<!--  <LrFlags symbol="ES"/>-->
<!--  <LrFlags symbol="GB"/>-->
  
  `,
})

export const Default = Template.bind({})
Default.args = {
  symbol: 'ru',
  width: 200,
  height: 150,
}
