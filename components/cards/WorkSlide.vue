<template>
  <NuxtLink :to="`/work/${work.slug}`" class="slide">
    <div class="slide__content">
      <div class="slide__image overflow-hidden h-[120vw] sm:h-[100vw] lg:h-screen relative">
        <img
            v-if="image"
            :srcset="image.srcset"
            :src="image.src"
            :alt="image.alt"
        />
      </div>

      <div class="slide__title w-full text-lg lg:text-2xl bottom-[13px] lg:bottom-[50px] absolute">
        <div class="container mx-auto">
          <h2 class=""><span>{{ work.title }}</span></h2>
          <h3 class="">{{ work.subtitle }}</h3></div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: "WorkSlide",
  props: ["work"],
  computed: {
    image() {
      return extractCropFromMediaRole(this.work.media, {role: "cover"})
    }
  }
}
</script>

<style scoped>
.slide__content {
  position: relative;
}
.slide__title {
  text-align: left;
  font-weight: 500;
}

.slide {
  width: 100%;
}

.slide:hover .slide__title h2 span {
  border-bottom: 1px solid #111826;
}

img {
  min-width: 101%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  max-width: unset;
}

</style>