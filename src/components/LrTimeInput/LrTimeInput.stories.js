// import LrTimeInput from "./LrTimeInput";
import { LrTimeInput } from '../../index'
import { ref } from 'vue'

export default {
  title: 'LR UI/LrTimeInput',
  component: LrTimeInput,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
    errorMessage: {
      control: 'text',
    },
    time: {
      control: 'text',
    },
  },
}

const Template = args => ({
  components: { LrTimeInput },

  setup() {
    const time = ref(args.time)

    return {
      args,
      time,
      onChange: value => {
        console.log(value)
      },
    }
  },
  template: `<lr-time-input 
                v-model="time" 
                :label="args.label"
                :disabled="args.disabled"
                :error="args.error"
                :error-message="args.errorMessage"
                @changeTime="onChange">
            </lr-time-input>
  
            <div>time = {{ time }}</div>`,
})

export const Primary = Template.bind({})
Primary.args = {
  time: '1200',
  label: 'Введите время',
}
