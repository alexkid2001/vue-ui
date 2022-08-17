import LrGalleryWithImgs from './GalleryWithImgs.vue'
import LrGallery from './LrGallery.vue'
import '../../styles/index.scss'

export default {
  title: 'LR UI/LrGallery',
  component: LrGallery,
  argTypes: {
    thumbs: {
      control: 'boolean',
    },
  },
}

const Template = args => ({
  components: { LrGallery },
  setup() {
    return { args }
  },
  template: `
    <div class="container" style="max-width: 960px">
      <lr-gallery v-bind="args" >
        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
      </lr-gallery>
    </div>`,
})

export const Slider = Template.bind({})
Slider.args = {}

export const Gallery = Template.bind({})
Gallery.args = {
  thumbs: true,
  small: false,
}
