<template>
    <NuxtLink :to="`/about/${person.slug}`" class="person-card block mb-11">
      <div class="person-card__body">
        <div class="person-card__image">
          <img
              v-if="image"
              :srcset="image.srcset"
              :src="image.src"
              :alt="image.alt"
              class="w-full"
          />
        </div>
      </div>
      <h3 class="mt-3 person-card__title">
        <span class="">{{ `${person.firstName} ${person.lastName}` }}</span>
      </h3>
      <div class="text-slate-500 person-card__subtitle">
        {{ person.office.title }}
      </div>
    </NuxtLink>
</template>

<script>
export default {
  name: "PersonCard",
  props: ["person"],
  computed: {
    image() {
      return extractCropFromMediaRole(this.person.media, {role: "main"})
    }
  }
}
</script>

<style scoped>
.person-card:hover .person-card__title span {
  border-bottom: 1px solid #111826;
}
</style>