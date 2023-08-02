<template>
  <div class="work-header pt-16 pb-12">
    <TwoItems>
      <div class="work-header__title ">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-medium mb-4">{{ work.title}}</h1>
        <h3 class="text-slate-500 mb-4">
          {{ disciplines }}
        </h3>
      </div>
      <div class="work-header__subtitle">
        <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
          {{ work.description }}
        </h2>
      </div>
    </TwoItems>

    <div class="work-hero pt-6">
      <img
          v-if="image"
          :srcset="image.srcset"
          :src="image.src"
          :alt="image.alt"
      />
    </div>
  </div>
</template>

<script>
import TwoItems from "~/components/lists/TwoItems.vue";

export default {
  name: "WorkHero",
  components: {TwoItems},
  props: ["work"],
  computed: {
    image() {
      return extractCropFromMediaRole(this.work.media, {role: "cover"})
    },
    disciplines() {
      let text = ""

      this.work.disciplines.forEach((disc, i) => {
        if (i + 1 === this.work.disciplines.length) {
          text = `${text} ${disc.title}`
        } else {
          text = `${text} ${disc.title},`
        }

      })

      return text
    }
  }
}
</script>

<style scoped>

.work-hero img {
  width: 100%;
}

</style>