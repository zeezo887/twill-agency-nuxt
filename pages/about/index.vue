<template>
  <div class="container mx-auto">
    <div class="block tablet-h:grid tablet-h:grid-cols-2 tablet-h:gap-8 pt-16">
      <div>
        <Heading :text="about.tagline" />
      </div>
      <div class="intro mt-10 tablet-h:mt-0" v-html="about.text">
      </div>
    </div>

    <ThreeItems class="mt-12">
      <PersonCard v-for="person in people" :person="person" />
    </ThreeItems>
  </div>
</template>

<script lang="ts" setup>
import { JsonApiDataResponse } from '@area17/twill-api-client'
import PersonCard from "~/components/cards/PersonCard.vue";
import ThreeItems from "~/components/lists/ThreeItems.vue";

const { $twill } = useNuxtApp()

const { data: aboutResponse } = await useAsyncData('about', () => {
  return $twill.findOne('abouts', 1).fetch()
})

const about = $twill.transform(
    aboutResponse.value as JsonApiDataResponse
)[0]

const { data: peopleResponse } = await useAsyncData('people', () => {
  return $twill.find('people')
      .include(['media', 'office'])
      .fetch()
})

const people = $twill.transform(
    peopleResponse.value as JsonApiDataResponse
)

useSettingsHeadSeo('about')
</script>

<style>
.intro {
  font-size: 20px;
}
.intro p {
  margin-bottom: 20px;
}
</style>