// import LrSelect from "./LrSelect";
import { LrSelect } from '../../index'
import { places } from './places'
import { computed, ref } from 'vue'

export default {
  title: 'LR UI/LrSelect',
  component: LrSelect,
  argTypes: {
    label: {
      control: 'text',
      default: 'LrSelect label',
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
    errorMessage: {
      control: 'text',
    },
    autocomplete: {
      control: 'boolean',
    },
    id: {
      control: 'text',
      default: '6',
    },
    name: {
      control: 'text',
      default: 'Villa LUX',
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
    },
    darkTheme: {
      control: 'boolean',
    },
    dataType: {
      control: 'select',
      options: ['object', 'string'],
    },
  },
}

const Template = args => ({
  components: { LrSelect },

  setup() {
    const isObjectData = computed(() => args.dataType === 'object')
    const place = ref(args.id)
    const test = ref('')
    const placesArray = places.map(item => item.label)
    const changeValue = () =>
      place.value === 6 ? (place.value = 9) : (place.value = 6)

    return {
      args,
      place,
      test,
      places,
      isObjectData,
      placesArray,
      changeValue,
    }
  },
  template: `
    <lr-select
      :label="args.label"
      v-model="place"
      :data-obj="isObjectData? places : placesArray"
      :autocomplete="args.autocomplete"
      :error="args.error"
      :error-message="args.errorMessage"
      :size="args.size"
      :dark-theme="args.darkTheme"
    >
    </lr-select>
    <div>value = {{ place }}</div>
    <button @click="changeValue">change value</button>
  `,
})

export const Select = Template.bind({})
Select.args = {
  label: 'Место выдачи',
  name: 'Villa LUX',
  id: '6',
  dataType: 'object',
}

export const Autocomplete = Template.bind({})
Autocomplete.args = {
  label: 'Ваш email',
  autocomplete: true,
  dataType: 'object',
}

export const Medium = Template.bind({})
Medium.args = {
  label: 'Место выдачи medium',
  name: 'Villa LUX',
  id: '6',
  size: 'medium',
  dataType: 'object',
}

export const Small = Template.bind({})
Small.args = {
  label: 'Место выдачи small',
  name: '',
  id: '6',
  size: 'small',
  dataType: 'object',
}

export const NativeSelect = Template.bind({})
NativeSelect.args = {
  label: 'Место выдачи',
  id: '6',
  dataType: 'string',
}
