<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <!-- Ícone PJ da logo (já traz o fundo verde-oliva, por isso funciona em cabeçalho claro e rodapé escuro) + nome em texto.
       O texto vem de quem usa o componente (cor herdada). A imagem é decorativa: o link que envolve a logo já tem nome acessível. -->
  <span class="inline-flex items-center gap-2">
    <img
      src="/images/logo-pj.webp"
      alt=""
      width="36"
      height="36"
      class="size-9 shrink-0 rounded-md ring-1 ring-ouro-400/50"
    >
    <span class="font-display text-lg font-bold tracking-tight">
      {{ site.name }}
    </span>
  </span>
</template>
