<template>
  <NuxtLink class="link" :to="url">
    <slot></slot>
  </NuxtLink>
</template>

<script>
export default {
  name: "Link",
  props: ["url"]
}
</script>

<style scoped>
.link {
  color: #e61428;
}

.link:hover {
  border-bottom: 1px solid #e61428;
}
</style>