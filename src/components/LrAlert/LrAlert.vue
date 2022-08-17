<template>
  <vue-final-modal
    v-slot="{ close }"
    classes="lr-alert"
    content-class="lr-alert__wrap"
    :esc-to-close="true"
    name="alert"
  >
    <lr-close-button @closeClick="close" v-if="closeButton"></lr-close-button>
    <div class="lr-alert__icon">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
          fill="#0DAD36"
          fill-opacity="0.2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.0945 8.31858C16.8531 8.02145 16.4152 7.97616 16.1187 8.21808L10.1911 13.0464L7.78914 11.6605C7.53587 11.5139 7.2168 11.5437 6.99444 11.7328C6.70311 11.9807 6.66704 12.4204 6.91398 12.7128L8.42411 14.4963L8.42094 14.4991L9.59616 15.8823L9.64134 15.9308C9.7761 16.0603 9.94971 16.125 10.1229 16.125C10.3049 16.125 10.486 16.0539 10.6219 15.9137L17.0549 9.24016C17.299 8.98752 17.3161 8.59148 17.0945 8.31858Z"
          fill="#0DAD36"
        />
      </svg>
    </div>
    <div class="lr-alert__title">{{ title }}</div>
    <div class="lr-alert__subtitle">{{ subtitle }}</div>
    <slot></slot>
  </vue-final-modal>
</template>

<script lang="ts">
import LrCloseButton from '../LrCloseButton/LrCloseButton.vue'
import './styles.scss'
import { defineComponent, onMounted } from 'vue'
import { close } from '../../utils/dialog-promise'
//@ts-ignore
import { VueFinalModal, $vfm } from 'vue-final-modal'

export default defineComponent({
  name: 'LrAlert',

  components: { LrCloseButton, VueFinalModal },

  props: {
    closeButton: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    delay: {
      type: Number,
      default: 3000,
    },
    type: {},
  },

  setup(props, { emit, ...context }) {
    onMounted(() => {
      setTimeout(() => {
        $vfm.hide('alert')
      }, props.delay)
    })
    return {}
  },
})
</script>

<style scoped></style>
