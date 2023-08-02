<template>
  <component
      :is="hasDefaultSlot || caption ? 'figure' : 'div'"
      :class="classes ? classes : null"
      v-if="Object.keys(image).length || src"
  >
    <div :class="ratioClass">
      <nuxt-img
          :id="id"
          :src="nuxtImageProps.src"
          :modifiers="nuxtImageProps.modifiers"
          :sizes="imgSizes"
          :alt="image.alt"
          :aria-hidden="ariaHidden"
          placeholder
          :height="image ? image.height : height ?? null"
          :width="image ? image.width : width ?? null"
          :loading="loading"
          :class="
          ratio || ratioClasses
            ? `ratio-content h-full w-full ${
                objectContain ? 'object-contain' : 'object-cover'
              }`
            : 'w-full'
        "
      />
    </div>
    <figcaption
        v-if="caption && captionNotEmpty"
        class="f-caption-1 relative mt-8 ui-richtext"
        v-html="caption"
    ></figcaption>
    <figcaption v-else-if="hasDefaultSlot" class="f-caption-1 relative mt-8">
      <slot />
    </figcaption>
  </component>
</template>

<script>

export const RATIOS = ['1x1', '16x9', '3x2', '3x4', '4x5', null];

export default {
  props: {
    height: {
      type: Number,
      default: null,
    },
    loading: {
      type: String,
      default: 'lazy',
    },
    width: {
      type: Number,
      default: null,
    },
    image: {
      type: Object,
      default: null,
    },
    src: {
      type: String,
      default: null,
    },
    /**
     * An String of additional CSS classes that are appended
     * to the `<div>` wrapping the `<img>` element
     */
    classes: {
      type: String,
      default: null,
    },
    /**
     * The `id` attribute of the rendered `<img>` element.
     */
    id: {
      type: String,
      default: null,
    },
    objectContain: {
      type: Boolean,
      default: false,
    },
    /**
     * Ratio for the container that wraps the image
     */
    ratio: {
      type: String,
      default: null,
      validator(value) {
        return RATIOS.includes(value);
      },
    },
    /**
     * A String of CSS classes used instead of a static ratio
     */
    ratioClasses: {
      type: String,
      default: null,
    },
    /**
     * Set the `aria-hidden` attribute on the image element.
     */
    ariaHidden: {
      type: Boolean,
      default: false,
    },
    caption: {
      type: String,
      default: null,
    },
    /**
     * Nuxt Image sizes format
     * https://v1.image.nuxtjs.org/components/nuxt-img#sizes
     */
    sizes: {
      type: String,
      default: null,
    },
  },
  computed: {
    hasDefaultSlot() {
      return !!this.$slots.default;
    },
    imgSizes() {
      return this.sizes ?? 'sm:200vw md:200vw lg:200vw xl:200vw';
    },
    ratioClass() {
      if (this.ratioClasses) {
        return this.ratioClasses;
      } else if (this.ratio) {
        return `ratio ratio-${this.ratio}`;
      }

      return null;
    },
    nuxtImageProps() {
      return this.image.src && this.nuxtImgProps(this.image.src);
    },
  },
  methods: {
    nuxtImgProps(imgSrc) {
      let modifiers;
      let src;


      src = imgSrc;
      modifiers = {};


      return {
        src,
        modifiers
      };
    }
  }
};
</script>
