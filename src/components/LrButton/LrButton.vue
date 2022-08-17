<template>
  <button
    class="btn"
    :type="$props.buttonType"
    :class="[btnClasses, $props.class]"
  >
    <lr-ico
      :ico-name="iconName"
      v-if="iconType === 'left' && iconName"
    ></lr-ico>
    <template v-if="iconType !== 'only_icon'">
      <slot></slot>
    </template>
    <lr-ico
      :ico-name="iconName"
      v-if="(iconType === 'right' || iconType === 'only_icon') && iconName"
    ></lr-ico>
  </button>
</template>

<script lang="ts" setup>
import { computed, defineProps, withDefaults } from 'vue'
import LrIco from '@/components/LrIco'
import './styles.scss'
import { SizeVariation } from '@/types/global'

type ButtonTypes = 'button' | 'submit' | 'reset'
type IconTypes = 'no' | 'left' | 'right' | 'only_icon'
type Types = 'simple' | 'secondary' | 'cancel' | 'tertiary' | 'link'

const props = withDefaults(
  defineProps<{
    label?: string
    disabled?: boolean
    type?: Types
    size?: SizeVariation
    iconType?: string
    iconName?: string
    class?: string
    buttonType?: ButtonTypes
    color?: string
  }>(),
  {
    label: 'LrButton',
    disabled: false,
    type: 'simple',
    size: 'large',
    iconType: 'no',
    iconName: 'logo',
    class: '',
    buttonType: 'button',
    color: 'default',
  }
)

const isIconTypeLeftOrRight =
  props.iconType === 'left' || props.iconType === 'right'
const isIconTypeOnlyIcon = props.iconType === 'only_icon'

const btnClasses = computed(() => ({
  'btn-disabled': props.disabled,
  [`btn-${props.type}`]: props.type !== 'simple',
  [`btn-${props.size === 'small' ? 's' : 'm'}`]: props.size !== 'large',
  'btn-with-ico': isIconTypeLeftOrRight,
  'btn-ico': isIconTypeOnlyIcon,
  [`btn--${props.color}-color`]: props.color && props.type === 'link',
}))
const iconClasses = computed(() => ({
  'ico-settings': isIconTypeLeftOrRight,
  'ico-logo': isIconTypeOnlyIcon,
}))
</script>
