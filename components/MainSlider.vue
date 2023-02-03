<template>
  <Carousel :wrap-around="items.length > 1" :autoplay="2000">
    <Slide v-for="(feature, index) in items" :key="index">
      <WorkSlide :work="feature.featured" />
    </Slide>
  </Carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import WorkSlide from "~/components/cards/WorkSlide.vue";
export default {
  name: "MainSlider",
  props: ["items"],
  components: {
    WorkSlide,
    Carousel,
    Slide
  }
}
</script>

<style scoped>

</style>