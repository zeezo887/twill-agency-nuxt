<template>
  <div class="work-header flex justify-between mb-5">
    <div class="flex">
      <h3 class="work-header__title text-xl md:text-2xl lg:text-3xl">
        <span>{{ title }}</span>
      </h3>
      <div class="work-header__count ml-3">{{ count }}</div>
    </div>

    <div class="work-header__action flex justify-center items-center" v-if="viewLink">
      <NuxtLink class="link" :to="viewLink">
        View all
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "WorkHeader",
  props: ["title", "count", "viewLink"]
}
</script>

<style scoped>

.work-header__count {
  font-size: 13px;
}


.work-header__action:hover a {
  border-bottom: 1px solid #111826
}

</style>