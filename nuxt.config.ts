// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'title',
      meta: [
        { name: 'description', content: 'description' }
      ],
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover',
      htmlAttrs: { lang: 'en' },
      // All css classes applied to child components should be prefixed with #override selector
      // https://github.com/vuejs/vue-loader/issues/808, https://github.com/nuxt/nuxt/issues/15048
      bodyAttrs: { id: 'override' }
    }
  },
  css: ['assets/styles/index.scss'],
  ssr: true,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/styles/shared.scss";'
        }
      }
    }
  }
})
