<template>
  <div class="container mx-auto pt-16">
    <two-items>
      <div>
        <div class="mb-10">
          <Heading :text="`${person.firstName} ${person.lastName}`" />
          <Heading :text="person.officeName" class="text-slate-500" />
        </div>

        <Text :html="person.biography"/>
      </div>
      <div class="">
        <img
            v-if="image"
            :srcset="image.srcset"
            :src="image.src"
            :alt="image.alt"
        />
      </div>
    </two-items>

    <section class="publications-section mt-10">
      <h3 class="mb-5 section__title text-slate-500">Publications</h3>
      <two-items class="publications">
        <Publication
            v-for="work in person.works"
            :work="work"
            :owner="`${person.firstName} ${person.lastName}`"
        />
      </two-items>
    </section>

    <section class="publications-section mt-10">
      <h3 class="mb-5 section__title text-slate-500">Videos</h3>
      <two-items class="publications">
        <Video
            v-for="video in person.videos"
            :video="video"
        />
      </two-items>
    </section>
  </div>
</template>

<script lang="ts" setup>
import TwoItems from "~/components/lists/TwoItems.vue";
import {JsonApiDataResponse} from "@area17/twill-api-client";
import Text from "~/components/blocks/Text.vue";
import Publication from "~/components/cards/Publication.vue";
import Video from "~/components/cards/Video.vue";

const { $twill } = useNuxtApp()
const route = useRoute();

const { data: personResponse } = await useAsyncData(`person-${route.params.slug}`, () => {
  return $twill.find('people')
      .filter({ slug: route.params.slug })
      .include(['media', 'works.media', 'videos.media']).fetch()
})

const person = $twill.transform(
    personResponse.value as JsonApiDataResponse
)[0]

console.log(person)

const image = extractCropFromMediaRole(person.media, {role: "main"})

</script>

<style scoped>
.section__title {
  font-size: 27px;
  line-height: 32px;
  font-weight: 500;
}
</style>