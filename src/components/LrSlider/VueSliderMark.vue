<template>
  <div :class="marksClasses">
    <slot v-if="props.stepSlot"></slot>
    <template v-else>
      <div :class="stepClasses" :style="styles" />
    </template>
    <template v-if="!props.hideLabel">
      <slot v-if="props.labelSlot"></slot>
      <template v-else>
        <div
          :class="labelClasses"
          :style="labelStyles"
          @click="labelClickHandle"
        >
          {{ props.mark.label }}
        </div>
      </template>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { Mark, Styles } from './typings'

import './styles/mark.scss'
import { computed, defineProps, defineEmits, StyleValue } from 'vue'

const props = defineProps<{
  mark: Mark
  hideLabel?: boolean
  stepStyle?: StyleValue
  stepActiveStyle?: Styles
  labelStyle?: StyleValue
  labelActiveStyle?: StyleValue
  stepSlot: any
  labelSlot: any
}>()

const emits = defineEmits(['pressLabel'])

const marksClasses = computed(() => {
  return [
    'vue-slider-mark',
    {
      'vue-slider-mark-active': props.mark.active,
    },
  ]
})

const stepClasses = computed(() => {
  return [
    'vue-slider-mark-step',
    {
      'vue-slider-mark-step-active': props.mark.active,
    },
  ]
})

const labelClasses = computed(() => {
  return [
    'vue-slider-mark-label',
    {
      'vue-slider-mark-label-active': props.mark.active,
    },
  ]
})

const labelStyles = computed(
  (): StyleValue => {
    return [
      props.labelStyle ? props.labelStyle : '',
      props.mark.labelStyle ? props.mark.labelStyle : '',
      props.mark.active
        ? props.labelActiveStyle
          ? props.labelActiveStyle
          : ''
        : '',
      props.mark.active
        ? props.mark.labelActiveStyle
          ? props.mark.labelActiveStyle
          : ''
        : '',
    ]
  }
)

const styles = computed(
  (): StyleValue => [
    props.stepStyle ? props.stepStyle : '',
    props.mark.style ? props.mark.style : '',
    props.mark.active
      ? props.stepActiveStyle
        ? props.stepActiveStyle
        : ''
      : '',
    props.mark.active
      ? props.stepActiveStyle
        ? props.stepActiveStyle
        : ''
      : '',
  ]
)

const labelClickHandle = (e: MouseEvent | TouchEvent) => {
  e.stopPropagation()
  emits('pressLabel', props.mark.pos)
}
</script>
