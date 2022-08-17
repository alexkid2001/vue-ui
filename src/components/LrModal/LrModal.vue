<template>
  <vue-final-modal
    v-slot="{ close }"
    classes="lr-modal"
    content-class="lr-modal__wrap"
    :esc-to-close="true"
    name="alert"
  >
    <lr-close-button
      @closeClick="close"
      v-if="closeButton"
      :top="closeBtnProps.top"
      :right="closeBtnProps.right"
      :size="closeBtnProps.size"
    ></lr-close-button>
    <div class="lr-modal__title" v-if="props.title">{{ props.title }}</div>
    <slot></slot>
  </vue-final-modal>
</template>

<script lang="ts" setup>
import LrCloseButton from '../LrCloseButton/LrCloseButton.vue'
import '../LrAlert/styles.scss'
import './styles.scss'
//@ts-ignore
import { VueFinalModal, $vfm } from 'vue-final-modal'
import { defineProps, withDefaults } from 'vue'
import { SizeVariation } from '@/types/global'

const props = withDefaults(
  defineProps<{
    closeButton?: boolean
    title?: string
    closeBtnProps?: {
      top?: number
      right?: number
      size?: SizeVariation
    }
  }>(),
  {
    closeButton: true,
    closeBtnProps: () => ({
      top: 14,
      right: 14,
      size: 'medium',
    }),
  }
)
</script>

<style></style>
