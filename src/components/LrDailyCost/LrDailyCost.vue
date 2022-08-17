<template>
  <div class="lr-daily-cost" @keydown="onKeyDown">
    <template v-if="!isEdit">
      <lr-checkbox
        v-model="isDayEnable"
        @change="onCheckboxChange"
        class="lr-daily-cost__checked"
        >{{ label }}</lr-checkbox
      >
      <div class="lr-daily-cost__slider" v-if="isDayEnable">
        <lr-slider
          ref="slider"
          v-model="points"
          v-bind="sliderProps"
          :process="processArray"
          :marks="marks"
          @change="onChange"
        >
          <template v-slot:dot="{ value }">
            <div class="lr-daily-cost__dot-slider" @click.stop="">
              <div class="lr-daily-cost__dot-icon">
                <svg
                  width="8"
                  height="10"
                  viewBox="0 0 8 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H1V10H0V0ZM3.5 0H4.5V10H3.5V0ZM8 0H7V10H8V0Z"
                    fill="#B3B3B3"
                  />
                </svg>
              </div>
              <div class="lr-daily-cost__dot-value">
                {{ min2Time(Number(value)) }}
              </div>
            </div>
          </template>
          <template v-slot:process="{ start, end, style, index }">
            <div class="vue-slider-process" :style="style" @click.stop="">
              <div
                class="lr-daily-cost__interval-fee"
                @click.stop="onClickProcess(index)"
              >
                {{ getIntervalLabel(index) }}
              </div>
            </div>
          </template>
          <template v-slot:step="{ label, active }">
            <div class="vue-slider-mark__icon" @click.stop="onClickMark(label)">
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 4.5H4.5V8H3.5V4.5H0V3.5H3.5V0H4.5V3.5H8V4.5Z"
                  fill="white"
                />
              </svg>
            </div>
          </template>
        </lr-slider>
      </div>
    </template>
    <template v-else>
      <div class="lr-daily-cost__edit-wrap">
        <lr-radio v-model="intervalType" value="1" class="radio--cost">
          <lr-field
            label="Цена"
            v-model="currPrice"
            :disabled="intervalType !== feeType"
            @input="onPriceInput"
            @change="onPriceChange"
            @keydown="onKeyDown"
            size="small"
          ></lr-field>
        </lr-radio>
        <lr-radio v-model="intervalType" value="0">{{ labelFree }}</lr-radio>
        <lr-radio v-model="intervalType" value="2">{{ labelHoliday }}</lr-radio>
        <div class="lr-daily-cost__actions">
          <lr-button size="small" @click="confirmChangeClick">{{
            saveButtonLabel
          }}</lr-button>
          <lr-button
            icon-type="only_icon"
            icon-name="trash"
            size="small"
            type="cancel"
            @click="removePoint"
          ></lr-button>
        </div>
        <lr-close-button @closeClick="onCloseClick"></lr-close-button>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import LrSlider from '../LrSlider'
import LrCheckbox from '../LrCheckbox/LrCheckbox.vue'
import LrRadio from '../LrRadio/LrRadio.vue'
import LrButton from '../LrButton/LrButton.vue'
import LrField from '../LrField/LrField.vue'
import LrCloseButton from '../LrCloseButton/LrCloseButton.vue'
import './styles.scss'
import { dailySliderProps } from './props'
import { Interval } from '@/types/global'
import { min2Time, priceFormat, time2Min } from '@/utils/numbers'
import { onBeforeMount, ref, defineEmits, withDefaults } from 'vue'
import { INTERVAL_TYPES } from '@/utils/enums'
import { keysCodes } from '@/utils'

const props = withDefaults(
  defineProps<{
    modelValue: Interval[]
    label?: string
    checked?: boolean
    currency?: string
    labelFree?: string
    labelHoliday?: string
    saveButtonLabel?: string
  }>(),
  {
    label: 'Label',
    checked: true,
    currency: '€',
    labelFree: 'Бесплатно Б/П',
    labelHoliday: 'Не работаю Н/Р',
    saveButtonLabel: 'Сохранить',
  }
)
const emits = defineEmits(['update:modelValue', 'update:checked'])

