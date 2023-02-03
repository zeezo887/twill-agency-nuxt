<template>
  <div class="container mx-auto">
    <div class="works pt-12">
        <WorkHeader
            title="All Projects"
            :count="works.length"
        />

        <FourItems>
          <WorkCard v-for="work in works" :work="work" />
        </FourItems>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { JsonApiDataResponse } from '@area17/twill-api-client'
import WorkCard from "~/components/cards/WorkCard.vue";
import FourItems from "~/components/lists/FourItems.vue";

definePageMeta({
  layout: "work",
});

const { $twill } = useNuxtApp()

const { data: workResponse } = await useAsyncData('works', () => {
  return $twill.find('works')
      .include(['media']).fetch()
})

const works = $twill.transform(
    workResponse.value as JsonApiDataResponse
)
</script>

<style scoped>

</style>