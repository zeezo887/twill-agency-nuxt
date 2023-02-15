<template>
  <div class="container mx-auto">
    <div class="disciplines pt-12">
      <div class="discipline" v-for="discipline in disciplines">
        <WorkHeader
            :title="discipline.title"
            :count="discipline.works.length"
            :view-link="`disciplines/${discipline.slug}`"
        />
        <FourItems>
          <WorkCard v-for="work in discipline.works" :work="work" />
        </FourItems>
      </div>
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

const { data: disciplineResponse } = await useAsyncData('disciplines', () => {
  return $twill.find('disciplines')
      .include(['works.media']).fetch()
})

const disciplines = $twill.transform(
    disciplineResponse.value as JsonApiDataResponse
)

useSettingsHeadSeo('disciplines')
</script>

<style scoped>

</style>