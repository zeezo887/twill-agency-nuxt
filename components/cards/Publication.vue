<template>
  <NuxtLink :to="`/work/${work.slug}`" class="publication-card flex py-5">
    <div class="publication-card__image basis-1/2">
      <img
          v-if="image"
          :srcset="image.srcset"
          :src="image.src"
          :alt="image.alt"
      />
    </div>
    <div class="publication-card__title px-5 basis-1/2">
      <h4 class=""><span>{{ work.title }}</span></h4>
      <p class="text-slate-500 mt-2">
        by {{ owner }} <br>
        {{ work.client }} <br>
        {{ work.year }}
      </p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: "Publication",
  props: ["work", "owner"],
  computed: {
    image() {
      return extractCropFromMediaRole(this.work.media, {role: "cover"})
    }
  }
}
</script>

<style scoped>
.publication-card {
  border-top: 1px solid #64748b2e;
}

.publication-card__title h4 {
  font-size: 27px;
  line-height: 32px;
  font-weight: 500;
}

.publication-card:hover h4 span {
  border-bottom: 1px solid #111826;
}
</style>