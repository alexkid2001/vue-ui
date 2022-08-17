<template>
  <div class="lr-calendar">
    <div
      :class="[
        'months-container',
        {
          'one-month': showMonths === 1,
          'two-month': showMonths === 2,
          'three-month': showMonths === 3,
          'can-show-prev': isCanScrollLeft,
        },
      ]"
    >
      <LrIco
        ico-name="chevron_left"
        v-if="isCanScrollLeft"
        class="calendar-arrow calendar-arrow-back"
        @iconClick="!isAnimateLeft && !isAnimateRight && slideLeft()"
      />
      <div
        :class="[
          'months-inner',
          {
            animate: isAnimateLeft || isAnimateRight,
            animateLeft: isAnimateLeft,
            animateRight: isAnimateRight,
          },
        ]"
        :style="{ width: `${months.length * 280}px` }"
      >
        <Month
          v-for="(month, index) in months"
          :key="index"
          class="calendar-month-width"
          :month="month"
          @choose="onChooseDate"
          @hover="hoveredDate = $event"
        >
        </Month>
      </div>
      <LrIco
        ico-name="chevron_right"
        v-if="isCanScrollRight"
        class="calendar-arrow calendar-arrow-forward"
        @iconClick="!isAnimateLeft && !isAnimateRight && slideRight()"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onBeforeMount, provide, ref, toRefs } from 'vue'
import LrIco from '../LrIco'
import Month from './Month.vue'
import dayjs, { Dayjs } from 'dayjs'
import minMaxPlugin from 'dayjs/plugin/minMax'
import isSameOrAfterPlugin from 'dayjs/plugin/isSameOrAfter'
import isSameOrBeforePlugin from 'dayjs/plugin/isSameOrBefore'
dayjs.extend(minMaxPlugin)
dayjs.extend(isSameOrAfterPlugin)
dayjs.extend(isSameOrBeforePlugin)

const props = defineProps({
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
    default: 'YYYY-MM-DD[T]00:00:00.000[Z]'
  },
  modelValue: {
    type: null,
    default() {
      return new Date()
    },
    validator(val: Dayjs) {
      return (
        val instanceof Date ||
        (typeof val === 'string' && dayjs(val).isValid()) ||
        (Array.isArray(val) &&
          val.length === 2 &&
          dayjs(val[0]).isValid() &&
          (val[1] === null || dayjs(val[1]).isValid())) ||
        dayjs(val).isValid()
      )
    },
  },
})

const emits = defineEmits(['change', 'update:modelValue'])
const { modelValue } = toRefs(props)
const offset = ref(0)
const isAnimateLeft = ref(false)
const isAnimateRight = ref(false)
const from = ref()
provide('from', from)
const to = ref()
provide('to', to)
const months = ref()
const hoveredDate = ref(null)
provide('hoveredDate', hoveredDate)
provide('allowPastDates', props.allowPastDates)

const setToZero = (date: Date) => {
  if (!date) return null
  let d = dayjs(date)
  const timezoneInMinutes = props.timezone * 60
  const utcOffset = d.utcOffset()
  d = d.add(timezoneInMinutes, 'm')
  d = d.subtract(utcOffset, 'm')
  return d
}

from.value =
  props.allowPastDates && props.minDate === null
    ? null
    : setToZero(props.minDate || dayjs())
to.value = setToZero(props.maxDate)

const isRange = computed(() => Array.isArray(modelValue.value))
provide('isRange', isRange)
const currentDate = computed(() => {
  if (!isRange.value) {
    const tmpDate = setToZero(modelValue.value)
    return !props.allowPastDates && tmpDate?.isBefore(from.value)
      ? from.value
      : tmpDate
  } else {
    const tmpDate = modelValue.value.map((d: Date) => setToZero(d))
    tmpDate[0] =
      !props.allowPastDates && tmpDate[0].isBefore(from.value)
        ? from.value
        : tmpDate[0]
    return tmpDate
  }
})
provide('currentDate', currentDate)
const prevMonth = computed(() => months.value[0])
const nextMonth = computed(() => months.value[props.showMonths + 1])
const isCanScrollLeft = computed(() => {
  const prevMontLastDay = prevMonth.value.endOf('month')
  return (
    props.allowPastDates ||
    !from.value ||
    from.value.isBefore(prevMonth.value, 'month') ||
    from.value.isSameOrBefore(prevMontLastDay)
  )
})
const isCanScrollRight = computed(() => {
  const nextMonthFirstDay = nextMonth.value.startOf('month')
  return (
    !to.value ||
    to.value.isAfter(nextMonth.value, 'month') ||
    to.value.isSameOrAfter(nextMonthFirstDay)
  )
})
const isNullSecondDate = computed(() => {
  return isRange.value && currentDate.value[1] === null
})
provide('isNullSecondDate', isNullSecondDate)

