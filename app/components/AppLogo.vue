<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <!-- TODO: trocar pelo arquivo da logo (SVG ou WebP) quando estiver no projeto -->
  <span class="font-display text-xl font-bold tracking-tight text-primary">
    {{ site.name }}
  </span>
</template>
