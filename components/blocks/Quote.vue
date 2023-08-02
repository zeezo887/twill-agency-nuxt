<template>
  <NuxtLink :to="url" class="quote py-5 pr-10 clear" v-if="type !== 'story'">
    <blockquote class="quote__text sm:float-right sm:w-1/2 sm:clear-both">
      <p class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">{{ block.content.quote }}</p>
      <br><span class="quote__link"><span>Learn more about the project</span></span>
    </blockquote>
  </NuxtLink>

  <div class="quote py-5 pr-10" v-else>
    <blockquote class="quote__text">
      <p class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">{{ block.content.quote }}</p>
      </blockquote>
  </div>
</template>

<script>
export default {
  name: "Quote",
  props: ["block", "type", "url"]
}
</script>

<style scoped>
.quote {
  display: block;
}
.quote__text p::before {
  content: open-quote;
  position: absolute;
  left: -15px;
}

.quote__text p::after {
  content: close-quote;
}

.quote__text {
  cursor: pointer;
  position: relative;
}

.quote__link {
  color: #e61428;
}

.quote__text:hover .quote__link {
  border-bottom: 1px solid #e61428;
}

.clear::after {
  clear: both;
  content: "";
  display: table;
}


</style>