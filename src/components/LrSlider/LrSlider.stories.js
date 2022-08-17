import LrSlider from './LrSlider.vue'
import { ref } from 'vue'

export default {
  title: 'LR UI/LrSlider',
  component: LrSlider,
  argTypes: {},
}

const Template = args => ({
  components: { LrSlider },

  setup() {
    const value = ref([0, 10])
    return {
      value,
    }
  },
  template: `
    <lr-slider v-model="value"/>
    <div>{{ value }}</div>
    
  `,
})

export const Slider = Template.bind({})
Slider.args = {}
