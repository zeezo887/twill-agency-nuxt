<template>
  <div class="work-header pt-16 pb-12">
    <TwoItems>
      <div class="work-header__title">
        <h1>{{ work.title}}</h1>
        <h3 class="text-slate-500 mt-4">
            <span v-for="discipline in work.disciplines">
              {{ discipline.title }}
            </span>
        </h3>
      </div>
      <div class="work-header__subtitle">
        <h2>
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
    }
  }
}
</script>

<style scoped>
.work-header__title h1 {
  font-size: 50px;
  font-weight: 500;
  line-height: 60px;
}

.work-header__subtitle h2 {
  font-size: 27px;
  font-weight: 500;
  line-height: 32px;
}

.work-hero img {
  width: 100%;
}

</style>