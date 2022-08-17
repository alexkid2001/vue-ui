<template>
  <div
    class="select"
    :class="classObj"
    v-click-outside="clickOutside"
    @keydown="onKeyDown"
  >
    <div class="select__field" @click="onFieldClick" :class="{ error: error }">
      <lr-field
        v-model="srcValue"
        :label="label"
        @iconClick="onIconClick"
        button-type="select"
        type="text"
        :disabled="!autocomplete"
        :size="size"
        :dark-theme="darkTheme"
        :error="error"
        :errorMessage="errorMessage"
        :required="props.required"
      ></lr-field>
    </div>
    <div
      class="select__dropdown custom-scroll"
      v-show="isOpen"
      @keydown.stop="itemKeyDown"
      ref="dropdown"
    >
      <slot
        :items="filteredList"
        v-if="$slots.default"
        :options="filteredList"
        :srcValue="srcValue"
      ></slot>
      <template v-else-if="isObjectData">
        <ul class="select__list" role="list">
          <li
            v-for="item in filteredList"
            class="select__item"
            :data-name="item.name"
            :data-label="item.label"
            tabindex="0"
            @click="itemClick(item)"
            @keydown.enter="itemClick(item)"
          >
            <slot name="option" :option="item" v-if="$slots.option"></slot>
            <template v-else>{{ item.label }}</template>
          </li>
        </ul>
      </template>
      <template v-else>
        <ul class="select__list" role="list">
          <li
            v-for="(item, idx) in filteredList"
            class="select__item"
            :data-label="item"
            :data-name="idx"
            @click="itemClick(item)"
            @keydown="itemClick(item)"
            tabindex="0"
          >
            {{ item }}
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { LrField } from '@/index'
import { keysCodes } from '@/utils'
import './select.scss'
import '../CustomScroll/styles.scss'
import Scrollbar from 'smooth-scrollbar'
import {
  ref,
  toRefs,
  nextTick,
  watch,
  computed,
  defineEmits,
  withDefaults,
} from 'vue'
import { SizeVariation } from '@/types/global'
import { vClickOutside } from '@/directives'

const props = withDefaults(
  defineProps<{
    idField?: string
    displayField?: string
    searchField?: string
    modelValue: string | number | null
    label?: string
    dataObj: unknown[]
    autocomplete?: boolean
    actionWord?: string
    size?: SizeVariation
    classes?: string
    darkTheme?: boolean
    error?: boolean
    errorMessage?: string
    required?: boolean
  }>(),
  {
    idField: 'name',
    displayField: 'label',
    searchField: 'label',
    modelValue: null,
    label: '',
    dataObj: () => [],
    autocomplete: false,
    actionWord: 'Выберите',
    size: 'large',
    classes: '',
    darkTheme: false,
    error: false,
    errorMessage: '',
    required: false,
  }
)

const emits = defineEmits(['update:id', 'onChange', 'update:modelValue'])

const {
  autocomplete,
  actionWord,
  dataObj,
  modelValue,
  size,
  darkTheme,
  error,
  errorMessage,
} = toRefs(props)
const isObjectData = computed(() => typeof props.dataObj[0] === 'object')
const classObj = computed(() => [
  isOpen.value ? 'open' : '',
  autocomplete.value ? 'select--autocomplete' : '',
  size.value && size.value !== 'large' ? `select--${size.value}` : '',
  darkTheme.value ? 'select--dark-theme' : '',
  props.classes,
])
const isOpen = ref(false)
const focusedItem = ref()
const geCurrentItem = () => {
  if (isObjectData.value) {
    const fined: any = dataObj.value.find(
      (item: any) => item[props.idField] == modelValue.value
    )
    return fined
  }
  return dataObj.value[modelValue.value as number]
}
const srcValue = ref(
  ((): string => {
    const curItem = geCurrentItem()
    return curItem ? curItem[props.displayField] : ''
  })()
)
// const srcValue = computed({
//   // modelValue.value.label);
//   get(): string {
//     return isObjectData.value
//       ? (modelValue.value as any).label
//       : modelValue.value
//   },
//   set(): void {},
// })

const oldValue = ref('')
const dropdown = ref()
const filteredList: any = computed(() => {
  return srcValue.value && autocomplete.value
    ? dataObj?.value?.filter((item: any) =>
        isObjectData.value
          ? item[props.searchField]
              .toUpperCase()
              .includes((srcValue.value as string).toUpperCase())
          : item
              .toUpperCase()
              .includes((srcValue.value as string).toUpperCase())
      )
    : dataObj?.value
})
const onFieldClick = () => {
  if (!autocomplete.value) {
    toggleDropDown()
  } else {
    if (!isOpen.value) toggleDropDown()
  }
}

const onIconClick = () => {
  toggleDropDown()
}

const toggleDropDown = (value: string = '') => {
  let newValue: string = value
  // if (!autocomplete.value) {
  if (!isOpen.value) {
    oldValue.value = srcValue.value as any
    srcValue.value = props.actionWord
  } else {
    newValue = value || oldValue.value
  }
  // }
  srcValue.value = newValue
  isOpen.value = !isOpen.value
}

const clickOutside = () => {
  if (isOpen.value) toggleDropDown()
}

const dropdownClick = (event: Event) => {
  const { target } = event
  const item = (target as Element).closest('.select__item')

  if (item && item instanceof HTMLElement) {
    emits('update:modelValue', item.dataset.name)
    emits('onChange', item.dataset.name)
    toggleDropDown(item.dataset.label)
  }
}

const itemKeyDown = (event: KeyboardEvent) => {
  const { key } = event
  switch (key) {
    case keysCodes.ESC:
      toggleDropDown()
      break
    case keysCodes.ENTER:
      break
    case keysCodes.ARROW_DOWN:
      focusNextItem()
      break
    case keysCodes.ARROW_UP:
      focusPreviousItem()
      break
  }
}

const focusNextItem = () => {
  focusedItem.value = focusedItem.value
    ? focusedItem.value.nextSibling
    : dropdown.value.querySelector('li')
  focusedItem.value.focus()
}

const focusPreviousItem = () => {
  const previousElement = focusedItem.value.previousSibling
  if (previousElement.nodeName !== 'LI') return toggleDropDown()
  focusedItem.value = previousElement
  focusedItem.value.focus()
}

const onKeyDown = (event: KeyboardEvent) => {
  const { key } = event
  const next = dropdown.value.querySelector('li') as HTMLElement
  switch (key) {
    case keysCodes.ESC:
      if (isOpen.value) toggleDropDown()
      break
    case keysCodes.ENTER:
      if (!isOpen.value) toggleDropDown()
      break
    case keysCodes.ARROW_DOWN:
      {
        if (!isOpen.value) {
          toggleDropDown()
          next.focus()
          focusedItem.value = next
        }
        next.focus()
      }
      break
  }
}

const itemClick = (item: any) => {
  const val = isObjectData.value ? item[props.idField] : item
  const label = isObjectData.value ? item[props.displayField] : item
  emits('update:modelValue', val)
  emits('onChange', item)
  toggleDropDown(label)
}

watch(
  () => isOpen.value,
  val => {
    if (val && dropdown.value) nextTick(() => Scrollbar.init(dropdown.value))
  }
)

watch(
  () => modelValue.value,
  () => {
    const curItem = geCurrentItem()
    if (isObjectData.value) {
      srcValue.value = curItem ? curItem[props.displayField] : ''
    } else {
      srcValue.value = curItem
    }
  }
)

defineExpose({ toggleDropDown, itemClick, isOpen })
</script>
