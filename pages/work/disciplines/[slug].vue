<template>
  <div class="container mx-auto">
    <div class="works pt-12">
      <WorkHeader
          :title="discipline.title"
          :count="discipline.works.length"
      />

      <FourItems>
        <WorkCard v-for="work in discipline.works" :work="work" />
      </FourItems>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {JsonApiDataResponse} from "@area17/twill-api-client";
import WorkCard from "~/components/cards/WorkCard.vue";
import FourItems from "~/components/lists/FourItems.vue";

definePageMeta({
  layout: "work",
});

const { $twill } = useNuxtApp()
const route = useRoute();

const { data: disciplineResponse } = await useAsyncData(`discipline-${route.params.slug}`, () => {
  return $twill.find('disciplines')
      .filter({ slug: route.params.slug })
      .include(['works.media']).fetch()
})

const discipline = $twill.transform(
    disciplineResponse.value as JsonApiDataResponse
)[0]
</script>

<style scoped>

</style>