const displayMonths = () => {
  const show = []
  for (
    let i = offset.value - props.shiftMonths;
    i < offset.value + props.numMonths + props.shiftMonths;
    i++
  ) {
    const d = !isRange.value ? currentDate.value : currentDate.value[0]
    const added = d.add(i, 'month')

    show.push(added)
  }

  months.value = show
}
const changeOffset = (val = 0) => {
  if (val < 0) {
    isAnimateLeft.value = true
  }
  if (val > 0) {
    isAnimateRight.value = true
  }
  setTimeout(() => {
    offset.value = offset.value + val
    isAnimateLeft.value = false
    isAnimateRight.value = false
    displayMonths()
    // this.$nextTick(() => this.displayMonths())
  }, 420)
}
const slideLeft = () => {
  if (isCanScrollLeft.value) changeOffset(-1)
}
const slideRight = () => {
  if (isCanScrollRight.value) changeOffset(1)
}
const onChooseDate = (date: Dayjs) => {
  if (!isNullSecondDate.value) offset.value = 0
  const formatDate = (date: Dayjs) =>
    date.format(props.format)
  const formattedDate = formatDate(date)
  if (isRange.value) {
    if (!isNullSecondDate.value) {
      emits('change', [formattedDate, null])
      emits('update:modelValue', [formattedDate, null])
    } else {
      const min = dayjs.min(currentDate.value[0], date)
      const max = dayjs.max(currentDate.value[0], date)
      emits('change', [formatDate(min), formatDate(max)])
      emits('update:modelValue', [formatDate(min), formatDate(max)])
    }
  } else {
    emits('change', formattedDate)
    emits('update:modelValue', formattedDate)
  }
}

onBeforeMount(() => displayMonths())

defineExpose({
  isRange,
  isNullSecondDate,
  currentDate,
  from,
  to,
})
</script>

<style lang="scss">
$dayWidth: 40px;
$monthPadding: 8px;
$monthWidth: 7 * $dayWidth + $monthPadding * 2;

.lr-calendar {
  //margin: 0 -$monthPadding;

  & * {
    box-sizing: border-box;
  }
  .months-container {
    overflow: hidden;
    position: relative;
    &.one-month {
      width: $monthWidth;
    }
    &.two-month {
      width: $monthWidth * 2;
    }
    &.three-month {
      width: $monthWidth * 3;
    }
  }
  .months-inner {
    display: flex;
    transform: translateX(-$monthWidth);

    .calendar-month:first-child,
    .calendar-month:last-child {
      height: 0;
    }

    &.animate {
      transition: 0.42s;
    }
    &.animateLeft {
      transform: translateX(0);

      .calendar-month:first-child {
        height: unset;
      }
    }
    &.animateRight {
      transform: translateX(-$monthWidth * 2);

      .calendar-month:last-child {
        height: unset;
      }
    }
  }
  .calendar-month-width {
    width: $monthWidth;
    margin: 0 $monthPadding;
  }

  .calendar-arrow {
    position: absolute;
    top: -2px;
    cursor: pointer;
    user-select: none;
    z-index: 1;

    &.calendar-arrow-back {
      left: $monthPadding;
    }
    &.calendar-arrow-forward {
      right: $monthPadding;
    }
  }
}

@media only screen and (max-width: 730px) {
  .lr-calendar {
    .months-container {
      width: 100% !important;
    }
    .months-inner {
      width: 100% !important;
      flex-direction: column;
      transform: unset;

      .calendar-month {
        margin: 10px auto;
      }
    }

    .calendar-month:first-child {
      display: none;
    }
    .calendar-month:last-child {
      height: unset !important;
    }
    .calendar-arrow {
      display: none;
    }
    .can-show-prev {
      .calendar-month:first-child {
        display: block;
        height: unset;
      }
    }
  }
}
</style>
