<template>
  <div
    ref="dot"
    :class="dotClasses"
    :aria-valuetext="tooltipValue"
    @mousedown="dragStart"
    @touchstart="dragStart"
  >
    <slot v-if="props.dotSlot"></slot>
    <template v-else>
      <div :class="handleClasses" :style="props.dotStyle" />
      <div :class="tooltipClasses" v-if="props.tooltip !== 'none'">
        <slot v-if="props.tooltipSlot"></slot>
        <template v-else>
          <div :class="tooltipInnerClasses" :style="props.tooltipStyle">
            <span class="vue-slider-dot-tooltip-text">
              {{ tooltipValue }}
            </span>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref, withDefaults, defineEmits, defineProps, computed } from 'vue'
import {
  Value,
  Styles,
  Position,
  TooltipProp,
  TooltipFormatter,
} from './typings'

import './styles/dot.scss'

const props = withDefaults(
  defineProps<{
    value: Value
    tooltip: TooltipProp
    dotStyle?: Styles
    tooltipStyle?: Styles
    tooltipPlacement?: Position
    tooltipFormatter?: TooltipFormatter
    focus?: boolean
    disabled?: boolean
    dotSlot?: any
    tooltipSlot?: any
  }>(),
  {
    value: 0,
    type: 'top',
    focus: false,
    disabled: false,
    tooltipPlacement: 'top',
  }
)

const emits = defineEmits(['dragStart'])

const dot = ref()

const dotClasses = computed(() => {
  return [
    'vue-slider-dot',
    {
      'vue-slider-dot-hover':
        props.tooltip === 'hover' || props.tooltip === 'active',
      'vue-slider-dot-disabled': props.disabled,
      'vue-slider-dot-focus': props.focus,
    },
  ]
})

const handleClasses = computed(() => {
  return [
    'vue-slider-dot-handle',
    {
      'vue-slider-dot-handle-disabled': props.disabled,
      'vue-slider-dot-handle-focus': props.focus,
    },
  ]
})

const tooltipClasses = computed(() => {
  return [
    'vue-slider-dot-tooltip',
    [`vue-slider-dot-tooltip-${props.tooltipPlacement}`],
    {
      'vue-slider-dot-tooltip-show': showTooltip.value,
    },
  ]
})

const tooltipInnerClasses = computed(() => {
  return [
    'vue-slider-dot-tooltip-inner',
    [`vue-slider-dot-tooltip-inner-${props.tooltipPlacement}`],
    {
      'vue-slider-dot-tooltip-inner-disabled': props.disabled,
      'vue-slider-dot-tooltip-inner-focus': props.focus,
    },
  ]
})

const showTooltip = computed((): boolean => {
  switch (props.tooltip) {
    case 'always':
      return true
    case 'none':
      return false
    case 'focus':
    case 'active':
      return !!props.focus
    default:
      return false
  }
})

const tooltipValue = computed(
  (): Value => {
    if (props.tooltipFormatter) {
      return typeof props.tooltipFormatter === 'string'
        ? props.tooltipFormatter.replace(/\{value\}/, String(props.value))
        : props.tooltipFormatter(props.value)
    } else {
      return props.value
    }
  }
)

const dragStart = (e: MouseEvent | TouchEvent) => {
  if (props.disabled) {
    return false
  }

  emits('dragStart')
}
</script>
