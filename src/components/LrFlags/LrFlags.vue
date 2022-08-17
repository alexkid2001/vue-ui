<template>
  <svg :width="props.width" :height="props.height">
    <use :xlink:href="SvgSprite + `#${props.symbol}`"></use>
  </svg>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue'
import SvgSprite from './flags.sprite.svg'

type SymbolVariation = 'RU' | 'GB' | 'DE' | 'ES' | 'TR'
const props = withDefaults(
  defineProps<{
    symbol: SymbolVariation
    width?: number
    height?: number
  }>(),
  {
    symbol: 'RU',
    width: 28,
    height: 20,
  }
)
// const getImageUrl = () => {
//   return new URL(`./flags.sprite.svg`, import.meta.url).href
// }
</script>

<style scoped></style>
