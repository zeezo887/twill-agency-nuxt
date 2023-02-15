<template>
  <div>
    <AppHeader />
    <main class="pb-15">
      <WorkFilter />
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script>
export default {
  name: "work"
}
</script>

<style scoped>

</style>