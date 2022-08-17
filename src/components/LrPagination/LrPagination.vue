<template>
  <ul class="lr-pagination" role="list">
    <v-page
      v-for="page in pagination"
      :key="`lr-pagination__page-${page}`"
      :page="page"
      :current="modelValue"
      :active-color="activeColor"
      @update="updatePageHandler"
    />
  </ul>
</template>

<script lang="ts" setup>
import { computed, defineProps, defineEmits, withDefaults } from 'vue'
import VPage from './VPage.vue'
import './styles.scss'

type Page = number | null

const props = withDefaults(
  defineProps<{
    total?: number
    perPage?: number
    rangeSize?: number
    modelValue: number
    activeColor?: string
    hideFirstButton?: boolean
    hideLastButton?: boolean
  }>(),
  {
    total: 0,
    perPage: 10,
    rangeSize: 1,
    modelValue: 1,
    activeColor: 'var(--primary)',
    hideFirstButton: false,
    hideLastButton: false,
  }
)
const emits = defineEmits(['update:modelValue'])

const pages = computed(() => Math.ceil(props.total / props.perPage))
// pagination
const pagination = computed((): Page[] => {
  const res = []
  const minPaginationElems = 5 + props.rangeSize * 2

  let rangeStart =
    pages.value <= minPaginationElems ? 1 : props.modelValue - props.rangeSize
  let rangeEnd =
    pages.value <= minPaginationElems
      ? pages.value
      : props.modelValue + props.rangeSize

  rangeEnd = rangeEnd > pages.value ? pages.value : rangeEnd
  rangeStart = rangeStart < 1 ? 1 : rangeStart

  if (pages.value > minPaginationElems) {
    const isStartBoundaryReached = rangeStart - 1 < 3
    const isEndBoundaryReached = pages.value - rangeEnd < 3

    if (isStartBoundaryReached) {
      rangeEnd = minPaginationElems - 2
      for (let i = 1; i < rangeStart; i++) {
        res.push(i)
      }
    } else {
      res.push(1)
      res.push(null)
    }

    if (isEndBoundaryReached) {
      rangeStart = pages.value - (minPaginationElems - 3)
      for (let i = rangeStart; i <= pages.value; i++) {
        res.push(i)
      }
    } else {
      for (let i = rangeStart; i <= rangeEnd; i++) {
        res.push(i)
      }
      res.push(null)
      res.push(pages.value)
    }
  } else {
    for (let i = rangeStart; i <= rangeEnd; i++) {
      res.push(i)
    }
  }

  return res
})

const updatePageHandler = (params: number) => {
  emits('update:modelValue', params)
}

// controls
const isPrevControlsActive = computed((): boolean => {
  return props.modelValue > 1
})
const isNextControlsActive = computed((): boolean => {
  return props.modelValue < pages.value
})

function goToFirst(): void {
  if (isPrevControlsActive.value) {
    emits('update:modelValue', 1)
  }
}
function goToPrev(): void {
  if (isPrevControlsActive.value) {
    emits('update:modelValue', props.modelValue - 1)
  }
}

function goToLast(): void {
  if (isNextControlsActive.value) {
    emits('update:modelValue', pages.value)
  }
}
function goToNext(): void {
  if (isNextControlsActive.value) {
    emits('update:modelValue', props.modelValue + 1)
  }
}
</script>
