<template>
  <div class="container mx-auto">
    <div class="workFilter pt-16">
      <div class="workFilter__title md:absolute bottom-0 mb-5 sm:mb-0">
        <Heading text="Work" />
      </div>
      <div class="workFilter__nav flex justify-center">
        <NuxtLink
            v-for="link in links"
            :to="link.url"
            class="flex justify-center items-center h-8 sm:h-16 sm:px-3 py-2 ml-2 mr-2 font-medium text-gray-400 text-sm sm:text-base md:text-lg"
            aria-current="page"
        >
            {{ link.title  }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkFilter",
  data() {
    return {
      links: [
        {url: '/work', title: 'Type of client'},
        {url: '/work/disciplines', title: 'Type of work'},
        {url: '/work/archives', title: 'All projects'},
      ]
    }
  }
}
</script>

<style scoped>

.workFilter {
  border-bottom: 1px solid #e3e4e5;
  position: relative;
}

.workFilter__nav {
  text-transform: uppercase;
}

.workFilter__nav > *:hover, .router-link-active {
  color: #111826;
}

.router-link-exact-active {
  border-bottom: 1px solid #111826;
}
</style>