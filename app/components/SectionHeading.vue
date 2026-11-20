<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  eyebrow?: string
}>()
</script>

<template>
  <div class="mx-auto max-w-2xl text-center">
    <SectionEyebrow v-if="eyebrow">
      {{ eyebrow }}
    </SectionEyebrow>
    <h2
      class="text-[2rem] leading-tight font-bold text-highlighted sm:text-4xl"
      :class="eyebrow ? 'mt-3' : ''"
    >
      {{ title }}
    </h2>
    <div class="mx-auto mt-5 h-1 w-14 rounded-full bg-ouro-400" />
    <p
      v-if="description"
      class="mt-5 text-base text-muted sm:text-lg"
    >
      {{ description }}
    </p>
  </div>
</template>
