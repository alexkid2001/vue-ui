<template>
  <div class="lr-day-settings">
    <div class="lr-day-settings__slider">
      <lr-slider
        ref="slider"
        v-model="value"
        v-bind="sliderProps"
        :process="processArray"
        :marks="marks"
        @change="onChange"
      >
        <template v-slot:dot="{ value, index }">
          <div class="lr-day-settings__dot-slider" @click.stop="">
            <div class="lr-day-settings__dot-icon">
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
            <div class="lr-day-settings__dot-trash">
              <icon-trash @click="removePoint($event, index)"></icon-trash>
            </div>
          </div>
          <div class="lr-day-settings__dot-value">
            {{ calcMarker(value, index) }}
          </div>
        </template>
        <template v-slot:step="{ label, active }">
          <div
            class="vue-slider-mark__icon"
            @click.stop="onClickMark(Number(label))"
            v-if="Number(label) > 0 && Number(label) < maxValue - 1"
          >
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
          <div
            class="vue-slider-mark__additional-point"
            v-if="Number(label) === 31"
          >
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
            <div class="lr-day-settings__dot-value">31+</div>
          </div>
        </template>
      </lr-slider>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LrSlider from '@/components/LrSlider'
import { ProcessOption, Value } from '@/components/LrSlider/typings'
import './styles.scss'
import { dailySliderProps } from './props'
import { defineEmits, ref } from 'vue'
import { keysCodes } from '@/utils'
import IconTrash from '@/components/Icons/IconTrash.vue'

const props = defineProps<{
  modelValue: number[]
  label?: string
}>()
const emits = defineEmits(['update:modelValue', 'update:change'])

const slider = ref(null)
const maxValue = 32
const value = ref(props.modelValue)
const sliderProps = ref({ ...dailySliderProps, max: maxValue })
const currPoint = ref<number>()
const currIndex = ref<number | null>(null)
const processArray = (val: Array<number>): ProcessOption => {
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
  //@ts-ignore
  return arr
}

const marks = (val: Value) => ({
  label: val,
  style: {
    width: '14px',
    height: '14px',
  },
})

const onChange = (val: number[]): void => {
  emits('update:modelValue', val)
}

const addInterval = () => {
  value.value.push(currPoint.value as number)
  ;(value.value as number[]).sort((a: number, b: number) => a - b)
  ;(slider.value as any).setValue(value.value)

  emits('update:modelValue', value.value)
}

const onClickMark = (val: number) => {
  currIndex.value = null
  currPoint.value = val
  addInterval()
}

const removePoint = (event: Event, idx: number) => {
  value.value.splice(idx, 1)
  ;(slider.value as any).setValue(value.value)
}

const onPriceChange = (event: Event) => {
  const { target } = event
  ;(target as HTMLElement).blur()
}

const onKeyDown = (event: KeyboardEvent) => {
  const { key } = event
  switch (key) {
    case keysCodes.ESC:
      break
    case keysCodes.ENTER: {
      break
    }
  }
}

const calcMarker = (val: number, idx: number) => {
  if (idx > 0)
    return (value.value[idx - 1] as number) + 1 === val
      ? val
      : `${(value.value[idx - 1] as number) + 1}-${val}`
  return val > 1 ? `1-${val}` : '1'
}
</script>
