<template>
  <div class="container mx-auto">
    <WorkHero :work="work" />

    <div class="work-body">
      <div v-for="block in work.blocks.default">
        <Quote :block="block" :url="`/work/${work.slug}/story`" v-if="block.blockType == 'quote'" />

        <Text v-if="block.blockType == 'text'" :html="block.content.html" />

        <FullWidthImage :block="block" v-if="block.blockType == 'full-width-image'" class="py-5" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {JsonApiDataResponse} from "@area17/twill-api-client";
import Quote from "~/components/blocks/Quote.vue";
import FullWidthImage from "~/components/blocks/FullWidthImage.vue";
import Text from "~/components/blocks/Text.vue";
import WorkHero from "~/components/lists/WorkHero.vue";

const { $twill } = useNuxtApp()
const route = useRoute();

const { data: workResponse } = await useAsyncData(`work-${route.params.slug}`, () => {
  return $twill.find('works')
      .filter({ slug: route.params.slug })
      .include(['media', 'disciplines', 'blocks.blocks', 'blocks.media']).fetch()
})

const work = $twill.transform(
    workResponse.value as JsonApiDataResponse
)[0]

useHeadSeo({title: work.title})
</script>

<style scoped>


</style>