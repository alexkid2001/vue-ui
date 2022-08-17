<template>
  <div class="lr-date-picker" v-click-outside="clickOutside">
    <div class="lr-date-piker__field" @click="toggleCalendar">
      <lr-field
        v-model="value"
        :label="props.label"
        disabled
        icon-name="calendar"
        button-type="calendar"
        type="text"
        :size="props.size"
        :dark-theme="props.darkTheme"
      ></lr-field>
    </div>
    <transition name="popupFade">
      <div class="lr-date-picker__dropdown" v-if="isOpen">
        <Calendar
          v-model="value"
          :min-date="props.minDate"
          :max-date="props.maxDate"
          :allow-past-dates="props.allowPastDates"
          :show-months="props.showMonths"
          :timezone="props.timezone"
          :format="props.format"
          @change="changeDate"
        />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { vClickOutside } from '@/directives'
export default {
  directives: {
    clickOutside: vClickOutside,
  },
}
</script>

<script lang="ts" setup>
import { computed, defineProps, PropType, ref } from 'vue'
import { LrField } from '@/index'
import Calendar from '../Calendar/Calendar.vue'
import './styles.scss'
import dayjs, { Dayjs } from 'dayjs'
import utcPlugin from 'dayjs/plugin/utc'
import timezonePlugin from 'dayjs/plugin/timezone'
import { SizeVariation } from '@/types/global'
dayjs.extend(utcPlugin)
dayjs.extend(timezonePlugin)

const props = defineProps({
  label: {
    type: String,
    default: 'Выберите дату',
  },
  size: {
    type: String as PropType<SizeVariation>,
    default: 'large',
  },
  darkTheme: {
    type: Boolean,
    default: false,
  },
  showMonths: {
    type: Number,
    default: 1,
    validator(val: number) {
      return val >= 1 && val <= 3
    },
  },
  numMonths: {
    type: Number,
    default: 12,
  },

  shiftMonths: {
    type: Number,
    default: 1,
  },
  allowPastDates: {
    type: Boolean,
    default: false,
  },
  minDate: {
    type: null,
    default() {
      return null
    },
    validator(val) {
      return (
        val instanceof Date ||
        (typeof val === 'string' && dayjs(val).isValid()) ||
        val === null
      )
    },
  },
  maxDate: {
    type: null,
    default() {
      return null
    },
    validator(val) {
      return (
        val instanceof Date ||
        (typeof val === 'string' && dayjs(val).isValid()) ||
        val === null
      )
    },
  },
  timezone: {
    type: Number,
    default: 0,
  },
  format: {
    type: String,
    default: 'YYYY-MM-DD',
  },
  modelValue: {
    type: null,
    default() {
      return new Date()
    },
    validator(val) {
      return (
        val instanceof Date ||
        (typeof val === 'string' && dayjs(val).isValid()) ||
        (Array.isArray(val) &&
          val.length === 2 &&
          dayjs(val[0]).isValid() &&
          (val[1] === null || dayjs(val[1]).isValid())) ||
        dayjs(val as Dayjs).isValid()
      )
    },
  },
})
const emits = defineEmits(['update:modelValue'])
// const { modelValue } = toRefs(props)
const value = computed({
  get() {
    return props.modelValue
  },
  set(): void {},
})
const isOpen = ref(false)

const isRange = computed(() => Array.isArray(props.modelValue))
const toggleCalendar = () => {
  isOpen.value = !isOpen.value
}
const clickOutside = () => {
  isOpen.value = false
}
const changeDate = (val: Dayjs) => {
  emits('update:modelValue', val)
  if (isRange) {
    if (value.value[1]) {
      isOpen.value = false
    }
  } else {
    isOpen.value = false
  }
}
</script>

<style scoped></style>
