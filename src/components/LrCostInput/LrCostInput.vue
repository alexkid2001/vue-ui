<template>
  <div
    class="lr-input lr-input--currency"
    :class="{ 'lr-input--warning': isLimit }"
  >
    <input
      type="text"
      class="lr-input__input"
      :class="{ 'lr-input--currency': currency }"
      v-model="text"
      ref="refInput"
      :disabled="props.disabled"
      @input="onInput"
      @change="onChange"
      @blur="onChange"
    />
    <span class="lr-input__currency" v-if="currency">{{ currency }}</span>
  </div>
</template>

<script lang="ts" setup>
import './styles.scss'
import { price2String, priceFormat, string2Price } from '@/utils/numbers'
import {
  computed,
  defineEmits,
  withDefaults,
  ref,
  toRefs,
  onBeforeMount,
} from 'vue'

const props = withDefaults(
  defineProps<{
    currency?: string
    decimalSymbol?: string
    showDecimals?: boolean
    allowNull?: boolean
    modelValue: number | string
    highLimit?: number
    disabled?: boolean
  }>(),
  {
    currency: '',
    decimalSymbol: ',',
    showDecimals: false,
    allowNull: false,
    modelValue: 0,
    highLimit: 200,
    disabled: false,
  }
)

const emits = defineEmits(['update:modelValue'])

const refInput = ref<HTMLElement | null>(null)
const { highLimit } = toRefs(props)
const text = ref<string>()

const onInput = (event: Event) => {
  const { data } = event as MessageEvent<string>
  text.value = priceFormat(data, text.value)
}

const onChange = (event: Event) => {
  ;(event.target as HTMLElement).blur()

  let t = text.value?.replace(props.decimalSymbol, '.')

  if (t === '' && props.allowNull)
    return emits('update:modelValue', string2Price(t))
  if (t === '') t = '0'

  text.value = price2String(Number(t), props.decimalSymbol, props.showDecimals) //getString(Number(t));
  emits('update:modelValue', string2Price(String(t)))
}

const isLimit = computed(() => {
  return highLimit.value && props.modelValue > highLimit.value
})

onBeforeMount(() => {
  text.value = price2String(
    Number(props.modelValue),
    props.decimalSymbol,
    props.showDecimals
  ) //getString(props.modelValue)
})
</script>
