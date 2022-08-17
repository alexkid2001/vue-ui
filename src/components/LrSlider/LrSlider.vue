<template>
  <div
    :class="containerClasses"
    ref="container"
    :style="containerStyles"
    @click="clickHandle"
    @touchstart="dragStartOnProcess"
    @mousedown="dragStartOnProcess"
    v-bind="attrs"
  >
    <div ref="rail" class="vue-slider-rail" :style="props.railStyle">
      <template v-for="(process, idx) in processArray">
        <slot v-if="$slots.process" v-bind="process" name="process"></slot>
        <div
          v-else
          class="vue-slider-process"
          :key="`process-${idx}`"
          :style="process.style"
        />
      </template>
      <div class="vue-slider-marks" v-if="sliderMarks">
        <slot v-if="$slots.mark"></slot>
        <template v-else>
          <vue-slider-mark
            v-for="(mark, index) in control?.markList"
            :key="`mark-${index}`"
            :mark="mark"
            :hideLabel="props.hideLabel"
            :style="{
              [isHorizontal ? 'height' : 'width']: '100%',
              [isHorizontal ? 'width' : 'height']: tailSize,
              [mainDirection]: `${mark.pos}%`,
            }"
            :stepStyle="props.stepStyle"
            :stepActiveStyle="props.stepActiveStyle"
            :labelStyle="props.labelStyle"
            :labelActiveStyle="props.labelActiveStyle"
            @pressLabel="pos => props.clickable && setValueByPos(pos)"
            :step-slot="$slots.step"
            :label-slot="$slots.label"
          >
            <slot name="step" v-bind="mark"></slot>
            <slot name="label" v-bind="mark"></slot>
          </vue-slider-mark>
        </template>
      </div>
      <vue-slider-dot
        v-for="(dot, index) in dots"
        :key="`dot-${index}`"
        ref="refDots"
        :value="dot.value"
        :disabled="dot.disabled"
        :focus="dot.focus"
        :dot-style="[
          dot.style,
          dot.disabled ? dot.disabledStyle : null,
          dot.focus ? dot.focusStyle : null,
        ]"
        :tooltip="dot.tooltip || props.tooltip"
        :tooltip-style="[
          props.tooltipStyle,
          dot.tooltipStyle,
          dot.disabled ? dot.tooltipDisabledStyle : null,
          dot.focus ? dot.tooltipFocusStyle : null,
        ]"
        :tooltip-formatter="
          Array.isArray(sliderTooltipFormatter)
            ? sliderTooltipFormatter[index]
            : sliderTooltipFormatter
        "
        :tooltip-placement="tooltipDirections[index]"
        :style="[
          dotBaseStyle,
          {
            [mainDirection]: `${dot.pos}%`,
            transition: `${mainDirection} ${animateTime}s`,
          },
        ]"
        @dragStart="() => dragStart(index)"
        role="slider"
        :aria-valuenow="dot.value"
        :aria-valuemin="props.min"
        :aria-valuemax="props.max"
        :aria-orientation="isHorizontal ? 'horizontal' : 'vertical'"
        tabindex="0"
        :nativeOnFocus="() => focus(dot, index)"
        :nativeOnBlur="() => blur()"
        v-bind="props.dotAttrs"
        :dotSlot="$slots.dot"
        :tooltipSlot="$slots.tooltip"
      >
        <slot name="dot" v-bind="dot"></slot>
        <slot name="tooltip" v-bind="dot"></slot>
      </vue-slider-dot>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { StateMap } from './utils/state'
export const SliderState: StateMap = {
  None: 0,
  Drag: 1 << 1,
  Focus: 1 << 2,
}
</script>

<script lang="ts" setup>
import {
  computed,
  onActivated,
  onDeactivated,
  onMounted,
  reactive,
  ref,
  useAttrs,
  watch,
  defineEmits,
  withDefaults,
} from 'vue'
import {
  Value,
  TooltipProp,
  Position,
  TooltipFormatter,
  MarksProp,
  ProcessProp,
  DotOption,
  Styles,
  Process,
  Dot,
  DataObject,
  Mark,
} from './typings'
import { getPos, getSize, getKeyboardHandleFunc, HandleFunction } from './utils'
import Control, { ERROR_TYPE } from './utils/control'
import State from './utils/state'
import Decimal from '@/components/LrSlider/utils/decimal'
import VueSliderDot from './VueSliderDot.vue'
import VueSliderMark from './VueSliderMark.vue'

