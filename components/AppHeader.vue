<template>
  <nav :class="{ absolute: absolute }" class="bg-transparent top-0 w-full z-50">
    <div class="mx-auto container">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button type="button" @click="toggleMenu" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path v-if="!menuOpened" stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
          <div class="flex flex-shrink-0 items-center">
            <h4 class="text-2xl font-bold">
              <a href="/" class="flex items-center justify-between">
                <h4 class="text-2xl font-bold">Twill</h4>
              </a>
            </h4>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <NuxtLink
                  v-for="link in navLinks"
                  :to="link.link"
                  class="px-3 py-2 font-medium" aria-current="page">
                <span class="hover:border-b-2 hover:border-b-black uppercase">{{ link.title }}</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sm:hidden" id="mobile-menu" v-if="menuOpened">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <NuxtLink v-for="link in navLinks" :to="link.link" class="hover:bg-gray-700 block px-3 py-2 uppercase font-medium" aria-current="page">{{ link.title }}</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script>
import {useNavState} from "~/store/store";
import {mapState} from "pinia";

export default {
  name: "AppHeader",
  data() {
    return {
      navLinks: [
        {title: "Work", link: '/work'},
        {title: "About", link: '/about'},
        // {title: "News", link: '/news'},
        {title: "Contact", link: '/contact'},
      ],
      menuOpened: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpened = !this.menuOpened
    }
  },
  computed: {
    ...mapState(useNavState, ['absolute'])
  },

}
</script>

<style scoped>
.router-link-active span {
  border-bottom: 2px solid black;
}
</style>