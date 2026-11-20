import { defineCollection, defineContentConfig } from '@nuxt/content'

// O site não usa conteúdo em arquivos (os textos ficam em app/data). Configuração mínima do módulo @nuxt/content,
// que continua instalado. Se ele for removido do projeto, este arquivo também pode sair.
export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    })
  }
})