import './styles/slider.scss'
import './theme/default.scss'

const props = withDefaults(
  defineProps<{
    modelValue: Value | Value[]
    silent?: boolean //
    direction?: 'ltr' | 'rtl' | 'ttb' | 'btt' //?
    width?: number | string
    height?: number | string
    // The size of the slider, optional [width, height] | size
    dotSize?: [number, number] | number //?
    // whether or not the slider should be fully contained within its containing element
    contained?: boolean //?
    min?: number //?
    max?: number //?
    interval?: number //?
    disabled?: boolean //?
    clickable?: boolean //?
    dragOnClick?: boolean //?
    // The duration of the slider slide, Unit second
    duration?: number //?
    vData?: Value[] | object[] | DataObject
    dataValue?: string //?
    dataLabel?: string //?
    lazy?: boolean //?
    tooltip?: TooltipProp //?
    tooltipPlacement?: Position | Position[]
    tooltipFormatter?: TooltipFormatter | TooltipFormatter[]
    // Keyboard control
    useKeyboard?: boolean
    // Keyboard controlled hook function
    keydownHook?: (e: KeyboardEvent) => HandleFunction | boolean //?
    // Whether to allow sliders to cross, only in range mode
    enableCross?: boolean //?
    // Whether to fix the slider interval, only in range mode
    fixed?: boolean //?
    // Whether to sort values, only in range mode
    // When order is false, the parameters [minRange, maxRange, fixed, enableCross] are invalid
    // e.g. When order = false, [50, 30] will not be automatically sorted into [30, 50]
    order?: boolean //?
    // Minimum distance between sliders, only in range mode
    minRange?: number
    // Maximum distance between sliders, only in range mode
    maxRange?: number
    marks?: MarksProp
    process?: ProcessProp
    // If the value is true , mark will be an independent value
    included?: boolean
    // If the value is true , dot will automatically adsorb to the nearest value
    adsorb?: boolean
    hideLabel?: boolean
    dotOptions?: DotOption | DotOption[]
    dotAttrs?: object
    railStyle?: Styles
    processStyle?: Styles
    dotStyle?: Styles
    tooltipStyle?: Styles
    stepStyle?: Styles
    stepActiveStyle?: Styles
    labelStyle?: Styles
    labelActiveStyle?: Styles
  }>(),
  {
    modelValue: 0,
    silent: false,
    direction: 'ltr',
    dotSize: 14,
    contained: false,
    min: 0,
    max: 100,
    interval: 1,
    disabled: false,
    clickable: true,
    dragOnClick: false,
    duration: 0.1,
    dataValue: 'value',
    dataLabel: 'label',
    lazy: false,
    tooltip: 'active',
    useKeyboard: true,
    enableCross: true,
    fixed: false,
    order: true,
    marks: false,
    process: true,
    hideLabel: false,
  }
)

const DEFAULT_SLIDER_SIZE = 4
const isModelArray = Array.isArray(props.modelValue)
// const control: Control = new Control()
const states: State = new State(SliderState)
let scale: number = 1
const $el = ref()
const refDots = ref([])
const container = ref()
const rails = ref()
const focusDotIndex = ref(0)

const attrs = useAttrs()

const emits = defineEmits([
  'error',
  'dragging',
  'drag-start',
  'change',
  'update:modelValue',
  'drag-end',
])

const tailSize = computed(() => {
  return getSize(
    (isHorizontal.value ? props.height : props.width) || DEFAULT_SLIDER_SIZE
  )
})

const containerClasses = computed(() => [
  'vue-slider',
  [`vue-slider-${props.direction}`],
  { 'vue-slider-disabled': props.disabled },
])

