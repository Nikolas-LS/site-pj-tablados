<script setup lang="ts">
import { trustItems } from '~/data/trust'
</script>

<template>
  <!-- Faixa verde-oliva logo abaixo do hero: separa a abertura do resto e dá ritmo à página -->
  <section
    aria-label="Por que confiar na PJ Tablados"
    class="focus-ring-light border-y border-ouro-400/30 bg-musgo-700 text-white"
  >
    <UContainer class="py-10 sm:py-12">
      <ul class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="item in trustItems"
          :key="item.title"
          class="flex items-start gap-4"
        >
          <span class="flex size-12 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-ouro-400/50">
            <UIcon
              :name="item.icon"
              class="size-6 text-ouro-400"
            />
          </span>
          <div>
            <p class="font-display text-xl font-bold text-white">
              {{ item.title }}
            </p>
            <p class="mt-1 text-sm text-white/80">
              {{ item.description }}
            </p>
          </div>
        </li>
      </ul>
    </UContainer>
  </section>
</template>
