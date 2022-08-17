<template>
  <div class="lr-phone-field">
    <div class="lr-phone-field__wrap">
      <lr-select
        :label="props.phoneCodeLabel"
        classes="select--phone-field"
        v-model="country"
        :data-obj="countriesList"
        autocomplete
        :error="props.error"
        :size="size"
        id-field="name"
        display-field="name"
        search-field="label"
        @onChange="onChangeCountry"
        ref="lrSelect"
      >
        <template v-slot:option="item">
          {{ item.option.label }}
        </template>
      </lr-select>

      <lr-field
        classes="field--phone-field"
        :class="[{ open: isOpen }]"
        v-model="phoneNumber"
        :label="props.label"
        button-type="clean"
        @input="onInput"
        @iconClick="clearFields"
        :size="props.size"
        :error="props.error"
        :name="props.name"
      >
      </lr-field>
    </div>
    <span
      class="lr-phone-field__error-message"
      v-if="!!props.error && !!props.errorMessage"
      >{{ props.errorMessage }}</span
    >
  </div>
</template>

<script lang="ts" setup>
import {
  parsePhoneNumberFromString,
  formatIncompletePhoneNumber,
  CountryCode,
} from 'libphonenumber-js'
import LrField from '@/components/LrField/LrField.vue'
import LrSelect from '@/components/LrSelect/LrSelect.vue'
import './styles.scss'
import { formatCountriesFull } from '@/utils'
import {
  ref,
  computed,
  defineProps,
  withDefaults,
  defineEmits,
  onMounted,
} from 'vue'
import { SizeVariation } from '@/types/global'
import countries from './countries'
interface CountryItem {
  label: string
  name: string
  dialCode: string
}

interface Props {
  modelValue: string
  size?: SizeVariation
  error?: boolean
  countries?: string[]
  label?: string
  phoneCodeLabel?: string
  errorMessage?: string
  name?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'large',
  error: false,
  countries: () => countries as [],
  label: 'Телефон для связи',
  phoneCodeLabel: 'Страна',
  errorMessage: '',
  name: '',
})

const emits = defineEmits(['update:modelValue'])

const fetchCountryCode = async (): Promise<string> => {
  try {
    const res = await fetch('https://ip2c.org/s')
    const lang = await res.text()
    if (res && lang[0] && lang[0] === '1') return lang.substr(2, 2)
    else return 'UK'
  } catch {
    return 'UK'
  }
}

const country = ref<CountryCode | string>('')
const phoneNumber = ref('')
const clearCountry = () => {
  country.value = ''
}

onMounted(async () => {
  country.value = await fetchCountryCode()
  const curItem = countriesList.value.find(item => item.name === country.value)
  phoneNumber.value = curItem?.dialCode ?? ''
  emits('update:modelValue', phoneNumber.value)
})

const onInput = (event: Event) => {
  const { target } = event
  if (target && target instanceof HTMLInputElement) {
    let newVal = target.value.replace(/[^0-9+]/g, '')

    if (newVal && newVal[0] && newVal[0] !== '+') {
      newVal = '+' + newVal
    }

    if (newVal === '' || newVal === '+') {
      clearCountry()
    }
    const number = parsePhoneNumberFromString(
      newVal,
      country.value as CountryCode
    )

    if (
      number &&
      (!country.value || (number.country && number.country !== country.value))
    ) {
      const parsedCountry = countriesList.value.find(
        ({ name }) => number.country === name
      )
      if (parsedCountry) country.value = parsedCountry.name
    }

    phoneNumber.value = formatIncompletePhoneNumber(
      newVal,
      country.value as CountryCode
    )
    emits('update:modelValue', phoneNumber.value, !!number && number.isValid())
  }
}

const countriesList = computed(() =>
  formatCountriesFull(props.countries).map(
    ({ iso2, dialCode, name }): CountryItem => ({
      label: `${name}, +${dialCode}`,
      name: iso2,
      dialCode: `+${dialCode}`,
    })
  )
)

const onChangeCountry = (val: any) => {
  if (!val) return
  phoneNumber.value = val.dialCode
  emits('update:modelValue', phoneNumber.value)
}

const clearFields = () => {
  clearCountry()
  emits('update:modelValue', (phoneNumber.value = ''))
}

const lrSelect = ref<any>(null)
const isOpen = computed<string>(() => lrSelect.value?.isOpen ?? false)
</script>