const containerStyles = computed(() => {
  const [dotWidth, dotHeight] = Array.isArray(props.dotSize)
    ? props.dotSize
    : [props.dotSize, props.dotSize]
  const containerWidth = props.width
    ? getSize(props.width)
    : isHorizontal.value
    ? 'auto'
    : getSize(DEFAULT_SLIDER_SIZE)
  const containerHeight = props.height
    ? getSize(props.height)
    : isHorizontal.value
    ? getSize(DEFAULT_SLIDER_SIZE)
    : 'auto'
  return {
    padding: props.contained
      ? `${dotHeight / 2}px ${dotWidth / 2}px`
      : isHorizontal.value
      ? `${dotHeight / 2}px 0`
      : `0 ${dotWidth / 2}px`,
    width: containerWidth,
    height: containerHeight,
  }
})

const processArray = computed((): Process[] => {
  //@ts-ignore
  return control.processArray.map(([start, end, style], index: number) => {
    if (start > end) {
      /* tslint:disable:semicolon */
      ;[start, end] = [end, start]
    }
    const sizeStyleKey = isHorizontal.value ? 'width' : 'height'
    return {
      start,
      end,
      index,
      style: {
        [isHorizontal.value ? 'height' : 'width']: '100%',
        [isHorizontal.value ? 'top' : 'left']: 0,
        [mainDirection.value]: `${start}%`,
        [sizeStyleKey]: `${end - start}%`,
        transitionProperty: `${sizeStyleKey},${mainDirection.value}`,
        transitionDuration: `${animateTime.value}s`,
        ...props.processStyle,
        ...style,
      },
    }
  })
})

const dotBaseStyle = computed(() => {
  const [dotWidth, dotHeight] = Array.isArray(props.dotSize)
    ? props.dotSize
    : [props.dotSize, props.dotSize]
  let dotPos: { [key: string]: string }
  if (isHorizontal.value) {
    dotPos = {
      transform: `translate(${isReverse.value ? '50%' : '-50%'}, -50%)`,
      WebkitTransform: `translate(${isReverse.value ? '50%' : '-50%'}, -50%)`,
      top: '50%',
      [props.direction === 'ltr' ? 'left' : 'right']: '0',
    }
  } else {
    dotPos = {
      transform: `translate(-50%, ${isReverse.value ? '50%' : '-50%'})`,
      WebkitTransform: `translate(-50%, ${isReverse.value ? '50%' : '-50%'})`,
      left: '50%',
      [props.direction === 'btt' ? 'bottom' : 'top']: '0',
    }
  }
  return {
    width: `${dotWidth}px`,
    height: `${dotHeight}px`,
    ...dotPos,
  }
})

const mainDirection = computed((): string => {
  switch (props.direction) {
    case 'ltr':
      return 'left'
    case 'rtl':
      return 'right'
    case 'btt':
      return 'bottom'
    case 'ttb':
      return 'top'
  }
})

const isHorizontal = computed((): boolean => {
  return props.direction === 'ltr' || props.direction === 'rtl'
})

const isReverse = computed((): boolean => {
  return props.direction === 'rtl' || props.direction === 'btt'
})

const tooltipDirections = computed((): Position[] => {
  const dir = props.tooltipPlacement || (isHorizontal.value ? 'top' : 'left')
  if (Array.isArray(dir)) {
    return dir
  } else {
    return dots.value.map(() => dir)
  }
})

const dots = computed((): Dot[] => {
  return control.dotsPos.map((pos: number, index: number) => ({
    pos,
    index,
    value: control.dotsValue[index],
    focus: states.has(SliderState.Focus) && focusDotIndex.value === index,
    disabled: props.disabled,
    style: props.dotStyle,
    ...((Array.isArray(props.dotOptions)
      ? props.dotOptions[index]
      : props.dotOptions) || {}),
  }))
})

const animateTime = computed((): number => {
  if (states.has(SliderState.Drag)) {
    return 0
  }
  return props.duration
})

const canSort = computed((): boolean => {
  return (
    props.order &&
    !props.minRange &&
    !props.maxRange &&
    !props.fixed &&
    props.enableCross
  )
})

