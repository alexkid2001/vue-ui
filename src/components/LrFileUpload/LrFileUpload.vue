<template>
  <div class="lr-file-upload" :class="classObj">
    <div class="lr-file-upload__wrap">
      <div class="lr-file-upload__title">{{ label }}</div>
      <div class="lr-file-upload__description" v-if="!fileName">
        {{ description }}
      </div>
      <div class="lr-file-upload__actions" ref="dragdropArea">
        <input
          type="file"
          ref="fileInput"
          :accept="accept"
          :multiple="multiple"
          class="lr-file-upload__input"
          @change="onChosenFile"
          @dragenter.stop="onDragEnter"
          @drop.stop="onDragEnd"
          @dragend.prevent="onDragEnd"
        />
        <img
          :src="fileUrl"
          v-if="isLogoUpload && isUploaded"
          class="lr-file-upload__image"
          alt="uploaded image"
        />
        <template v-if="isImageDummy">
          <lr-ico ico-name="upload" class="lr-file-upload__dummy-icon"></lr-ico>
          <span
            class="lr-file-upload__dummy-text"
            v-html="imageDummyText"
          ></span>
        </template>
        <div class="lr-file-upload__file-name" v-if="fileName && isFileUpload">
          {{ fileName }}
        </div>
        <lr-button
          :icon-name="uploadButtonIcon"
          icon-type="left"
          size="small"
          class="lr-file-upload__upload-button"
          v-if="!fileName || (!isLogoUpload && isUploaded)"
          @click="uploadFile()"
          >{{ buttonLabel }}</lr-button
        >
        <lr-button
          v-if="fileName && !isImageUploaded"
          icon-name="trash"
          icon-type="left"
          type="link"
          size="small"
          class="lr-file-upload__delete-button"
          @click.prevent="deleteFile"
        >
          {{ deleteButtonLabel }}
        </lr-button>
      </div>
      <div
        id="files-list"
        class="lr-file-upload__image-list"
        v-if="isImageUploaded"
      >
        <div
          class="lr-file-upload__image-item"
          v-for="(image, idx) in filesList"
          draggable="true"
          @dragstart="startDrag($event, idx)"
          @drop="onDrop($event, idx)"
          @dragover.prevent
          @dragenter.prevent
        >
          <div class="lr-file-upload__image-preview">
            <img :src="image.imgUrl || image" alt="" />
          </div>
          <div class="lr-file-upload__image-item-action">
            <LrButton
              icon-type="only_icon"
              icon-name="edit"
              type="link"
              size="large"
              class="lr-file-upload__edit-button"
              @click="editImage(image)"
            />
            <LrButton
              icon-type="only_icon"
              icon-name="trash"
              type="link"
              size="large"
              class="lr-file-upload__delete-button"
              @click="deleteImage(idx)"
            />
          </div>
        </div>
        <modals-container></modals-container>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import './styles.scss'
import LrButton from '@/components/LrButton/LrButton.vue'
import LrIco from '@/components/LrIco/LrIco.vue'
import { ref, computed, toRefs, withDefaults, defineEmits, watch } from 'vue'
import { Event } from '@/types/global'
import { StringUnion } from '@/utils'
import { DIALOG_TYPES } from '@/utils/enums'
import { getResultFromModal } from '@/utils/dialog-promise'
import LrConfirmDialog from '@/components/LrDialog/LrConfirmDialog.vue'
// @ts-ignore
import { ModalsContainer } from 'vue-final-modal'
import { toDataURL, dataURLtoFile } from '@/utils/url-to-file'

type FieldType = '' | 'imageUpload' | 'logoUpload' | 'fileUpload'
const TypeVariation = StringUnion('', 'imageUpload', 'logoUpload', 'fileUpload')

interface ImgFile extends File {
  imgUrl?: string
}

const base64Reg = /base64/

const props = withDefaults(
  defineProps<{
    label?: string
    deleteButtonLabel?: string
    uploadButtonLabel?: string
    uploadButtonIcon?: string
    changeFileButtonLabel?: string
    fileTypeDescription?: string
    accept?: string
    type?: FieldType
    imageDummyText?: string
    maxSize?: number
    multiple?: boolean
    sizeLimitText?: string
    modelValue: any[] | string
  }>(),
  {
    deleteButtonLabel: 'Удалить',
    uploadButtonLabel: 'Выбрать файл',
    uploadButtonIcon: '',
    changeFileButtonLabel: 'Изменить файл',
    fileTypeDescription: 'Файлы',
    accept: '',
    type: 'fileUpload',
    imageDummyText: 'Перетащите изображение <br/>или ',
    maxSize: 30,
    multiple: false,
    sizeLimitText: 'до 30 МБ',
  }
)

const emits = defineEmits(['update:modelValue', 'editImage'])

const { type, multiple } = toRefs(props)
const isImageUploaded = computed((): boolean => type?.value === 'imageUpload')
const fileInput = ref()
const dragdropArea = ref()
const fileName = ref()
const fileUrl = ref()
const filesList = ref<ImgFile[] | any[]>(
  Array.isArray(props.modelValue) ? [...props.modelValue] : []
)
const currentImage = ref<number>()

