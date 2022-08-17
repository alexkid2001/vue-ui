import LrPagination from './LrPagination.vue'
import { ref } from 'vue'
export default {
  title: 'LR UI/LrPagination',
  component: LrPagination,
  argTypes: {
    page: {
      control: 'number',
    },
    total: {
      control: 'number',
    },
    perPage: {
      control: 'number',
    },
    rangeSize: {
      control: 'number',
    },
    activeColor: {
      control: 'number',
    },
  },
  parameters: {
    backgrounds: {
      default: 'twitter',
      values: [{ name: 'twitter', value: '#cccccc' }],
    },
  },
}

const Template = args => ({
  components: { LrPagination },
  setup() {
    const page = ref(args.page)
    return {
      args,
      page,
      pageChanged: val => {
        page.value = val
      },
    }
  },
  template: `
    <lr-pagination
      v-model="page"
      v-bind="args"
      @update:modelValue="pageChanged"
    />`,
})

export const Pagination = Template.bind({})
Pagination.args = {
  page: 1,
  total: 100,
  perPage: 10,
  rangeSize: 1,
}
