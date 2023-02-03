<template>
  <div class="block-image">
    <img
        v-if="image"
        :srcset="image.srcset"
        :src="image.src"
        :alt="image.alt"
    />
    <p class="pt-4 text-slate-500">{{ image.caption }}</p>
  </div>
</template>

<script>
export default {
  name: "FullWidthImage",
  props: ["block"],
  computed: {
    image() {
      return extractCropFromMediaRole(this.block.media, {role: "fullImageBlock"})
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
}
</style>