const isObjectData = (
  data?: Value[] | object[] | DataObject
): data is DataObject => {
  return !!data && Object.prototype.toString.call(data) === '[object Object]'
}

const isObjectArrayData = (
  data?: Value[] | object[] | DataObject
): data is object[] => {
  return (
    !!data &&
    Array.isArray(data) &&
    data.length > 0 &&
    typeof data[0] === 'object'
  )
}

const sliderData = computed((): undefined | Value[] => {
  if (isObjectArrayData(props.vData)) {
    return (props.vData as any[]).map(obj => obj[props.dataValue])
  } else if (isObjectData(props.vData)) {
    return Object.keys(props.vData)
  } else {
    return props.vData as Value[]
  }
})

const sliderMarks = computed((): undefined | MarksProp => {
  if (props.marks) {
    return props.marks
  } else if (isObjectArrayData(props.vData)) {
    return val => {
      const mark = { label: val }
      ;(props.vData as any[]).some(obj => {
        if (obj[props.dataValue] === val) {
          mark.label = obj[props.dataLabel]
          return true
        }
        return false
      })
      return mark
    }
  } else if (isObjectData(props.vData)) {
    return props.vData
  }
})

const sliderTooltipFormatter = computed(():
  | undefined
  | TooltipFormatter
  | TooltipFormatter[] => {
  if (props.tooltipFormatter) {
    return props.tooltipFormatter
  } else if (isObjectArrayData(props.vData)) {
    return val => {
      let tooltipText = '' + val
      ;(props.vData as any[]).some(obj => {
        if (obj[props.dataValue] === val) {
          tooltipText = obj[props.dataLabel]
          return true
        }
        return false
      })
      return tooltipText
    }
  } else if (isObjectData(props.vData)) {
    const data = props.vData
    return val => data[val]
  }
})

const onValueChanged = (val: Value | Value[]) => {
  if (control && !states.has(SliderState.Drag) && isNotSync.value) {
    control.setValue(val)
  }
}

watch(
  () => props.modelValue,
  newVal => onValueChanged(newVal)
)

onActivated(() => initControl())

onMounted(() => bindEvent())

onDeactivated(() => unbindEvent())

const bindEvent = () => {
  if (!document) return
  document.addEventListener('touchmove', dragMove, { passive: false })
  document.addEventListener('touchend', dragEnd, { passive: false })
  document.addEventListener('mousedown', blurHandle)
  document.addEventListener('mousemove', dragMove)
  document.addEventListener('mouseup', dragEnd)
  document.addEventListener('mouseleave', dragEnd)
  document.addEventListener('keydown', keydownHandle)
}

const unbindEvent = () => {
  if (!document) return
  document.removeEventListener('touchmove', dragMove)
  document.removeEventListener('touchend', dragEnd)
  document.removeEventListener('mousedown', blurHandle)
  document.removeEventListener('mousemove', dragMove)
  document.removeEventListener('mouseup', dragEnd)
  document.removeEventListener('mouseleave', dragEnd)
  document.removeEventListener('keydown', keydownHandle)
}

const setScale = () => {
  scale = new Decimal(
    Math.floor(
      isHorizontal.value
        ? (container.value as HTMLDivElement).offsetWidth
        : (container.value as HTMLDivElement).offsetHeight
    )
  )
    .divide(100)
    .toNumber()
}

const initControl = () => {
  ;[
    'data',
    'enableCross',
    'fixed',
    'max',
    'min',
    'interval',
    'minRange',
    'maxRange',
    'order',
    'marks',
    'process',
    'adsorb',
    'included',
    'dotOptions',
  ].forEach((name: any) => {
    watch(
      () => control[name],
      (val: any) => {
        if (
          name === 'data' &&
          Array.isArray(control.data) &&
          Array.isArray(val) &&
          control.data.length === val.length &&
          val.every((item, index) => item === (control.data as Value[])[index])
        ) {
          return false
        }
        switch (name) {
          case 'data':
          case 'dataLabel':
          case 'dataValue':
            control.data = sliderData.value
            break
          case 'mark':
            control.marks = sliderMarks.value
            break
          default:
            ;(control as any)[name] = val
        }
        if (['data', 'max', 'min', 'interval'].indexOf(name) > -1) {
          control.syncDotsPos()
        }
      }
    )
  })
}

