<template>
  <div class="slider-wrapper" v-if="allImages.length">
    <lr-button
      icon-type="only_icon"
      icon-name="close"
      class="close-fullscreen"
      @click="exitFullScreen"
    ></lr-button>
    <div class="slider">
      <div class="swiper-button swiper-button-prev" v-if="!$props.thumbs">
        <lr-button
          icon-type="only_icon"
          icon-name="chevron_left"
          class="btn-slider"
        ></lr-button>
      </div>
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :navigation="{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }"
        :pagination="
          $props.thumbs
            ? {
                el: null,
              }
            : {
                el: '.swiper-pagination',
              }
        "
        :loop="true"
        :thumbs="{ swiper: thumbsSwiper }"
        :class="{ 'swiper__main-in-slider': $props.thumbs }"
      >
        <swiper-slide
          v-for="(src, index) of allImages"
          @click="requestFullScreen"
        >
          <img class="slide" :src="src" :key="index" :alt="`image-${index}`" />
        </swiper-slide>

        <slot></slot>
      </swiper>
      <swiper
        @swiper="setThumbsSwiper"
        :space-between="4"
        slides-per-view="auto"
        :looped-slides="6"
        :width="96"
        :loop="true"
        watchSlidesProgress
        :modules="modules"
        v-if="$props.thumbs"
        class="swiper__thumbs"
      >
        <swiper-slide v-for="(src, index) of allImages">
          <img class="slide" :src="src" :key="index" :alt="`image-${index}`" />
        </swiper-slide>
      </swiper>
      <div class="swiper-button swiper-button-next" v-if="!$props.thumbs">
        <lr-button
          iconType="only_icon"
          iconName="chevron_right"
          class="btn-slider"
        ></lr-button>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script lang="ts">
import {
  reactive,
  computed,
  PropType,
  SetupContext,
  onMounted,
  getCurrentInstance,
  watchPostEffect,
  defineComponent,
  ref,
} from 'vue'
import LrButton from '../LrButton/LrButton.vue'
import { Navigation, Pagination, Thumbs, FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import './styles.scss'
import 'swiper/css'

export default defineComponent({
  name: 'lr-gallery',

  components: {
    LrButton,
    Swiper,
    SwiperSlide,
  },

  props: {
    fullscreen: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    images: {
      type: Array as PropType<string[]>,
      default: [],
    },
    thumbs: {
      type: Boolean,
      default: false,
    },
  },

  setup(
    props: {
      fullscreen: boolean
      small: boolean
      images: string[]
    },
    context: SetupContext
  ) {
    props = reactive(props)

    const instance = getCurrentInstance()
    const slider = (): HTMLElement => instance?.proxy?.$el

    const isFullScreen = (): boolean =>
      !!(
        document.fullscreenElement ||
        // @ts-ignore
        document.mozFullScreenElement ||
        // @ts-ignore
        document.webkitFullscreenElement ||
        // @ts-ignore
        document.msFullscreenElement
      )

    const requestFullScreen = (): void => {
      if (isFullScreen()) return

      const requestFullScreen =
        slider().requestFullscreen ||
        // @ts-ignore
        slider().mozRequestFullScreen ||
        // @ts-ignore
        slider().webkitRequestFullscreen ||
        // @ts-ignore
        slider().msRequestFullscreen

      requestFullScreen.call(slider())
    }

    const exitFullScreen = (): void => {
      const exitFullScreen =
        document.exitFullscreen ||
        // @ts-ignore
        document.mozCancelFullScreen ||
        // @ts-ignore
        document.webkitExitFullscreen ||
        // @ts-ignore
        document.msExitFullscreen

      exitFullScreen.call(document)
    }

    onMounted(() => {
      ;[
        'fullscreenchange',
        'mozfullscreenchange',
        'MSFullscreenChange',
        'webkitfullscreenchange',
      ].forEach(eventName =>
        document.addEventListener(eventName, () => {
          if (isFullScreen()) {
            slider().classList.add('fs-mode')
          } else {
            slider().classList.remove('fs-mode')
          }
        })
      )
    })

    const allImages = computed(() => {
      const images = [...props.images]

      context.slots.default?.().forEach(element => {
        element.props?.src && images.push(element.props?.src)
      })

      return images
    })

    watchPostEffect(() => {
      if (props.fullscreen) requestFullScreen()
      slider()?.classList.toggle('small', props.small)
    })

    const thumbsSwiper = ref(null)
    const setThumbsSwiper = (swiper: any) => {
      thumbsSwiper.value = swiper
    }

    return {
      allImages,
      exitFullScreen,
      requestFullScreen,
      setThumbsSwiper,
      thumbsSwiper,
      modules: [Pagination, Navigation, Thumbs, FreeMode],
    }
  },
})
</script>
