<template>
  <label class="radio" :class="classObj">
    <input
      type="radio"
      class="radio__input"
      :name="props.name"
      :value="props.value"
      :checked="isChecked"
      @change="onChange"
    />
    <span class="radio__label"><slot></slot></span>
  </label>
</template>

<script lang="ts" setup>
import './styles.scss'
import { toRefs, computed, defineEmits, withDefaults } from 'vue'

const props = withDefaults(
  defineProps<{
    disabled?: boolean
    error?: boolean
    name?: string
    value?: string | number
    size?: string
    modelValue: string | number
  }>(),
  {
    disabled: false,
    error: false,
    size: '',
  }
)

const emits = defineEmits(['update:modelValue', 'change'])

const { disabled, error, size, modelValue, value } = toRefs(props)
const classObj = computed(() => ({
  disabled: disabled.value,
  error: error.value,
  'radio--sm': size.value === 'small',
}))

const onChange = (event: any) => {
  emits('update:modelValue', event.target.value)
  emits('change', event.target.value)
}

const isChecked = computed(() => {
  return modelValue.value === value.value
})
</script>
