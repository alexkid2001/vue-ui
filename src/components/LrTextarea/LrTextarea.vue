<template>
  <div class="lr-textarea" :class="classObj">
    <label class="lr-textarea__wrap">
      <textarea
        class="lr-textarea__input custom-scroll"
        :value="modelValue"
        @input="onInput"
        placeholder="placeholder"
        ref="refInput"
        :name="props.name"
      ></textarea>
      <!--      <slot name="label" v-if="$slots.label"></slot>-->
      <span class="lr-textarea__label">{{ label }}</span>
      <lr-ico
        class="lr-textarea__clean-button"
        icoName="close_small"
        @iconClick="cleanField"
        v-if="cleanable"
      ></lr-ico>
    </label>
    <span class="lr-textarea__error-message" v-if="error">{{ error }}</span>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  onMounted,
  ref,
  toRefs,
  defineEmits,
  defineProps,
  withDefaults,
} from 'vue'
import './styles.scss'
import LrIco from '../LrIco/LrIco.vue'

const props = withDefaults(
  defineProps<{
    disabled?: boolean
    error?: string
    modelValue: string
    label?: string
    classes?: string
    autosize?: boolean
    cleanable?: boolean
    name?: string
  }>(),
  {
    disabled: false,
    error: '',
    label: '',
    classes: '',
    autosize: false,
    cleanable: false,
    name: ''
  }
)

const emits = defineEmits(['update:modelValue'])

const { disabled, error, label, classes, autosize, cleanable } = toRefs(props)
const refInput = ref<HTMLElement>()
const refLabel = ref<HTMLElement>()
const classObj = computed(() => [
  disabled.value ? 'disabled' : '',
  error.value ? 'error' : '',
  autosize.value ? 'lr-textarea--autosize' : '',
  cleanable.value ? 'lr-textarea--cleanable' : '',
  classes.value,
])

const autoGrow = () => {
  if (refInput.value && autosize.value) {
    refInput.value.style.height = 'auto'
    refInput.value.style.height = `${refInput.value.scrollHeight}px`
  }
}

const onInput = (event: any) => {
  autoGrow()
  emits('update:modelValue', event.target.value)
}

const cleanField = () => {
  ;(refInput.value as HTMLInputElement).value = ''
  autoGrow()
  emits('update:modelValue', '')
}

onMounted(() => autoGrow())
</script>
