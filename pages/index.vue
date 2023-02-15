<template>
  <div class="">
    <div class="main_bucket mb-12">
      <MainSlider :items="data.mainFeatures" />
    </div>

    <div class="secondary_bucket container mx-auto">
      <FourItems>
        <WorkCard v-for="feature in data.secondaryFeatures" :work="feature.featured" :show-subtitle="true" />
      </FourItems>
    </div>
  </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import WorkCard from "~/components/cards/WorkCard.vue";
import FourItems from "~/components/lists/FourItems.vue";

const { $twill } = useNuxtApp()

const { data, error} = await useAsyncData(
    'main-features',
    () => {
      return Promise.all([
        $twill.find('features').filter({bucketKey: 'home_main_feature'})
            .include(['featured.media'])
            .fetch(),
        $twill.find('features').filter({bucketKey: 'home_secondary_features'})
            .include(['featured.media'])
            .fetch(),
      ]);
    },
    {
      transform: ([main, secondary]) => {
        return {
          mainFeatures: $twill.transform(main),
          secondaryFeatures: $twill.transform(secondary)
        }
      }
    }
)

useSettingsHeadSeo('homepage')
</script>

<style scoped>

</style>