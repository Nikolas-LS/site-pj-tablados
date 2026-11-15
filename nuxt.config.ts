// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/ui',
    '@vueuse/nuxt',
    'motion-v/nuxt'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  // A identidade visual é só clara; evita o modo escuro automático do sistema
  colorMode: {
    preference: 'light',
    fallback: 'light'
  },

  content: {
    experimental: {
      sqliteConnector: 'native'
    }
  },

  mdc: {
    highlight: {
      noApiRoute: false
    }
  },

  // Valores vêm de variáveis de ambiente (ver .env.example), nunca do código
  runtimeConfig: {
    public: {
      whatsappNumber: '',
      web3formsKey: ''
    }
  },

  devServer: {
    host: 'localhost'
  },

  compatibilityDate: '2026-06-30',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  // Só o que o site usa: alfabeto latino (cobre o português), sem itálico e só os pesos aplicados
  fonts: {
    defaults: {
      styles: ['normal'],
      subsets: ['latin']
    },
    families: [
      { name: 'Inter', weights: [400, 500, 600, 700] },
      { name: 'Montserrat', weights: [600, 700] }
    ]
  },

  prerender: {
    routes: [
      '/'
    ]
  }
})
