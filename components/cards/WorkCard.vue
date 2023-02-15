<template>
  <NuxtLink :to="`/work/${work.slug}`" :class="{'work-card__with-subtitle': showSubtitle && work.subtitle, 'work-card': true}">
    <div class="work-card__content">
      <div class="work-card__image">
        <img
            v-if="image"
            :srcset="image.srcset"
            :src="image.src"
            :alt="image.alt"
        />
      </div>

      <div class="work-card__title">
        <h3 class="pt-3">{{ work.title }}</h3>
        <p class="work-card__subtitle pt-3">{{ work.subtitle }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  work: Object,
  showSubtitle: false
})

const image = extractCropFromMediaRole(props.work.media, {role: "cover"})

</script>

<style scoped>
  img {
    width: 100%;
  }
  .work-card__title {
    display: inline-block;
  }

  .work-card__subtitle {
    display: none;
  }

  .work-card.work-card__with-subtitle:hover .work-card__subtitle {
    display: block;
  }

  .work-card.work-card__with-subtitle:hover .work-card__title h3 {
    display: none;
  }

  .work-card:hover .work-card__title h3 {
    border-bottom: 1px solid #111826;
  }
</style>