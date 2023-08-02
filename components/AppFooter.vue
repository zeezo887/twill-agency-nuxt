<template>
  <footer class="text-slate-500 pt-14 text-base lg:text-xl">
    <div class="container mx-auto">
      <div class="flex flex-row lg:justify-between py-4">
        <div class="basis-1/2">
          <ul class="flex flex-col lg:flex-row mb-1">
            <li><NuxtLink to="/privacypolicy">Privacy Policy</NuxtLink></li>
          </ul>
          <span>© <span class="hidden sm:inline-block">2003 - 2023</span> Twill</span>
        </div>
        <div>
          <ul class="flex flex-col lg:flex-row justify-end ml-4">
            <li v-for="socialLink in socialLinks" class="capitalize lg:ml-10">
              <a :href="socialLink.value" target="_blank">{{ socialLink.key.replace('_url', '') }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import {JsonApiDataResponse} from "@area17/twill-api-client";

const { $twill } = useNuxtApp()

const { data: settingResponse } = await useAsyncData('settings', () => {
  return $twill.find('settings').include(['media']).fetch()
})

const settings = $twill.transform(
    settingResponse.value as JsonApiDataResponse
)

const socialLinks = settings.filter(setting => setting.section === 'social')

</script>

<style scoped>
</style>