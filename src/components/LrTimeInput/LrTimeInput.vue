<template>
  <lr-field
    :label="label"
    :model-value="showValue"
    :disabled="props.disabled"
    :error="props.error"
    :error-message="props.errorMessage"
    classes="field--time-input"
    @input="onInput"
    @change="onChange"
    @blur="onChange"
    ref="input"
  >
  </lr-field>
</template>

<script lang="ts" setup>
import LrField from '../LrField/LrField.vue'
import './styles.scss'
import { time2Min, min2Time } from '@/utils/numbers'
import { computed, defineEmits, defineProps, ref } from 'vue'

const props = defineProps<{
  label?: string
  modelValue: string | number
  disabled?: boolean
  error?: boolean
  errorMessage?: string
}>()

const emits = defineEmits(['update:modelValue', 'changeTime'])

const input = ref<HTMLElement | null>(null)
const showValue = computed({
  get(): string {
    return min2Time(Number(props.modelValue))
  },
  set(): void {},
})
const onInput = (event: Event) => {
  const { value } = event.target as HTMLTextAreaElement
  const res = value
    .replace(/\D/g, '')
    .replace(/^[^0-2]/, '')
    .replace(/^([2-9])[4-9]/, '$1')
    .replace(/^(\d{2})(\d)/, '$1:$2')
    .replace(/^(\d{2}[:h])[^0-5]/, '$1')
    .replace(/^(\d{2}:[0-5])[^0-9]/, '$1')
    .replace(/^(\d{2}:\d[0-9])./, '$1')
  ;(event.target as HTMLTextAreaElement).value = res
}

const completeTimeComplete = (val: string): string => {
  const [hours, minutes] = val.split(':')
  if (!hours || hours === '') return '10:00'
  if (!minutes || minutes === '') return `${('0' + hours).slice(-2)}:00`
  if (minutes.length < 2) return `${('0' + hours).slice(-2)}:${minutes}0`
  return val
}

const onChange = (event: Event) => {
  let { value } = event.target as HTMLTextAreaElement
  const completedValue = completeTimeComplete(value)
  showValue.value = completedValue
  emits('update:modelValue', time2Min(completedValue))
  emits('changeTime', time2Min(completedValue))
}
</script>
