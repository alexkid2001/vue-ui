<template>
  <label class="checkbox" :class="[classObj, myClass]">
    <input
      type="checkbox"
      class="checkbox__input"
      v-bind="myAttrs"
      :checked="checked"
      @change="onChange"
    />
    <span class="checkbox__label"><slot></slot></span>
  </label>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { toRefs, computed, defineEmits, withDefaults, useAttrs } from 'vue'
import './styles.scss'

const props = withDefaults(
  defineProps<{
    disabled?: boolean
    error?: boolean
    size?: string
    modelValue: unknown[] | boolean | null
    value?: string | number | boolean
  }>(),
  {
    disabled: false,
    error: false,
    size: '',
    modelValue: null,
    value: false,
  }
)

const emits = defineEmits(['update:modelValue', 'change'])
const attrs = useAttrs()
const { class: myClass, ...myAttrs } = attrs
const { disabled, error, size, modelValue } = toRefs(props)
const classObj = computed(() => ({
  disabled: disabled.value,
  error: error.value,
  'checkbox--sm': size.value === 'small',
}))
const isValueArray = computed(() => Array.isArray(modelValue.value))
const checked = computed(() => {
  if (isValueArray.value)
    return (modelValue.value as any[]).includes(props.value)
  return modelValue.value
})
const onChange = (event: any) => {
  if (isValueArray.value) {
    let res = modelValue.value as any[]
    if (event.target.checked) {
      if (!res.includes(props.value)) res.push(props.value)
      emits('update:modelValue', res)
      emits('change', res)
    } else {
      const index = res.indexOf(props.value)
      if (index >= 0) {
        res.splice(index, 1)
        emits('update:modelValue', res)
        emits('change', res)
      }
    }
  } else {
    emits('update:modelValue', event.target.checked)
    emits('change', event.target.checked)
  }
}
</script>
