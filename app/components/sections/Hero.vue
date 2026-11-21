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

    <UContainer class="relative grid items-center gap-10 py-10 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
      <div>
        <SectionEyebrow
          class="intro"
          style="--i: 0"
        >
          {{ site.tagline }}
        </SectionEyebrow>
        <h1
          class="intro mt-3 text-[2.125rem] leading-tight font-bold text-highlighted sm:text-5xl"
          style="--i: 1"
        >
          {{ hero.title }}
        </h1>
        <div
          class="intro-grow mt-6 h-1 w-14 origin-left rounded-full bg-ouro-400"
          style="--i: 2"
        />

        <p
          class="intro mt-6 max-w-xl text-base text-muted sm:text-lg"
          style="--i: 3"
        >
          {{ hero.description }}
        </p>

        <div
          class="intro mt-8 flex flex-col gap-3 sm:flex-row"
          style="--i: 4"
        >
          <QuoteButton
            :label="hero.primaryCta.label"
            size="xl"
            trailing-icon="i-lucide-arrow-right"
            class="min-h-[44px] justify-center"
          />
          <UButton
            :label="hero.secondaryCta.label"
            :to="hero.secondaryCta.to"
            variant="outline"
            size="xl"
            class="min-h-[44px] justify-center"
          />
        </div>
      </div>

      <!-- Primeira dobra: carrega na hora, sem lazy. Moldura dourada deslocada atrás, como um filete da logo -->
      <div class="relative">
        <div
          aria-hidden="true"
          class="intro-frame absolute -end-3 -bottom-3 size-full rounded-[14px] border-2 border-ouro-400/60"
        />
        <div class="relative overflow-hidden rounded-[10px] shadow-xl">
          <img
            :src="hero.image.src"
            :alt="hero.image.alt"
            :width="hero.image.width"
            :height="hero.image.height"
            fetchpriority="high"
            class="intro-settle aspect-[4/5] h-auto w-full object-cover object-bottom dark:brightness-90"
          >
        </div>
      </div>
    </UContainer>
  </section>
</template>
