<template>
  <div class="container mx-auto">
    <div class="workFilter pt-16">
      <div class="workFilter__title">
        <Heading text="Work" />
      </div>
      <div class="workFilter__nav flex justify-center">
        <NuxtLink to="/work" class="flex justify-center items-center h-16 px-3 py-2 ml-2 mr-2 text-sm font-medium text-gray-400" aria-current="page">Type of client</NuxtLink>
        <NuxtLink to="/work/disciplines" class="flex justify-center items-center h-16 px-3 py-2 ml-2 mr-2 text-sm font-medium text-gray-400" aria-current="page">Type of work</NuxtLink>
        <NuxtLink to="/work/archives" class="flex justify-center items-center h-16 px-3 py-2 ml-2 mr-2 text-sm font-medium text-gray-400" aria-current="page">All projects</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkFilter"
}
</script>

<style scoped>

.workFilter {
  border-bottom: 1px solid #e3e4e5;
  position: relative;
}

.workFilter__title {
  position: absolute;
  bottom: 0;
}

.workFilter__nav {
  text-transform: uppercase;
}

.workFilter__nav > *:hover, .router-link-active {
  color: #111826;
}

.router-link-active {
  border-bottom: 1px solid #111826;
}
</style>