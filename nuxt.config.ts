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

  // O tema claro é o padrão. O visitante pode escolher o escuro no botão do cabeçalho (a escolha fica salva no navegador)
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

  // O número do WhatsApp pode ser trocado por variável de ambiente (ver .env.example)
  runtimeConfig: {
    public: {
      // Mesmo número da logo. Pode ser trocado pela variável NUXT_PUBLIC_WHATSAPP_NUMBER
      whatsappNumber: '51986863981'
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
