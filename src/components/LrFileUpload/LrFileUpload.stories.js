// import LrFileUpload from './LrFileUpload';
import { LrFileUpload } from '../../index'
// import LrIco from '../LrIco/LrIco.vue'
import { LrIco } from '../../index'
import { ref } from 'vue'

export default {
  title: 'LR UI/LrFileUpload',
  component: LrFileUpload,
  argTypes: {
    label: {
      control: 'text',
    },
    deleteButtonLabel: {
      control: 'text',
    },
    uploadButtonLabel: {
      control: 'text',
    },
    changeFileButtonLabel: {
      control: 'text',
    },
    uploadButtonIcon: {
      control: 'text',
    },
    fileTypeDescription: {
      control: 'text',
      default: 'Файлы',
    },
    type: {
      control: 'select',
      options: ['imageUpload', 'logoUpload', 'fileUpload'],
    },
    sizeLimitText: {
      control: 'text',
    },
    modelValue: 'text',
  },
}

const Template = args => ({
  components: { LrFileUpload, LrIco },

  setup() {
    const filePath = ref(args.modelValue ? args.modelValue : '')
    return {
      args,
      filePath,
    }
  },
  template: `<LrFileUpload v-bind="args" v-model="filePath" />
  <div style="margin-top: 20px;">File Path = {{ filePath }}</div>`,
})

export const FileUpload = Template.bind({})
FileUpload.args = {
  label: 'Договор',
  deleteButtonLabel: 'Удалить',
  uploadButtonLabel: 'Добавить договор',
  changeFileButtonLabel: 'Заменить договор',
  uploadButtonIcon: 'upload',
  fileTypeDescription: 'Файлы',
  type: 'fileUpload',
  accept: '.doc, .pdf',
  modelValue: null,
}

export const LogoUpload = Template.bind({})
LogoUpload.args = {
  label: 'Логотип',
  deleteButtonLabel: 'Удалить',
  uploadButtonLabel: 'Выберете файл',
  fileTypeDescription: 'Файлы',
  accept: '.png, .jpg, .gif',
  type: 'logoUpload',
  maxSize: 30,
}

export const ImageUpload = Template.bind({})
ImageUpload.args = {
  label: 'Изображения',
  deleteButtonLabel: 'Удалить',
  uploadButtonLabel: 'Выберете файл',
  accept: '.png, .jpg, .jpeg, .gif',
  type: 'imageUpload',
  maxSize: 30,
  multiple: true,
  fileTypeDescription: 'Файлы',
  sizeLimitText: 'до 30 МБ',
  modelValue: null,
}

export const ImageUploadPreload = Template.bind({})
ImageUploadPreload.args = {
  label: 'Изображения',
  deleteButtonLabel: 'Удалить',
  uploadButtonLabel: 'Выберете файл',
  accept: '.png, .jpg, .jpeg, .gif',
  type: 'imageUpload',
  maxSize: 30,
  multiple: true,
  fileTypeDescription: 'Файлы',
  sizeLimitText: 'до 30 МБ',
  modelValue: [
    'https://s3-eu-west-1.amazonaws.com/localrent.images/cars/image_titles/000/021/353/original/FIAT-500L-POP-STAR-2017-black.jpg',
    'https://s3-eu-west-1.amazonaws.com/localrent.images/cars/image_titles/000/019/983/original/Citroen-C-Elysee-2014-white.png',
  ],
}
