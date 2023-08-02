<template>
  <NuxtLink :to="`/work/sector/${sector.slug}`" class="client-card">
    <div class="client-card__content pb-7">
      <div class="client-card__header mb-5">
        <WorkHeader :title="sector.title" :count="sector.works.length" />
      </div>

      <div class="client-card__body">
        <Carousel
            :settings="settings"
            v-on:mouseover="onMouseOver"
            v-on:mouseleave="onMouseLeave"
            ref="myCarousel"
        >
          <Slide v-for="(image, index) in images" :key="index">
            <div class="client-card__image">
              <img
                  v-if="image"
                  :srcset="image.srcset"
                  :src="image.src"
                  :alt="image.alt"
              />
            </div>
          </Slide>
        </Carousel>

      </div>
    </div>

  </NuxtLink>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
export default {
  components: {
    Carousel,
    Slide
  },
  props: ["sector"],
  computed: {
    images() {
      return this.sector.works && this.sector.works.map(
          (w) => extractCropFromMediaRole(w.media, {role: "cover"})
      )
    }
  },
  data() {
    return {
      settings: {
        wrapAround: true,
      }
    }
  },
  methods: {
    onMouseOver() {
      this.settings.autoplay = 50;
      this.$refs.myCarousel.restartCarousel()
    },
    onMouseLeave() {
      this.settings = {wrapAround: true}
      this.$refs.myCarousel.restartCarousel()
    }
  }
}
</script>

<style>
.client-card:hover .work-header__title span {
  border-bottom: 1px solid #111826;
}
</style>