<script setup lang="ts">
import { pt_br } from '@nuxt/ui/locale'

const colorMode = useColorMode()

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: computed(() => colorMode.value === 'dark' ? '#0f1309' : 'white') }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
    { rel: 'icon', type: 'image/png', href: '/favicon-32.png', sizes: '32x32' },
    { rel: 'icon', type: 'image/png', href: '/icon-192.png', sizes: '192x192' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
  ],
  htmlAttrs: {
    lang: 'pt-BR'
  }
})

// Descrição que aparece no Google e ao compartilhar o link. Revisar com os donos.
const description = 'Tablados de madeira para eventos em todo o Brasil: venda e fabricação sob medida. Peça seu orçamento pelo WhatsApp.'

useSeoMeta({
  title: 'PJ Tablados',
  ogTitle: 'PJ Tablados',
  description,
  ogDescription: description,
  ogLocale: 'pt_BR',
  twitterCard: 'summary_large_image'
  // Ao definir o domínio, usar ogImage: 'https://DOMINIO/og-image.png' (a imagem já existe em public/, mas precisa de URL absoluta)
})
</script>

<template>
  <UApp
    :locale="pt_br"
    :toaster="{ expand: false }"
  >
    <a
      href="#conteudo"
      class="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-3 focus:text-inverted focus:outline-2 focus:outline-offset-2 focus:outline-primary"
    >
      Pular para o conteúdo
    </a>

    <AppHeader />

    <UMain id="conteudo">
      <NuxtPage />
    </UMain>

    <AppFooter />
  </UApp>
</template>
