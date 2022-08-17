// import LrDailyCost from "./LrDailyCost";
// import { LrDailyCost } from '../../index'
import LrDailyCost from './LrDailyCost.vue'
import { ref } from 'vue'
import { INTERVAL_TYPES } from '../../utils/enums'

export default {
  title: 'LR UI/LrDailyCost',
  component: LrDailyCost,
  argTypes: {
    label: {
      control: 'text',
      default: 'Понедельник',
    },
    labelFree: {
      type: 'text',
    },
    labelHoliday: {
      type: 'text',
    },
    saveButtonLabel: {
      type: 'text',
    },
    checked: {
      type: 'boolean',
    },
    modelValue: {
      description: '{"start": 0,"end": 300,"fee": 60,"type": "1"}',
    },
  },
}

const Template = args => ({
  components: { LrDailyCost },

  setup() {
    const value = ref([
      {
        start: 0,
        end: 300,
        fee: 60,
        type: INTERVAL_TYPES.DROPOFF,
      },
      {
        start: 300,
        end: 540,
        fee: 30,
        type: INTERVAL_TYPES.DROPOFF,
      },
      {
        start: 540,
        end: 1140,
        fee: 0,
        type: INTERVAL_TYPES.FREE,
      },
      {
        start: 1140,
        end: 1440,
        fee: 20,
        type: INTERVAL_TYPES.HOLIDAY,
      },
    ])
    const checked = ref(args.checked)
    const onChecked = val => {
      checked.value = val
    }
    return {
      args,
      value,
      checked,
      onChecked,
    }
  },
  template: `<lr-daily-cost 
                  v-model="value"
                  v-model:checked="checked"
                  :label="args.label"
                  >
            </lr-daily-cost>
            <span>Checked = {{ checked }}</span>
            <pre>{{ value }}</pre>`,
})

export const Default = Template.bind({})
Default.args = {
  label: 'Понеделькик',
  labelFree: 'Бесплатно Б/П',
  labelHoliday: 'Не работаю Н/Р',
  saveButtonLabel: 'Сохранить',
  checked: true,
}

export const NotSelected = Template.bind({})
NotSelected.args = {
  label: 'Понеделькик',
  labelFree: 'Бесплатно Б/П',
  labelHoliday: 'Не работаю Н/Р',
  saveButtonLabel: 'Сохранить',
  checked: false,
}
