<template>
  <div class="container mx-auto">
    <ThreeItems class="pt-7 md:pt-12">
      <ClientCard v-for="sector in sectors" :sector="sector" />
    </ThreeItems>
  </div>
</template>

<script lang="ts" setup>
import { JsonApiDataResponse } from '@area17/twill-api-client'
import ClientCard from "~/components/cards/ClientCard.vue";
import ThreeItems from "~/components/lists/ThreeItems.vue";
import {useNavState} from "~/store/store";

definePageMeta({
  layout: "work",
});

const { $twill } = useNuxtApp()

onMounted(() => {
  const navState = useNavState()
  navState.setAbsolute(false)
})

const { data: sectorsResponse } = await useAsyncData('sectors', () => {
  return $twill.find('sectors')
      .include(['works.media']).fetch()
})

const sectors = $twill.transform(
    sectorsResponse.value as JsonApiDataResponse
)

useSettingsHeadSeo("sectors")
</script>

<style scoped>
</style>