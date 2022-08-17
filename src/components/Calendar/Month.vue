<template>
  <div class="calendar-month">
    <div class="calendar-header">{{ header }}</div>
    <div class="calendar-weekdays">
      <div
        v-for="(weekday, index) in Array(7)"
        :key="index"
        class="calendar-weekday"
      >
        {{ $t(`lrUi.calendar.weekdaysMin[${index}]`) }}
      </div>
    </div>
    <div
      v-for="(week, weekIndex) in weeks"
      :key="weekIndex"
      class="calendar-week"
    >
      <template v-for="(day, index) in week">
        <div
          v-if="!isRange && isDayInMonth(day)"
          :key="index"
          :class="{
            'calendar-day': isDayInMonth(day),
            'calendar-disabled': isDisabled(day),
            'calendar-selected': isSelected(day),
          }"
          @click="!isDisabled(day) && emits('choose', day)"
        >
          {{ day.format('D') }}
        </div>
        <div
          v-if="isRange && isDayInMonth(day)"
          :key="index"
          :class="{
            'calendar-day': isDayInMonth(day),
            'calendar-disabled': isDisabled(day),
            'calendar-highlighted': isHighlighted(day),
            'calendar-selected': isSelected(day),
          }"
          @click.stop.prevent="!isDisabled(day) && emits('choose', day)"
          @mouseover="emits('hover', day)"
          @mouseout="emits('hover', null)"
        >
          {{ day.format('D') }}
        </div>
        <div v-if="!isDayInMonth(day)" :key="index" class="calendar-day"></div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
/** @preserve style.css */

import { range } from 'lodash'
import dayjs, { ConfigType, Dayjs } from 'dayjs'
import isBetweenPlugin from 'dayjs/plugin/isBetween'
import minMaxPlugin from 'dayjs/plugin/minMax'
import { useI18n } from 'vue-i18n'
import { computed, defineProps, inject, defineEmits, ref } from 'vue'
dayjs.extend(isBetweenPlugin)
dayjs.extend(minMaxPlugin)
const props = withDefaults(
  defineProps<{
    month: any
  }>(),
  {
    month: () => dayjs(),
  }
)
const { t: $t } = useI18n()
const emits = defineEmits(['choose', 'hover'])
const from = inject('from', ref())
const to = inject('to', ref())
const isRange = inject('isRange', ref(false))
const isNullSecondDate = inject('isNullSecondDate', ref(true))
const currentDate = inject('currentDate', ref())
const hoveredDate = inject('hoveredDate', ref())
const allowPastDates = inject('allowPastDates', ref(false))
const header = computed(() => {
  const month = props.month
  // return `${calendar.month[month.month()]} ${month.year()}`
  return `${$t(`lrUi.calendar.month[${month.month()}]`)} ${month.year()}`
})
const firstDay = computed(() => {
  return props.month.date(1)
})
const weeks = computed(() => {
  const daysCount = props.month.daysInMonth()
  const firstDayWeekday = (firstDay.value.day() || 7) - 1
  const weekDiv = Math.ceil((daysCount + firstDayWeekday) / 7)

  return range(weekDiv).map((weekIndex: number) => {
    return range(7 * weekIndex, 7 * weekIndex + 7).map((dayIndex: number) => {
      const dayShift = dayIndex - firstDayWeekday
      return firstDay.value.add(dayShift, 'days')
    })
  })
})

const isSelected = (day: Dayjs) => {
  if (!isRange.value) {
    return day.isSame(currentDate.value, 'day')
  } else {
    return (
      day.isSame(currentDate.value[0], 'day') ||
      (!isNullSecondDate.value && day.isSame(currentDate.value[1], 'day'))
    )
  }
}
const isDayInMonth = (day: Dayjs) => {
  return day.isSame(props.month as ConfigType, 'month')
}
const isDisabled = (day: Dayjs) => {
  const isAllowPastDates = allowPastDates

  if ((isAllowPastDates && to === null) || (!isAllowPastDates && !from.value))
    return false

  if (!!from.value && !!to.value)
    return !day.isBetween(from.value, to.value, 'day', '[]')

  if (!from.value && !!to.value) return day.isAfter(to.value, 'day')

  if (!isAllowPastDates && !!from.value) return day.isBefore(from.value, 'day')
}
const isHighlighted = (day: Dayjs) => {
  if (isNullSecondDate.value && hoveredDate.value === null) return false
  const firstDate = currentDate.value[0]
  const lastDate = isNullSecondDate.value
    ? hoveredDate.value
    : currentDate.value[1]

  const min = dayjs.min(firstDate, lastDate)
  const max = dayjs.max(firstDate, lastDate)

  return day.isBetween(min, max, 'day', '[]')
}
</script>

<style lang="scss">
@import '../../styles/typography.scss';

.calendar-month {
  display: flex;
  flex-direction: column;
}

.calendar-header {
  @include CaptionLMedium;
  padding-bottom: 12px;
  text-align: center;
}

.calendar-weekdays {
  display: flex;
  text-transform: capitalize;
  padding-bottom: 1px;
}

.calendar-weekday {
  @include CaptionLMedium;
  color: var(--secondary50);
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 0;
}

.calendar-week {
  display: flex;
}

.calendar-day {
  @include CaptionLMedium;
  box-sizing: border-box !important;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  &.calendar-between {
    font-weight: 600;
    color: var(--primary);
    background: rgba(29, 189, 144, 0.2);
  }

  &.calendar-highlighted {
    background: var(--blue);
  }

  &:hover {
    font-weight: 600;
    color: var(--primary-hover);
  }

  &.calendar-selected {
    font-weight: 600;
    color: white;
    background: var(--primary);
    border-radius: 3px;
  }

  &.calendar-disabled {
    color: var(--secondary40);

    &:hover {
      font-weight: normal;
    }
    pointer-events: none;
  }
}
</style>