const syncValueByPos = () => {
  const values = control.dotsValue
  const inputDate = isModelArray ? props.modelValue : [props.modelValue]
  if (isDiff(values, inputDate as Value[])) {
    const newValue =
      values.length === 1 && !isModelArray ? values[0] : [...values]
    emits('change', newValue, focusDotIndex.value)
    emits('update:modelValue', newValue)
  }
}

// Slider value and component internal value are inconsistent
const isNotSync = computed(() => {
  const values = control.dotsValue
  return Array.isArray(props.modelValue)
    ? props.modelValue.length !== values.length ||
        props.modelValue.some((val, index) => val !== values[index])
    : props.modelValue !== values[0]
})

const isDiff = (value1: Value[], value2: Value[]) => {
  return (
    value1.length !== value2.length ||
    value1.some((val, index) => val !== value2[index])
  )
}

const emitError = (type: ERROR_TYPE, message: string) => {
  if (!props.silent) {
    console.error(`[VueSlider error]: ${message}`)
  }
  emits('error', type, message)
}

const dragRange = computed((): [number, number] => {
  const prevDot = dots.value[focusDotIndex.value - 1]
  const nextDot = dots.value[focusDotIndex.value + 1]
  return [prevDot ? prevDot.pos : -Infinity, nextDot ? nextDot.pos : Infinity]
})

const dragStartOnProcess = (e: MouseEvent | TouchEvent) => {
  if (props.dragOnClick) {
    setScale()
    const pos = getPosByEvent(e)
    const index = control.getRecentDot(pos)
    if (dots.value[index].disabled) {
      return
    }
    dragStart(index)
    control.setDotPos(pos, focusDotIndex.value)
    if (!props.lazy) {
      syncValueByPos()
    }
  }
}

const dragStart = (index: number) => {
  focusDotIndex.value = index
  setScale()
  states.add(SliderState.Drag)
  states.add(SliderState.Focus)
  emits('drag-start', focusDotIndex.value)
}

const dragMove = (e: MouseEvent | TouchEvent) => {
  if (!states.has(SliderState.Drag)) {
    return false
  }
  e.preventDefault()
  const pos = getPosByEvent(e)
  isCrossDot(pos)
  control.setDotPos(pos, focusDotIndex.value)
  if (!props.lazy) {
    syncValueByPos()
  }
  const value = control.dotsValue
  emits(
    'dragging',
    value.length === 1 ? value[0] : [...value],
    focusDotIndex.value
  )
}

// If the component is sorted, then when the slider crosses, toggle the currently selected slider index
const isCrossDot = (pos: number) => {
  if (canSort.value) {
    const curIndex = focusDotIndex.value
    let curPos = pos
    if (curPos > dragRange.value[1]) {
      curPos = dragRange.value[1]
      focusDotIndex.value++
    } else if (curPos < dragRange.value[0]) {
      curPos = dragRange.value[0]
      focusDotIndex.value--
    }
    if (curIndex !== focusDotIndex.value) {
      const dotVm: any = refDots.value[focusDotIndex.value] //($refs as any)[`dot-${this.focusDotIndex}`]
      if (dotVm && dotVm.$el) {
        dotVm.$el.focus()
      }
      control.setDotPos(curPos, curIndex)
    }
  }
}

const dragEnd = (e: MouseEvent | TouchEvent) => {
  if (!states.has(SliderState.Drag)) {
    return false
  }

  setTimeout(() => {
    if (props.lazy) {
      syncValueByPos()
    }
    if (props.included && isNotSync.value) {
      control.setValue(props.modelValue)
    } else {
      // Sync slider position
      control.syncDotsPos()
    }
    states.delete(SliderState.Drag)
    // If useKeyboard is true, keep focus status after dragging
    if (!props.useKeyboard || 'targetTouches' in e) {
      states.delete(SliderState.Focus)
    }
    emits('drag-end', focusDotIndex.value)
  })
}

