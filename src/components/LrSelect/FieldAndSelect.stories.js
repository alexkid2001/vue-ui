import { LrSelect } from '../../index'
import { LrField } from '../../index'
import { LrButton } from '../../index'
import { places } from './places'
import { computed, ref } from 'vue'

export default {
  title: 'LR UI/Field & Select',
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
  components: { LrSelect, LrField, LrButton },

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
    <div class="flex" style="display: flex; align-items: center; gap: 16px;">
      <lr-field
        :label="args.label"
        v-model="place"
        :data-obj="isObjectData? places : placesArray"
        :autocomplete="args.autocomplete"
        :error="args.error"
        :size="args.size"
        :dark-theme="args.darkTheme"
        type="text"
        button-type="clean"
      />
      <lr-select
        :label="args.label"
        v-model="place"
        :data-obj="isObjectData? places : placesArray"
        :autocomplete="args.autocomplete"
        :error="args.error"
        :size="args.size"
        :dark-theme="args.darkTheme"
      >
      </lr-select>
      <LrButton icon-type="only_icon" icon-name="trash" type="link"/>
    </div>
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
