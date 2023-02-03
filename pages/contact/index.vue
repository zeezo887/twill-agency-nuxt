<template>
  <div class="container mx-auto pt-16">
    <Heading text="Contact" />

    <TwoItems class="pt-12">
      <OfficeCard v-for="office in offices" :office="office" />
    </TwoItems>
  </div>
</template>

<script lang="ts" setup>
import { JsonApiDataResponse } from '@area17/twill-api-client'
import OfficeCard from "~/components/cards/OfficeCard.vue";
import TwoItems from "~/components/lists/TwoItems.vue";

const { $twill } = useNuxtApp()

const { data: officeResponse } = await useAsyncData('offices', () => {
  return $twill.find('offices').include(['media']).fetch()
})

const offices = $twill.transform(
    officeResponse.value as JsonApiDataResponse
)
</script>

<style scoped>

</style>