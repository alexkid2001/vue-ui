import Calendar from './Calendar.vue'
import { ref } from 'vue'
import * as dayjs from 'dayjs'

export default {
  title: 'Other/Calendar',
  component: Calendar,
  argsType: {
    range: {
      control: 'boolean',
    },
    months: {
      control: 'select',
      options: [1, 2, 3],
    },
    date1: {
      type: 'text',
    },
    date2: {
      type: 'text',
    },
  },
}

const Template = args => ({
  components: { Calendar },
  setup() {
    const months = ref(args.months)
    const date1 = dayjs().format('YYYY-MM-DD')
    const date2 = dayjs().add(5, 'day').format('YYYY-MM-DD')
    const date = ref([date1, date2])

    return {
      args,
      date,
      date1,
      date2,
      months,
    }
  },
  template: `<div style="width:100vw">
      <Calendar v-model="date" :showMonths="args.months"  />
    </div>
    
    <div style="margin-top:50px">{{ date }}</div>`,
})

export const DefaultCalendar = Template.bind({})
DefaultCalendar.args = {
  range: false,
  months: 1,
}