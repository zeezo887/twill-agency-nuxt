<template>
    <div class="main_bucket w-screen h-[120vw] sm:h-[100vw] lg:h-screen">
      <MainSlider :items="data.mainFeatures" />
    </div>

    <div class="secondary_bucket container mx-auto relative mt-5 lg:mt-16">
      <FourItems>
        <WorkCard v-for="feature in data.secondaryFeatures" :work="feature.featured" :show-subtitle="true" />
      </FourItems>
    </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import WorkCard from "~/components/cards/WorkCard.vue";
import FourItems from "~/components/lists/FourItems.vue";
import {useNavState} from "~/store/store";

const { $twill } = useNuxtApp()

onMounted(() => {
  const navState = useNavState()
  navState.setAbsolute(true)
})

const { data, error} = await useAsyncData(
    'main-features',
    () => {
      return Promise.all([
        $twill.find('features').filter({bucketKey: 'home_main_feature'})
            .include(['featured.media'])
            .fetch(),
        $twill.find('features').filter({bucketKey: 'home_secondary_features'})
            .include(['featured.media'])
            .fetch(),
      ]);
    },
    {
      transform: ([main, secondary]) => {
        const sec = $twill.transform(secondary);

        let d = []
        for (let i = 0; i < sec.length; i++) {
          if (i < 5) {
            if (i === 0) {
              d[0] = {one: sec[i]}
            } else {
              if (d[0].hasOwnProperty('four')) {
                d[0].four.push(sec[i])
              } else {
                d[0].four = [sec[i]]
              }
            }
          } else {
            console.log('i', i)
            const id = Math.floor(i / 5);
            if (i % 5 === 0) {
              d[id] = {one: sec[i]}
            } else {
              if (d[id].hasOwnProperty('four')) {
                d[id].four.push(sec[i])
              } else {
                d[id].four = [sec[i]]
              }
            }
          }

        }
        return {
          mainFeatures: $twill.transform(main),
          secondaryFeatures: $twill.transform(secondary),
          transformed: d
        }
      }
    }
)

useSettingsHeadSeo('homepage')
</script>

<style scoped>
.main_bucket {
  //height: 100vh;
}
</style>