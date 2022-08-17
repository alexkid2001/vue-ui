<template>
  <vue-final-modal
    classes="lr-dialog"
    content-class="lr-dialog__wrap"
    :esc-to-close="escToClose"
    v-slot="{ close }"
  >
    <lr-close-button top="11" right="11" @closeClick="close"></lr-close-button>
    <div class="lr-dialog__title">{{ title }}</div>
    <div class="lr-dialog__content"><slot></slot></div>
    <div class="lr-dialog__actions">
      <lr-button @click="$emit('ok')" :type="getType()">{{
        confirmButtonTitle
      }}</lr-button>
      <lr-button @click="$emit('cancel')" type="tertiary">{{
        cancelButtonTitle
      }}</lr-button>
    </div>
  </vue-final-modal>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue'
import LrButton from '../LrButton/LrButton.vue'
import LrCloseButton from '../LrCloseButton/LrCloseButton.vue'
import './styles.scss'
//@ts-ignore
import { VueFinalModal } from 'vue-final-modal'
import { DIALOG_TYPES } from '@/utils/enums'

const props = defineProps({
  escToClose: {
    type: Boolean,
    default: true,
  },
  type: {
    type: String,
  },
  title: {
    type: String,
  },
  confirmButtonTitle: {
    type: String,
    default: 'Confirm',
  },
  cancelButtonTitle: {
    type: String,
    default: 'Cancel',
  },
})

const emits = defineEmits(['ok', 'cancel'])
const getType = () => {
  switch (props.type) {
    case DIALOG_TYPES.DANGEROUS:
      return 'cancel'
  }
  return undefined
}
</script>
