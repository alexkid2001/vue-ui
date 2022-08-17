import { App } from 'vue'
import LrGallery from './LrGallery.vue'
import GalleryWithImgs from './GalleryWithImgs.vue'


LrGallery.install = (Vue: App) => {
  Vue.component(LrGallery.name, LrGallery)
}
GalleryWithImgs.install = (Vue: App) => {
  Vue.component(GalleryWithImgs.name, GalleryWithImgs)
}

export { LrGallery, GalleryWithImgs };