const classObj = computed(() => ({
  uploaded: fileName.value,
  'lr-file-upload--image':
    type?.value !== 'fileUpload' && TypeVariation.guard(type.value),
  small: !isImageUploaded.value,
}))

const description = computed(() => {
  let res = props.accept.split(',')
  res = res.map((item: string) => item.replace('.', '').toUpperCase())
  const sizeLimit = ` ${props.sizeLimitText}`
  return `${props.fileTypeDescription} ${res.join(', ')} ${
    isImageFileUpload.value ? sizeLimit : ''
  }`
})

const isUploaded = computed(
  (): boolean => !!fileUrl.value || !!filesList.value.length
)

const isLogoUpload = computed((): boolean => type?.value === 'logoUpload')
const isFileUpload = computed((): boolean => type?.value === 'fileUpload')
const buttonLabel = computed(() =>
  !isFileUpload
    ? props.uploadButtonLabel
    : !fileName.value
    ? props.uploadButtonLabel
    : props.changeFileButtonLabel
)
const isImageDummy = computed((): boolean => type?.value === 'imageUpload')

const isImageFileUpload = computed(
  () => type?.value && TypeVariation.guard(type.value)
)

const maxSize = computed(() => props.maxSize * 1000000)

const uploadFile = (idx: number | undefined = undefined) => {
  idx || idx === 0
    ? (currentImage.value = idx)
    : (currentImage.value = undefined)
  fileInput.value?.click()
}

const isExtraSize = (file: File) => file.size > maxSize.value

const updateFilesList = (): void => {
  filesList.value.forEach((item, idx) => {
    if (typeof item !== 'object') {
      if (!item.match(base64Reg)) {
        toDataURL(item).then(dataUrl => {
          let fileData: ImgFile = dataURLtoFile(dataUrl, `img${idx}`)
          // console.log('Here is JavaScript File Object', fileData)
          fileData.imgUrl = dataUrl as string
          filesList.value[idx] = fileData
        })
      } else {
        let fileData: ImgFile = dataURLtoFile(item, `img${idx}`)
        // console.log('Here is JavaScript File Object', fileData)
        fileData.imgUrl = item as string
        filesList.value[idx] = fileData
      }
    }
  })
  console.log('update')
  emits('update:modelValue', filesList.value)
}

if (isImageUploaded) updateFilesList()

const onChosenFile = (event: Event<EventTarget>) => {
  if (
    event.target &&
    ((event.target as HTMLInputElement).files as FileList).length
  ) {
    const files = (event.target as HTMLInputElement).files as FileList
    if (!multiple.value) {
      fileName.value = files[0].name
      fileUrl.value = URL.createObjectURL(fileInput.value.files[0])
      emits('update:modelValue', fileUrl.value)
    } else {
      if (currentImage.value === undefined) {
        ;[...files].forEach((item: ImgFile, idx: number) => {
          const curImg = item
          curImg.imgUrl = URL.createObjectURL(item)
          filesList.value.push(curImg)
        })
      } else {
        filesList.value[currentImage.value] = files[0]
        filesList.value[currentImage.value].imgUrl = URL.createObjectURL(
          files[0]
        )
      }
      updateFilesList()
    }
  }
}

const deleteFile = () => {
  ;(fileInput.value as HTMLInputElement).value = ''
  fileName.value = ''
  fileUrl.value = ''
  emits('update:modelValue', fileUrl.value)
}

const onDragEnter = (event: DragEvent) => {
  dragdropArea.value.classList.toggle('drag-hover', true)
}

const onDragEnd = (event: DragEvent) => {
  dragdropArea.value.classList.toggle('drag-hover', false)
}

const confirmDialog = async () => {
  const dialogResult = await getResultFromModal(LrConfirmDialog, {
    title: 'Удалить фотографию мз галереи?',
    confirmButtonTitle: 'Удалить',
    cancelButtonTitle: 'Отменить',
    type: DIALOG_TYPES.DANGEROUS,
    attach: '#files-list',
  })
  return dialogResult ?? false
}

const deleteImage = async (idx: number) => {
  if (await confirmDialog()) {
    filesList.value.splice(idx, 1)
  }
}

const startDrag = (event: DragEvent, idx: number) => {
  ;(event.dataTransfer as DataTransfer).dropEffect = 'move'
  ;(event.dataTransfer as DataTransfer).effectAllowed = 'move'
  ;(event.dataTransfer as DataTransfer).clearData()
  ;(event.dataTransfer as DataTransfer).setData('id', String(idx))
}

const onDrop = (event: DragEvent, idx: number) => {
  const curIdx = Number((event.dataTransfer as DataTransfer).getData('id'))
  if (idx !== curIdx) {
    filesList.value.splice(idx, 0, filesList.value[curIdx])
    idx > curIdx
      ? filesList.value.splice(curIdx, 1)
      : filesList.value.splice(curIdx + 1, 1)
  }
  ;(event.dataTransfer as DataTransfer).clearData()
}
const editImage = (image: number): void => {
  emits('editImage', image)
}

watch(
  () => props.modelValue,
  () => {
    if (isImageUploaded && Array.isArray(props.modelValue)) {
      updateFilesList()
    }
  }
)
</script>
