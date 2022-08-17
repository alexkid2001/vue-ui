<template>
  <lr-gallery ref="gallery" :images="images">
    <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="">
    <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="">
  </lr-gallery>
  <button @click="clickHandler">Add car</button>
</template>

<script lang="ts">

import LrGallery from './LrGallery.vue'
import { ref, SetupContext, defineComponent } from "vue";

export default defineComponent({
  name: "lr-gallery-with-imgs",
  components: {
    LrGallery
  },

  setup(props: any, context: SetupContext) {
    const gallery = ref(null);
    const images = ref([
      "https://www.focus2move.com/wp-content/uploads/2021/02/Audi-RS_e-tron_GT-2022-1024-1a.jpg"
    ]);

    return {
      gallery,
      images,
      clickHandler: () => {
        images.value.push("https://www.focus2move.com/wp-content/uploads/2021/02/Audi-RS_e-tron_GT-2022-1024-1a.jpg");
      }
    }
  }

});
</script>

<style>

</style>