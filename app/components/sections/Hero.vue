<script setup lang="ts">
import { hero } from '~/data/hero'
import { site } from '~/data/site'
</script>

<template>
  <section
    id="inicio"
    class="relative scroll-mt-(--ui-header-height) overflow-hidden bg-default"
  >
    <SectionDiamonds
      side="start"
      position="bottom"
    />

    <UContainer class="relative grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
      <div>
        <SectionEyebrow>
          {{ site.tagline }}
        </SectionEyebrow>
        <h1 class="mt-3 text-[2.5rem] leading-tight font-bold text-highlighted sm:text-5xl">
          {{ hero.title }}
        </h1>
        <div class="mt-6 h-1 w-14 rounded-full bg-ouro-400" />

        <p class="mt-6 max-w-xl text-base text-muted sm:text-lg">
          {{ hero.description }}
        </p>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <QuoteButton
            size="xl"
            trailing-icon="i-lucide-arrow-right"
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

      <!-- Primeira dobra: carrega na hora, sem lazy. Moldura dourada deslocada atrás, como um filete da logo -->
      <div class="relative">
        <div
          aria-hidden="true"
          class="absolute -end-3 -bottom-3 size-full rounded-[14px] border-2 border-ouro-400/60"
        />
        <img
          :src="hero.image.src"
          :alt="hero.image.alt"
          :width="hero.image.width"
          :height="hero.image.height"
          fetchpriority="high"
          class="relative aspect-[4/5] h-auto w-full rounded-[10px] object-cover object-bottom shadow-xl dark:brightness-90"
        >
      </div>
    </UContainer>
  </section>
</template>
