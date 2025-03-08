// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@ant-design-vue/nuxt'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/index.css'],
  ssr: false,
  runtimeConfig: {
    apiKey: process.env.NUXT_API_KEY, // 这里放在 private
  },
});
