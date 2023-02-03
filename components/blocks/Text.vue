<template>
  <div class="text py-5" v-html="html">
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
    line-height: 28px;
    font-size: 17px;
    font-weight: 500;
  }

  .text a {
    text-decoration: underline;
  }
</style>