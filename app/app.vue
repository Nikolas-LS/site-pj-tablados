<script setup lang="ts">
import { pt_br } from '@nuxt/ui/locale'

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: 'white' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'pt-BR'
  }
})

// TODO: trocar pela descrição real da empresa
const description = 'TODO: descrição provisória. Tablados e decks de madeira com qualidade e durabilidade.'

useSeoMeta({
  title: 'PJ Tablados',
  ogTitle: 'PJ Tablados',
  description,
  ogDescription: description,
  ogLocale: 'pt_BR',
  twitterCard: 'summary_large_image'
  // TODO: definir ogImage quando houver a imagem de compartilhamento
})
</script>

<template>
  <UApp
    :locale="pt_br"
    :toaster="{ expand: false }"
  >
    <AppHeader />

    <UMain>
      <NuxtPage />
    </UMain>

    <AppFooter />

    <WhatsappFloat />
  </UApp>
</template>
