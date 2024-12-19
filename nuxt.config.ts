// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@element-plus/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt',
    'nuxt-gtag',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-11-01',
  elementPlus: {
    defaultLocale: 'en',
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  gtag: {
    id: 'G-XXXXXXXXXX',
  },
  i18n: {
    vueI18n: './i18n.config.ts',
  },
})
