<template>
  <lr-ico
    class="lr-close-button"
    ico-name="close"
    :size="size"
    :style="{ top: top + 'px', right: right + 'px' }"
    @iconClick="$emit('closeClick')"
  ></lr-ico>
</template>

<script lang="ts" setup>
import { defineEmits, withDefaults } from 'vue'
import LrIco from '../LrIco/LrIco.vue'
import './styles.scss'

const props = withDefaults(
  defineProps<{
    top?: number | string
    right?: number | string
    size?: string
  }>(),
  {
    top: 14,
    right: 14,
    size: 'small',
  }
)
const emits = defineEmits(['closeClick'])
</script>
