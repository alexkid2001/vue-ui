<template>
  <li>
    <span
      v-if="page === null"
      class="lr-pagination__page lr-pagination__dots-holder"
      >...</span
    >
    <button
      v-else
      class="lr-pagination__page"
      type="button"
      :aria-label="`Go to page ${page}`"
      :class="{ 'lr-pagination__page-active': isActive }"
      @click="clickHandler"
    >
      {{ page }}
    </button>
  </li>
</template>

<script lang="ts" setup>
import { computed, defineEmits, PropType } from 'vue'

const props = defineProps({
  page: {
    type: Number as PropType<number | null>,
    default: null,
  },
  current: {
    type: Number,
    default: 0,
  },
  activeColor: {
    type: String,
    default: 'var(--primary)',
  },
})
const emits = defineEmits(['update'])

const isActive = computed(() => {
  return props.page === props.current
})

function clickHandler() {
  emits('update', props.page)
}
</script>
