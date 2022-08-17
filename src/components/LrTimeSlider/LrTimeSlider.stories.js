// import LrTimeSlider from 'LrTimeSlider'
import { LrTimeSlider } from '../../index'
import { ref } from 'vue'
import { times } from './times'

export default {
  title: 'LR UI/LrTimeSlider',
  component: LrTimeSlider,
  argTypes: {
    currency: {
      control: 'text',
      default: '€',
    },
    time: {
      control: 'text',
    },
  },
}

const Template = args => ({
  components: { LrTimeSlider },

  setup() {
    const time = ref(args.time)
    const fee = ref()

    return {
      args,
      time,
      fee,
      times,
    }
  },
  template: `<lr-time-slider
                             v-model="time" 
                             v-model:fee="fee"
                             :intervals="times">
            </lr-time-slider>
            <div>time = {{ time }}</div>
            <div>fee = {{ fee }}</div>`,
})

export const Primary = Template.bind({})
Primary.args = {
  time: 610,
}
