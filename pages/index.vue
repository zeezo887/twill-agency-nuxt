<template>
  <div class="">
    <div class="main_bucket mb-12">
      <MainSlider :items="mainFeatures" />
    </div>

    <div class="secondary_bucket container mx-auto">
      <FourItems>
        <WorkCard v-for="feature in secondaryFeatures" :work="feature.featured" />
      </FourItems>
    </div>
  </div>
</template>

<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import {JsonApiDataResponse} from "@area17/twill-api-client";
import WorkCard from "~/components/cards/WorkCard.vue";
import FourItems from "~/components/lists/FourItems.vue";

const { $twill } = useNuxtApp()

const { data: mainfeaturesResponse } = await useAsyncData('main-features', () => {
  return $twill.find('features')
      .filter({
        bucketKey: 'home_main_feature',
      })
      .include(['featured.media'])
      .fetch()
})

const mainFeatures = $twill.transform(
    mainfeaturesResponse.value as JsonApiDataResponse
)

const { data: secondaryfeaturesResponse } = await useAsyncData('sec-features', () => {
  return $twill.find('features')
      .filter({
        bucketKey: 'home_secondary_features',
      })
      .include(['featured.media'])
      .fetch()
})

const secondaryFeatures = $twill.transform(
    secondaryfeaturesResponse.value as JsonApiDataResponse
)



</script>

<style scoped>

</style>