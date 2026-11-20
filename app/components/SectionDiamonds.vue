<script setup lang="ts">
// Losangos da logo, bem suaves, só de enfeite no canto da seção (só em telas grandes, onde ficam nas margens). A seção precisa ser "relative" e o conteúdo "relative" por cima.
const props = withDefaults(defineProps<{
  side?: 'start' | 'end'
  position?: 'top' | 'bottom'
  tone?: 'light' | 'dark'
}>(), {
  side: 'end',
  position: 'top',
  tone: 'light'
})

// Classes completas (e não montadas por pedaços), para o Tailwind encontrá-las
const outer = computed(() => ({
  'end-top': '-end-28 -top-28',
  'end-bottom': '-end-28 -bottom-28',
  'start-top': '-start-28 -top-28',
  'start-bottom': '-start-28 -bottom-28'
})[`${props.side}-${props.position}`])

const inner = computed(() => ({
  'end-top': '-end-16 -top-16',
  'end-bottom': '-end-16 -bottom-16',
  'start-top': '-start-16 -top-16',
  'start-bottom': '-start-16 -bottom-16'
})[`${props.side}-${props.position}`])
</script>

<template>
  <div
    aria-hidden="true"
    class="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
  >
    <div
      class="absolute size-80 rotate-45 border"
      :class="[outer, tone === 'dark' ? 'border-ouro-400/30' : 'border-ouro-400/40']"
    />
    <div
      class="absolute size-56 rotate-45 border"
      :class="[inner, tone === 'dark' ? 'border-ouro-400/15' : 'border-ouro-400/25']"
    />
  </div>
</template>
