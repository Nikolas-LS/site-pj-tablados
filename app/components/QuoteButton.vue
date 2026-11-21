<script setup lang="ts">
import { quoteCta } from '~/data/site'

// Botão de pedido de proposta: abre o WhatsApp com a mensagem pronta. O texto padrão vem de quoteCta,
// mas cada seção passa o seu próprio (prop label) para o site não repetir a mesma frase.
// Demais props (size, variant, class...) passam direto ao UButton.
defineProps<{ label?: string }>()
const whatsapp = useWhatsapp()
</script>

<template>
  <UButton
    :label="label ?? quoteCta.label"
    :to="whatsapp.link()"
    target="_blank"
    rel="noopener noreferrer"
  />
</template>
