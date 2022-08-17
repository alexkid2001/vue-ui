<template>
  <lr-dialog
    v-bind="attrs"
    @ok="closeWithResult(this, 'ok', true)"
    @cancel="closeWithResult(this, 'cancel', false)"
  >
  </lr-dialog>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import LrDialog from './LrDialog.vue'
import { closeWithResult } from '@/utils/dialog-promise'
import { useAttrs } from 'vue'

const attrs = useAttrs()
</script>
