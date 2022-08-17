import * as dayjs from 'dayjs'
import utcPlugin from 'dayjs/plugin/utc'
import timezonePlugin from 'dayjs/plugin/timezone'
dayjs.extend(utcPlugin)
dayjs.extend(timezonePlugin)

export default {
  props: {
    date: {
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
          dayjs(val).isValid()
        )
      },
    },
    showMonths: {
      type: Number,
      default: 1,
      validator(val) {
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
  },
  methods: {
    setToZero(date) {
      if (!date) return null
      let d = dayjs(date)
      const timezoneInMinutes = this.timezone * 60
      const utcOffset = d.utcOffset()
      d = d.add(timezoneInMinutes, 'm')
      d = d.subtract(utcOffset, 'm')
      return d
    },
  },
}
