<template>
  <footer class="footer text-slate-500">
    <div class="container mx-auto">
      <two-items class="py-10">
        <div>
          <ul class="flex footer__links mb-1">
            <li><a>Subscribe to our Newsletter</a></li>
            <li><NuxtLink to="/privacypolicy">Privacy Policy</NuxtLink></li>
          </ul>
          <span>© <span>2003 - 2023</span></span>
        </div>
        <div>
          <ul class="flex social-links justify-end">
            <li class="social-link" v-for="socialLink in socialLinks">
              <a :href="socialLink.value" target="_blank">{{ socialLink.key.replace('_url', '') }}</a>
            </li>
<!--            <li class="social-link"><a>Instagram</a></li>-->
<!--            <li class="social-link"><a>Twitter</a></li>-->
          </ul>
        </div>
      </two-items>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import TwoItems from "~/components/lists/TwoItems.vue";
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
.footer {
  font-size: 20px;
}
.footer__links li {
  margin-right: 40px;
}

.social-links .social-link {
  margin-left: 40px;
  text-transform: capitalize;
}
</style>