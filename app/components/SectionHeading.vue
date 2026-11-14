<script setup lang="ts">
defineProps<{
  title: string
  description?: string
}>()
</script>

<template>
  <div class="mx-auto max-w-2xl text-center">
    <h2 class="text-[2rem] leading-tight font-bold text-highlighted">
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="mt-4 text-base text-muted sm:text-lg"
    >
      {{ description }}
    </p>
  </div>
</template>
