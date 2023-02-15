<template>
  <div class="container mx-auto">
    <WorkHero :work="work"/>

    <div class="work-body">
      <TwoItems>
        <div class="work__case-study">
          <Text :html="work.caseStudyText" />

          <div class="">
            <Link :to="`/work/${work.slug}`">Portfolio view</Link>
          </div>

          <two-items class="work__metas mt-7">
            <div class="work__meta-col">
              <div class="work__meta">
                <p>Client</p>
                <span>Pentagram</span>
              </div>
              <div class="work__meta">
                <p>Sector</p>
                <span>Pentagram</span>
              </div>
              <div class="work__meta">
                <p>Discipline</p>
                <span>Pentagram</span>
              </div>
            </div>
            <div class="work__meta-col">
              <div class="work__meta">
                <p>Office</p>
                <span>Pentagram</span>
              </div>
              <div class="work__meta">
                <p>Date published</p>
                <span>Pentagram</span>
              </div>
              <div class="work__meta">
                <p>Client</p>
                <span>Pentagram</span>
              </div>
            </div>
          </two-items>
        </div>
        <div class="work-story">
          <div v-for="block in work.blocks.default">
            <Quote :block="block" v-if="block.blockType == 'quote'" type="story" />

            <FullWidthImage :block="block" v-if="block.blockType == 'full-width-image'" class="py-5" />
          </div>
        </div>
      </TwoItems>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {JsonApiDataResponse} from "@area17/twill-api-client";
import WorkHero from "~/components/lists/WorkHero.vue";
import TwoItems from "~/components/lists/TwoItems.vue";
import Text from "~/components/blocks/Text.vue";
import Quote from "~/components/blocks/Quote.vue";
import FullWidthImage from "~/components/blocks/FullWidthImage.vue";
import Link from "~/components/Link.vue";

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

<style>
  .work__meta {
    margin-bottom: 20px;
  }
</style>