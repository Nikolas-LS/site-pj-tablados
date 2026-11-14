<script setup lang="ts">
import { hero } from '~/data/hero'
</script>

<template>
  <section
    id="inicio"
    class="scroll-mt-(--ui-header-height) bg-default"
  >
    <UContainer class="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
      <div>
        <h1 class="text-[2.5rem] leading-tight font-bold text-highlighted sm:text-5xl">
          {{ hero.title }}
        </h1>

        <p class="mt-6 max-w-xl text-base text-muted sm:text-lg">
          {{ hero.description }}
        </p>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <UButton
            :label="hero.primaryCta.label"
            :to="hero.primaryCta.to"
            size="xl"
            class="min-h-11 justify-center"
          />
          <UButton
            :label="hero.secondaryCta.label"
            :to="hero.secondaryCta.to"
            variant="outline"
            size="xl"
            class="min-h-11 justify-center"
          />
        </div>
      </div>

      <!-- Primeira dobra: carrega na hora, sem lazy -->
      <img
        :src="hero.image.src"
        :alt="hero.image.alt"
        :width="hero.image.width"
        :height="hero.image.height"
        fetchpriority="high"
        class="h-auto w-full rounded-[10px] object-cover shadow-lg"
      >
    </UContainer>
  </section>
</template>