const blurHandle = (e: MouseEvent) => {
  if (
    !states.has(SliderState.Focus) ||
    !container.value ||
    container.value.contains(e.target as Node)
  ) {
    return false
  }
  states.delete(SliderState.Focus)
}

const clickHandle = (e: MouseEvent | TouchEvent) => {
  if (!props.clickable || props.disabled) {
    return false
  }
  if (states.has(SliderState.Drag)) {
    return
  }
  setScale()
  const pos = getPosByEvent(e)
  setValueByPos(pos)
}

const focus = (dot: Dot, index: number = 0) => {
  if (dot.disabled) return
  states.add(SliderState.Focus)
  focusDotIndex.value = index
}

const blur = () => states.delete(SliderState.Focus)

const getValue = () => {
  const values = control.dotsValue
  return values.length === 1 ? values[0] : values
}

const getIndex = () => {
  const indexes = control.dotsIndex
  return indexes.length === 1 ? indexes[0] : indexes
}

const setValue = (value: Value | Value[]) => {
  control.setValue(Array.isArray(value) ? [...value] : [value])
  syncValueByPos()
}

const setIndex = (index: number | number[]) => {
  const value = Array.isArray(index)
    ? index.map(n => control.getValueByIndex(n))
    : control.getValueByIndex(index)
  setValue(value)
}

const setValueByPos = (pos: number) => {
  const index = control.getRecentDot(pos)
  if (props.disabled || dots.value[index].disabled) {
    return false
  }
  focusDotIndex.value = index
  control.setDotPos(pos, index)
  syncValueByPos()

  if (props.useKeyboard) {
    states.add(SliderState.Focus)
  }

  setTimeout(() => {
    if (props.included && isNotSync.value) {
      control.setValue(props.modelValue)
    } else {
      control.syncDotsPos()
    }
  })
}

const keydownHandle = (e: KeyboardEvent) => {
  if (!props.useKeyboard || !states.has(SliderState.Focus)) {
    return false
  }

  const isInclude = props.included && props.marks
  const handleFunc = getKeyboardHandleFunc(e, {
    direction: props.direction,
    max: isInclude ? control.markList.length - 1 : control.total,
    min: 0,
    hook: props.keydownHook,
  })

  if (handleFunc) {
    e.preventDefault()
    let newIndex = -1
    let pos = 0
    if (isInclude) {
      control.markList.some((mark: Mark, index: number) => {
        if (mark.value === control.dotsValue[focusDotIndex.value]) {
          newIndex = handleFunc(index)
          return true
        }
        return false
      })
      if (newIndex < 0) {
        newIndex = 0
      } else if (newIndex > control.markList.length - 1) {
        newIndex = control.markList.length - 1
      }
      pos = control.markList[newIndex].pos
    } else {
      newIndex = handleFunc(
        control.getIndexByValue(control.dotsValue[focusDotIndex.value])
      )
      pos = control.parseValue(control.getValueByIndex(newIndex))
    }
    isCrossDot(pos)
    control.setDotPos(pos, focusDotIndex.value)
    syncValueByPos()
  }
}

const getPosByEvent = (e: MouseEvent | TouchEvent): number => {
  return (
    getPos(e, container.value, isReverse.value)[
      isHorizontal.value ? 'x' : 'y'
    ] / scale
  )
}

const control = reactive<string | any>(
  new Control({
    value: props.modelValue,
    data: sliderData.value,
    enableCross: props.enableCross,
    fixed: props.fixed,
    max: props.max,
    min: props.min,
    interval: props.interval,
    minRange: props.minRange,
    maxRange: props.maxRange,
    order: props.order,
    marks: sliderMarks.value,
    included: props.included,
    process: props.process,
    adsorb: props.adsorb,
    dotOptions: props.dotOptions,
    onError: emitError,
  })
)
defineExpose({ setValue })
</script>

<style scoped></style>
