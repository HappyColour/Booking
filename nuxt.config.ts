// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@element-plus/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt',
    'nuxt-gtag'
  ],
  elementPlus: {
    defaultLocale: 'uk',
  },
  i18n: {
   vueI18n: './i18n.config.ts'
  },
  eslint: {
    config: {
      stylistic: true
    }
  },
  gtag: {
    id: 'G-XXXXXXXXXX'
  }
})