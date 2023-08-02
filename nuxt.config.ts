// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/styles.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    runtimeConfig: {
        twillApiSecret: process.env.NUXT_TWILL_API_SECRET,
        public: {
            twillApi: process.env.NUXT_PUBLIC_TWILL_API_BASE_URL
        }
    },
    modules: [
        '@nuxt/image-edge',
        '@pinia/nuxt',
    ],
})