const slider = ref(null)
const maxValue = 1440
const value = ref<Interval[]>(props.modelValue)
const isDayEnable = ref(props.checked)
const sliderProps = ref({ ...dailySliderProps, mas: maxValue })
const points = ref<number[]>([])
const delta = ref<number>(0)
const intervalType = ref<string>(INTERVAL_TYPES.FREE)
const isEdit = ref<boolean>(false)
const currPrice = ref<string>()
const currPoint = ref()
const currIndex = ref<number | null>(null)
const currInterval = ref<Interval>({
  start: 0,
  end: 0,
  type: INTERVAL_TYPES.FREE,
  fee: 0,
})
const processArray = (val: Array<number>) => {
  const length = val.length - 1
  const arr = []
  val.forEach((item: number, idx: number) => {
    if (idx === 0 && item !== 0) {
      arr.push([0, val[0]])
    } else if (idx > 0) {
      arr.push([val[idx - 1], val[idx]])
    }
  })
  arr.push([val[length], 100])
  return arr
}
const marks = (val: number) => ({
  label: `${min2Time(val)}`,
  style: {
    width: '14px',
    height: '14px',
  },
})
const feeType = ref(INTERVAL_TYPES.DROPOFF)

const onChange = (val: number[], idx: number): void => {
  calcDelta(val)
  value.value[idx].end = val[idx]
  value.value[idx + 1].start = val[idx]
  emits('update:modelValue', value.value)
}

const onClickProcess = (index: number) => {
  currIndex.value = index + delta.value
  currInterval.value = value.value[currIndex.value]
  currPrice.value = String(currInterval.value.fee)
  intervalType.value = String(currInterval.value.type)
  showEdit()
}

const addInterval = () => {
  const index = value.value.findIndex(
    item => currPoint.value > item.start && currPoint.value < item.end
  )
  const length = value.value.length - 1

  if (index >= 0) {
    currInterval.value = {
      start: index === 0 ? 0 : value.value[index - 1].end,
      end: currPoint.value,
      fee: Number(currPrice.value || 0),
      type: intervalType.value,
    }

    value.value[index] = {
      ...value.value[index],
      start: currInterval.value.end,
      end: index === length ? maxValue : value.value[index].end,
    }
  }
  value.value.splice(index, 0, currInterval.value)
}

const applyInterval = () => {
  if (currIndex.value === null) {
    addInterval()
  } else {
    value.value[currIndex.value].fee = Number(currPrice.value)
    value.value[currIndex.value].type = intervalType.value
  }

  emits('update:modelValue', value.value)
  initPoints(value.value)
  hideEdit()
}

const onClickMark = (val: string) => {
  currIndex.value = null
  currPoint.value = time2Min(val)
  intervalType.value = INTERVAL_TYPES.FREE
  showEdit()
}

const initPoints = (arr: Interval[]) => {
  points.value = []
  const length = arr.length - 1
  arr.forEach((item: Interval, idx) => {
    if (idx !== length && item.end !== maxValue) points.value.push(item.end)
  })
}

const calcDelta = (arr: number[]) => {
  if (arr[0] === 0) return (delta.value = 1)
  return (delta.value = 0)
}

const getIntervalLabel = (index: number): string => {
  const currentIndex = index + delta.value
  if (
    value.value[currentIndex] &&
    value.value[currentIndex].start !== maxValue
  ) {
    switch (value.value[currentIndex].type) {
      case INTERVAL_TYPES.HOLIDAY:
        return 'Н/Р'
      case INTERVAL_TYPES.FREE:
        return 'Б/П'
      default:
        return value.value[currentIndex].fee + ` ${props.currency}`
    }
  }
  return ''
}

const removePoint = () => {
  const length = value.value.length - 1

  if (currIndex.value || currIndex.value === 0) {
    const index = currIndex.value
    if (index > 0) {
      if (index < length)
        value.value[index + 1].start = value.value[index].start
      if (index === length) value.value[index - 1].end = maxValue
    } else {
      value.value[index + 1].start = 0
    }

    value.value.splice(index, 1)
  }

  emits('update:modelValue', value.value)
  initPoints(value.value)
  hideEdit()
}

const onPriceInput = (event: Event) => {
  const { data } = event as MessageEvent
  currPrice.value = priceFormat(data, String(currPrice.value))
}

const onPriceChange = (event: Event) => {
  const { target } = event
  ;(target as HTMLElement).blur()
}

const onCloseClick = () => {
  hideEdit()
}

const confirmChangeClick = () => {
  applyInterval()
}

const onKeyDown = (event: KeyboardEvent) => {
  const { key } = event
  switch (key) {
    case keysCodes.ESC:
      hideEdit()
      break
    case keysCodes.ENTER: {
      confirmChangeClick()
      hideEdit()
      break
    }
  }
}

const showEdit = () => {
  isEdit.value = true
}

const hideEdit = () => {
  isEdit.value = false
}

const onCheckboxChange = (val: boolean): void => {
  emits('update:checked', val)
}

onBeforeMount(() => {
  initPoints(props.modelValue)
})
</script>
