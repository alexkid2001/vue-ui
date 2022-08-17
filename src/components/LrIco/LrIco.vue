<template>
  <i class="ico" :class="classObj" @click="onClick">
    <component :is="currentIcon"></component>
  </i>
</template>

<script lang="ts" setup>
import {
  computed,
  toRefs,
  defineProps,
  defineAsyncComponent,
  watch,
  shallowRef,
  defineEmits,
} from 'vue'
import './styles.scss'

const props = withDefaults(
  defineProps<{
    size?: string
    icoName?: string
    classes?: string
  }>(),
  {
    icoName: 'Add',
  }
)
const emits = defineEmits(['click', 'iconClick'])

const { size, icoName, classes } = toRefs(props)

const classObj = computed(() => ({
  'ico-small': size?.value === 'small',
  [`${classes?.value}`]: classes?.value,
}))

const getComponent = () => {
  return defineAsyncComponent(() =>
    import('../Icons/' + getComponentName() + '.vue')
  )
}

const getComponentName = () => {
  let arr = icoName.value.split('')
  arr.splice(0, 1, arr[0].toUpperCase())
  while (arr.indexOf('_') >= 0) {
    let index = arr.indexOf('_')
    if (index < icoName.value.length - 1) {
      arr.splice(index, 2, arr[index + 1].toUpperCase())
    }
  }
  return 'Icon' + arr.join('')
}

const currentIcon = shallowRef(getComponent())

watch(
  () => props.icoName,
  () => {
    currentIcon.value = getComponent()
  }
)

const onClick = (event: EventTarget) => {
  emits('iconClick')
}
</script>
