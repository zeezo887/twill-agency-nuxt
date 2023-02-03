<template>
  <div class="office-card mb-6">
    <div class="office-card__body">
      <div class="office-card__image">
        <img
            v-if="image"
            :srcset="image.srcset"
            :src="image.src"
            :alt="image.alt"
        />
      </div>
    </div>
    <h3 class="font-semibold mt-4 mb-3 text-lg tablet-v:text-xl tablet-h:text-2xl laptop:text-3xl">
      <span>{{ office.title }}</span>
      <br>

    </h3>
    <div class="laptop:grid laptop:grid-cols-2 laptop:gap-8">
      <div>
        <p class="mb-4">
          <a href="mailto:{{ office.email }}">{{ office.email }}</a>
          <br>
          {{ office.phone }}
        </p>
        <p class="mb-4">
          {{ office.street }} <br>
          {{ office.city }} {{ office.zipcode }} <br>
          {{ office.country }} <br>
          <a class="underline" href="{{ office.directions }}">Get directions</a>
        </p>
      </div>
      <div>
        {{ office.description }}
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "OfficeCard",
  props: ["office"],
  computed: {
    image() {
      return extractCropFromMediaRole(this.office.media, {role: "cover"})
    }
  }
}

</script>

<style scoped>
.office-card__image img {
  width: 100%;
}
</style>