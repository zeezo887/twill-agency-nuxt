<template>
  <header class="global-header bg-slate-100">
    <div class="global-header__content flex justify-between h-16 container mx-auto">
      <a href="/" class="global-header__logo flex items-center justify-between">
        <h2 class="text-3xl font-bold">Twill</h2>
      </a>

      <div class="global-header__nav flex items-center justify-between">
        <div class="nav__items flex space-x-4">
          <NuxtLink to="/work" class="text-sm font-medium nav__item" aria-current="page">Work</NuxtLink>
          <NuxtLink to="/about" class="px-3 py-2 rounded-md text-sm font-medium nav__item" aria-current="page">About</NuxtLink>
          <NuxtLink to="/news" class="px-3 py-2 rounded-md text-sm font-medium nav__item" aria-current="page">News</NuxtLink>
          <NuxtLink to="/contact" class="px-3 py-2 rounded-md text-sm font-medium nav__item" aria-current="page">Contact</NuxtLink>
        </div>
      </div>
    </div>
  </header>
<!--  <nav class="bg-slate-100">-->
<!--    <div class="max-w-7xl mx-auto">-->
<!--      <div class="relative flex items-center justify-between h-16">-->
<!--        <div class="absolute inset-y-0 left-0 flex items-center tablet-v:hidden">-->
<!--          <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">-->
<!--            <span class="sr-only">Open main menu</span>-->
<!--            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />-->
<!--            </svg>-->
<!--            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />-->
<!--            </svg>-->
<!--          </button>-->
<!--        </div>-->
<!--        <div class="flex-1 flex items-center justify-center tablet-v:items-stretch tablet-v:justify-between">-->
<!--          <div class="flex-shrink-0 flex items-center">-->
<!--            <h2 class="text-4xl font-bold">Twill</h2>-->
<!--          </div>-->
<!--          <div class="hidden tablet-v:block tablet-v:ml-6">-->
<!--            <div class="flex space-x-4">-->
<!--              &lt;!&ndash; Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" &ndash;&gt;-->
<!--              <NuxtLink to="/work" class="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-700 hover:text-white" aria-current="page">Work</NuxtLink>-->
<!--              <NuxtLink to="/about" class="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-700 hover:text-white" aria-current="page">About</NuxtLink>-->
<!--              <NuxtLink to="/news" class="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-700 hover:text-white" aria-current="page">News</NuxtLink>-->
<!--              <NuxtLink to="/contact" class="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-700 hover:text-white" aria-current="page">Contact</NuxtLink>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </nav>-->
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style scoped>
.router-link-active {
  background-color: red;
}

.nav__item {
  padding: 6px 10px;
  border-radius: 5px;
  color: #111826;
}

.nav__item:hover, .router-link-active {
  background-color: #111826;
  color: #fff;
}
</style>