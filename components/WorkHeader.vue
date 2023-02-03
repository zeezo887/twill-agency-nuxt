<template>
  <div class="work-header flex justify-between mb-5">
    <div class="flex">
      <h3 class="work-header__title">
        {{ title }}
      </h3>
      <div class="work-header__count ml-3">{{ count }}</div>
    </div>

    <div class="work-header__action flex justify-center items-center" v-if="viewLink">
      <Link :to="viewLink">View All</Link>
    </div>
  </div>
</template>

<script lang="ts">
import Link from "~/components/Link.vue";
export default {
  name: "WorkHeader",
  props: ["title", "count", "viewLink"]
}
</script>

<style scoped>
.work-header__title {
  font-size: 28px;
}

.work-header__count {
  font-size: 13px;
}

.work-header__action {
  color: #e61428;
}

.work-header__action:hover {
  border-bottom: 1px solid #e61428;
}

</style>