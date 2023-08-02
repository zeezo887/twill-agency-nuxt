<template>
  <div class="text py-5 text-base leading-6 sm:text-lg sm:leading-7 md:text-xl md:leading-8 " v-html="html">
  </div>
</template>

<script>
export default {
  name: "Text",
  props: ["html"]
}
</script>

<style>
  .text p {
    margin-bottom: 20px;
  }

  .text a {
    text-decoration: underline;
  }
</style>