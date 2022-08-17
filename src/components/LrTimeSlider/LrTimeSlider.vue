<template>
  <div class="lr-time-slider">
    <div class="lr-time-slider__field-wrap">
      <lr-time-input
        v-model="time"
        :label="label"
        @changeTime="changeTimeInput"
      ></lr-time-input>
      <span class="lr-time-slider__fee">{{ feeText }}</span>
      <input
        type="range"
        class="lr-time-slider__slider"
        :class="thumbColor"
        :min="minValue"
        :max="maxValue"
        :style="gradient"
        :value="time"
        @input="onInputSlider"
        @change="onChangeSlider"
      />
    </div>
    <div class="lr-time-slider__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { INTERVAL_TYPES } from '@/utils/enums'
import './styles.scss'
import LrTimeInput from '../LrTimeInput/LrTimeInput.vue'
import {
  computed,
  onBeforeMount,
  Ref,
  ref,
  toRefs,
  defineProps,
  withDefaults,
  defineEmits,
} from 'vue'
import { Interval } from '@/types/global'

const props = withDefaults(
  defineProps<{
    currency?: string
    label?: string
    modelValue: number
    fee?: number
    minValue?: number
    maxValue?: number
    intervals?: Interval[]
  }>(),
  {
    currency: '€',
    label: 'Время получения',
    modelValue: 100,
    minValue: 0,
    maxValue: 1440,
    intervals: () => [],
  }
)

const emits = defineEmits(['update:modelValue', 'update:fee'])

const { currency, modelValue, maxValue, intervals } = toRefs(props)
const currentInterval = ref()
const intervalCnt = ref()
const availableIntervals = ref([]) as Ref<Number[]>

const time = computed({
  get() {
    return modelValue?.value
  },
  set(): void {},
})

const getPercentage = (val: number): number => {
  return (val / maxValue.value) * 100
}

const getColor = (val: string) => {
  switch (val) {
    case INTERVAL_TYPES.FREE:
      return 'brand1'
    case INTERVAL_TYPES.DROPOFF:
      return 'brand6'
    case INTERVAL_TYPES.HOLIDAY:
      return 'secondary20'
  }
}

const gradient = computed(() => {
  let grad = 'background: linear-gradient(to right, '
  ;(intervals.value as Interval[]).forEach((time: any) => {
    grad += time.gradient
  })
  grad += ');'

  return grad
})

const feeText = computed(() => {
  if (currentInterval.value?.price) {
    emits('update:fee', currentInterval.value.price)
    return `+ ${currentInterval.value.price}${currency.value}`
  }
  emits('update:fee', 0)
  return ''
})

const getCurrentInterval = (val: number) => {
  let index: number = 0
  ;(intervals.value as Interval[]).forEach((item: any, idx: number) => {
    if (val >= item.start && val <= item.end) return (index = idx)
  })
  return (intervals.value as Interval[])[index]
}

onBeforeMount(() => {
  intervalCnt.value = (intervals.value as Interval[]).length - 1
  ;(intervals.value as Interval[]).forEach((time: any, idx: number) => {
    time.startPercentage = getPercentage(time.start)
    time.endPercentage = getPercentage(time.end)
    time.color = getColor(time.type)
    time.idx = idx

    if (time.type !== INTERVAL_TYPES.HOLIDAY)
      availableIntervals.value.push(time.idx)

    time.gradient =
      idx > 0
        ? `var(--light100) ${time.startPercentage}%, var(--light100) calc(${time.startPercentage}% + 1px),
            var(--${time.color}) calc(${time.startPercentage}% + 1px), var(--${time.color}) ${time.endPercentage}%`
        : `var(--${time.color}) ${time.startPercentage}, var(--${time.color}) ${time.endPercentage}%`

    if (idx !== intervalCnt.value) time.gradient = time.gradient + ', '
  })
  currentInterval.value = getCurrentInterval(time.value)
  changeInterval()
})

const thumbColor = computed(() => {
  switch (currentInterval.value?.type) {
    case INTERVAL_TYPES.DROPOFF:
      return 'dropoff'
    case INTERVAL_TYPES.HOLIDAY:
      return 'holiday'
    default:
      return ''
  }
})

const changeInterval = () => {
  if (currentInterval.value.type !== INTERVAL_TYPES.HOLIDAY) return
  const curIndex = currentInterval.value.idx
  const newIndex = nearestInterval()
  currentInterval.value = (intervals.value as Interval[])[newIndex as number]
  if (newIndex !== undefined)
    emits(
      'update:modelValue',
      newIndex > curIndex
        ? (intervals.value as Interval[])[newIndex].start + 1
        : (intervals.value as Interval[])[newIndex].end - 1
    )
}

const nearestInterval = () => {
  if (!availableIntervals.value.length) return
  let targetIndex: number = 0
  let diff = 100
  availableIntervals.value.map(item => {
    const curDiff = currentInterval.value.idx
    const curInd = Number((intervals.value as Interval[])[item as number].idx)
    if (curDiff < diff) {
      targetIndex = curInd
      diff = Math.min(curDiff, diff)
    } else if (curDiff === diff) {
      if (
        (intervals.value as Interval[])[curInd].start - time.value <=
        time.value - (intervals.value as Interval[])[targetIndex].end
      ) {
        targetIndex = curInd
      }
    }
  })

  return targetIndex
}

const onChangeSlider = () => {
  changeInterval()
}

const onInputSlider = (event: Event) => {
  const val = +(event.target as HTMLInputElement).value
  if (val) {
    currentInterval.value = getCurrentInterval(val)
    emits('update:modelValue', Number(val))
  }
}

const changeTimeInput = (val: number) => {
  currentInterval.value = getCurrentInterval(val)
  emits('update:modelValue', val)
  changeInterval()
}
</script>
