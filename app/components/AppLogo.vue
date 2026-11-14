<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <!-- TODO: trocar pelo arquivo da logo (SVG ou WebP) quando estiver no projeto. A cor vem de quem usa o componente. -->
  <span class="font-display text-xl font-bold tracking-tight">
    {{ site.name }}
  </span>
</template>
