<template>
  <NuxtLink :to="`/work/${work.slug}`" class="slide">
    <div class="slide__content">
      <div class="slide__image">
        <img
            v-if="image"
            :srcset="image.srcset"
            :src="image.src"
            :alt="image.alt"
        />
      </div>

      <div class="slide__title">
        <h2 class="">{{ work.title }}</h2>
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
  position: absolute;
  bottom: 10px;
  left: 50px;
  text-align: left;
  font-size: 25px;
  font-weight: 500;
  line-height: 30px;
}

.slide {
  width: 100%;
}

.slide:hover .slide__title h2 {
  border-bottom: 1px solid #111826;
}

img {
  width: 100%;
}
</style>