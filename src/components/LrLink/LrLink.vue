<template>
  <template v-if="hostname || isHost">
    <a
      class="lr-link"
      :class="classObj"
      @click="onLinkClick"
      :href="$props.href"
    >
      <lr-ico
        size="small"
        :ico-name="iconName"
        v-if="iconName"
        class="lr-link__icon"
      ></lr-ico>
      <span class="lr-link__title">
        <slot></slot>
      </span>
    </a>
  </template>
  <template v-else>
    <router-link :to="$props.href" class="lr-link" :class="classObj">
      <lr-ico
        :ico-name="iconName"
        v-if="iconName"
        class="lr-link__icon"
      ></lr-ico>
      <span class="lr-link__title">
        <slot></slot>
      </span>
    </router-link>
  </template>
</template>

<script lang="ts" setup>
import LrIco from '../LrIco/LrIco.vue'
import './styles.scss'
import { computed, defineProps, withDefaults, defineEmits } from 'vue'
import { StringUnion } from '@/utils'
import { SizeVariation } from '@/types/global'

const ColorType = StringUnion('blue', 'brand', 'white', 'warning', 'grey') //TypeVariation.guard(val)
type ColorVariation = '' | 'blue' | 'brand' | 'white' | 'warning' | 'grey'
const IconPosition = StringUnion('left', 'right')
type IconPositionVariation = '' | 'left' | 'right'

const props = withDefaults(
  defineProps<{
    iconName?: string
    colorType?: ColorVariation
    iconPosition?: IconPositionVariation
    size?: SizeVariation
    href?: string
    isHost?: boolean
  }>(),
  {
    iconName: '',
    colorType: '',
    iconPosition: '',
    size: 'medium',
    href: '#',
    isHost: false
  }
)
const emits = defineEmits(['linkClick'])

const classObj = computed(() => [
  props.colorType && ColorType.guard(props.colorType)
    ? `lr-link--${props.colorType}`
    : null,
  props.iconPosition && IconPosition.guard(props.iconPosition)
    ? `lr-link--${props.iconPosition}`
    : null,
  props.size && props.size !== 'medium' ? `lr-link--${props.size}` : '',
])

const hostname = computed(() => {
  try {
    const url = new URL(props.href)
    return url.hostname
  } catch (err) {
    return false
  }
})

const onLinkClick = () => {
  emits('linkClick')
}
</script>

<style scoped></style>
