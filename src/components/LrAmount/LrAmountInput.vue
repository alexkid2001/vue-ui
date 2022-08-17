<template>
  <div class="lr-amount-input" :class="{ disabled: isDisabled }">
    <div class="lr-amount-input__action" @click="subtract">
      <LrIco ico-name="minus" />
    </div>
    <div class="lr-amount-input__value">{{ value }}</div>
    <div class="lr-amount-input__action" @click="add">
      <LrIco ico-name="plus" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineEmits, defineProps, withDefaults, ref } from 'vue'
import LrIco from '@/components/LrIco'
import './styles.scss'

const props = withDefaults(
  defineProps<{
    modelValue: number
    min?: number
    max?: number
    disabled?: boolean
  }>(),
  {
    min: -Infinity,
    max: Infinity,
    disabled: false,
  }
)
const emits = defineEmits(['update:modelValue'])
const value = ref(props.modelValue)
const isDisabled = computed(
  () => props.disabled || value.value === props.min || value.value === props.max
)
const add = (): void => {
  if (isDisabled.value) return

  if (value.value >= props.max) return
  emits('update:modelValue', ++value.value)
}
const subtract = (): void => {
  if (isDisabled.value) return

  if (value.value <= props.min) return
  emits('update:modelValue', --value.value)
}
</script>

<style scoped></style>
