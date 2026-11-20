<script setup lang="ts">
// Rótulo pequeno em dourado, acima do título da seção. "dark" é para fundos verde-oliva.
withDefaults(defineProps<{
  tone?: 'light' | 'dark'
}>(), {
  tone: 'light'
})
</script>

<template>
  <p
    class="text-sm font-semibold tracking-[0.2em] uppercase"
    :class="tone === 'dark' ? 'text-ouro-300' : 'text-ouro-700 dark:text-ouro-300'"
  >
    <slot />
  </p>
</template>
