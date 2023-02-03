<template>
  <div>
    <AppHeader />
    <main>
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