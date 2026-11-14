<script setup lang="ts">
const whatsapp = useWhatsapp()
</script>

<template>
  <UButton
    :to="whatsapp.link()"
    target="_blank"
    rel="noopener noreferrer"
    icon="i-simple-icons-whatsapp"
    aria-label="Pedir orçamento pelo WhatsApp"
    color="neutral"
    square
    class="fixed end-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 size-14 justify-center rounded-full bg-green-700 text-white shadow-lg ring-2 ring-white hover:bg-green-800"
    :ui="{ leadingIcon: 'size-8' }"
  />
</template>
