<template>
  <div class="video-card flex py-5">
    <div class="video-card__image basis-1/2">
      <img
          v-if="image"
          :srcset="image.srcset"
          :src="image.src"
          :alt="image.alt"
      />
    </div>
    <div class="video-card__title px-5 basis-1/2">
      <h4 class="">{{ video.title }}</h4>
      <p class="text-slate-500 mt-2">
        {{ video.date }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Video",
  props: ["video"],
  computed: {
    image() {
      return extractCropFromMediaRole(this.video.media, {role: "video"})
    }
  }
}
</script>

<style scoped>
.video-card {
  border-top: 1px solid #64748b2e;
}

.video-card__title h4 {
  font-size: 27px;
  line-height: 32px;
  font-weight: 500;
}
</style>