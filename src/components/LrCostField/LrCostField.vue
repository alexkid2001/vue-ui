<template>
  <lr-field
    type="text"
    :label="label"
    class="lr-field--price"
    :class="{ 'field--currency': currency, 'field--warning': isLimit }"
    v-model="text"
    :disabled="props.disabled"
    ref="refInput"
    @input="onInput"
    @change="onChange"
    @blur="onChange"
    :size="props.size"
    :dark-theme="darkTheme"
  >
    <span class="field__currency" v-if="currency">{{ currency }}</span>
  </lr-field>
</template>

<script lang="ts" setup>
import './styles.scss'
import { price2String, priceFormat, string2Price } from '@/utils/numbers'
import { computed, defineEmits, withDefaults, ref, toRefs, watch } from 'vue'
import { LrField } from '@/index'
import { SizeVariation } from '@/types/global'

const props = withDefaults(
  defineProps<{
    currency?: string
    decimalSymbol?: string
    showDecimals?: boolean
    allowNull?: boolean
    modelValue: number | string
    highLimit?: number
    label?: string
    size?: SizeVariation
    darkTheme?: boolean
    disabled?: boolean
  }>(),
  {
    currency: '',
    decimalSymbol: ',',
    showDecimals: false,
    allowNull: false,
    modelValue: 0,
    highLimit: 200,
    label: 'label',
    size: 'large',
    darkTheme: false,
    disabled: false,
  }
)

const emits = defineEmits(['update:modelValue'])

const refInput = ref<HTMLElement | null>(null)
const { highLimit, modelValue } = toRefs(props)
// const text = ref<string>()
const text = ref(
  price2String(
    props.modelValue as number,
    props.decimalSymbol,
    props.showDecimals
  )
)

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

watch(
  () => modelValue.value,
  val => {
    text.value = price2String(
      val as number,
      props.decimalSymbol,
      props.showDecimals
    )
  }
)
</script>
