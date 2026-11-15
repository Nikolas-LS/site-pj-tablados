<script setup lang="ts">
import { quoteCta } from '~/data/site'

// Botão "Pedir orçamento": abre o WhatsApp com a mensagem pronta. Demais props (size, variant, class...) passam direto ao UButton.
const whatsapp = useWhatsapp()
</script>

<template>
  <UButton
    :label="quoteCta.label"
    :to="whatsapp.link()"
    target="_blank"
    rel="noopener noreferrer"
  />
</template>
