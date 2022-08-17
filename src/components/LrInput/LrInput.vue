<template>
  <div class="lr-input" :class="$attrs.class">
    <input
      class="lr-input__input"
      :value="modelValue"
      @input="onInput"
      @change="onChange"
    />
    <slot></slot>
  </div>
</template>

<script lang="ts">
import './styles.scss'
import { defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'LrInput',
  props: {
    modelValue: {
      type: Number,
    },
  },
  emits: ['update:modelValue'],

  setup(_, { emit }) {
    const onInput = (event: Event) =>
      emit(
        'update:modelValue',
        Number((event.target as HTMLInputElement).value)
      )
    const onChange = (event: Event) =>
      emit(
        'update:modelValue',
        Number((event.target as HTMLInputElement).value)
      )

    return {
      onInput,
      onChange,
    }
  },
})
</script>
