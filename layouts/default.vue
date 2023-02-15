<template>
  <div>
    <AppHeader />
    <main class="pb-15">
    <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>