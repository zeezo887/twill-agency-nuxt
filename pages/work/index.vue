<template>
  <div class="container mx-auto">
    <ThreeItems class="pt-12">
      <ClientCard v-for="sector in sectors" :sector="sector" />
    </ThreeItems>
  </div>
</template>

<script lang="ts" setup>
import { JsonApiDataResponse } from '@area17/twill-api-client'
import ClientCard from "~/components/cards/ClientCard.vue";
import ThreeItems from "~/components/lists/ThreeItems.vue";

definePageMeta({
  layout: "work",
});

const { $twill } = useNuxtApp()

const { data: sectorsResponse } = await useAsyncData('sectors', () => {
  return $twill.find('sectors')
      .include(['works.media']).fetch()
})

const sectors = $twill.transform(
    sectorsResponse.value as JsonApiDataResponse
)
</script>

<style scoped>
</style>