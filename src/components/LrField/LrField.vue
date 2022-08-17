<template>
  <label class="field" :class="classObj">
    <input
      :type="type"
      class="field__input"
      placeholder="placeholder"
      :value="modelValue"
      @input="onInput"
      ref="refInput"
      :required="props.required"
      :name="props.name"
    />
    <span class="field__label"
      >{{ label
      }}<span class="field__required" v-if="props.required">*</span></span
    >
    <lr-ico
      :class="icoClasses"
      v-if="buttonType"
      @iconClick="onIconClick"
      :ico-name="iconName"
    ></lr-ico>
    <span class="field__error-message" v-if="error">{{ errorMessage }}</span>
    <slot></slot>
  </label>
</template>

<script lang="ts" setup>
import { LrIco } from '../../index'
import { computed, toRefs, ref, defineEmits, withDefaults } from 'vue'
import { SizeVariation, TypeVariation } from '@/types/global'
import './styles.scss'

const props = withDefaults(
  defineProps<{
    buttonType?: string
    disabled?: boolean
    error?: boolean
    errorMessage?: string
    modelValue: string | number
    type?: TypeVariation
    label?: string
    classes?: string
    size?: SizeVariation
    darkTheme?: boolean
    required?: boolean
    name?: string
  }>(),
  {
    error: false,
    errorMessage: '',
    modelValue: '',
    type: 'text',
    classes: '',
    size: 'large',
    darkTheme: false,
    required: false,
    name: ''
  }
)

const emits = defineEmits(['iconClick', 'update:modelValue'])

const {
  disabled,
  error,
  buttonType,
  label,
  classes,
  size,
  darkTheme,
  errorMessage,
} = toRefs(props)
const type = ref(props.type)
const classObj = computed(() => [
  disabled.value ? 'disabled' : '',
  error?.value ? 'error' : '',
  size.value && size.value !== 'large' ? `field--${size.value}` : '',
  darkTheme.value ? 'field--dark-theme' : '',
  classes.value,
])
const iconName = ref()
const refInput = ref()
const icoClasses = computed(() => {
  let icoClasses = ''
  switch (buttonType?.value) {
    case 'clean':
      icoClasses = ''
      iconName.value = 'close_small'
      break
    case 'search':
      icoClasses = ''
      iconName.value = 'search'
      break
    case 'password':
      icoClasses = ''
      iconName.value = 'eye_open'
      break
    case 'select':
      icoClasses = 'ico-small'
      iconName.value = 'chevron_down'
      break
    case 'calendar':
      icoClasses = ''
      iconName.value = 'calendar'
      break
  }
  if (
    size.value === 'small' &&
    !icoClasses.includes('ico-small') &&
    buttonType?.value !== 'clean'
  )
    icoClasses = icoClasses + ' ico-small'
  return `${icoClasses} field__button`
})
const onInput = (event: any) => {
  emits('update:modelValue', event.target.value)
}
const onIconClick = () => {
  if (buttonType?.value === 'clean') emits('update:modelValue', '')
  if (buttonType?.value === 'password') {
    type.value = type.value === 'password' ? 'text' : 'password'
    iconName.value = type.value === 'password' ? 'eye_open' : 'eye_closed'
  }
  if (!disabled.value) emits('iconClick')
}
</script>
