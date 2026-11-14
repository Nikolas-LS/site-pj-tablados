<script setup lang="ts">
import { steps, stepsSection } from '~/data/steps'
</script>

<template>
  <section
    id="como-funciona"
    class="scroll-mt-(--ui-header-height) bg-default"
  >
    <UContainer class="py-16 sm:py-20 lg:py-24">
      <SectionHeading
        :title="stepsSection.title"
        :description="stepsSection.description"
      />

      <ol class="mt-12 grid gap-8 lg:grid-cols-4">
        <li
          v-for="(step, i) in steps"
          :key="step.title"
          class="relative flex gap-4 lg:flex-col"
        >
          <span
            class="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary font-display text-xl font-bold text-inverted"
            aria-hidden="true"
          >
            {{ i + 1 }}
          </span>

          <!-- Linha da linha do tempo: vertical no celular, horizontal no desktop -->
          <span
            v-if="i < steps.length - 1"
            class="absolute start-[calc(1.5rem-1px)] top-14 -bottom-6 w-0.5 bg-primary/25 lg:start-14 lg:top-6 lg:bottom-auto lg:h-0.5 lg:w-[calc(100%-2rem)]"
            aria-hidden="true"
          />

          <div>
            <h3 class="font-display text-xl font-semibold text-highlighted">
              <span class="sr-only">Passo {{ i + 1 }}: </span>{{ step.title }}
            </h3>
            <p class="mt-2 text-base text-muted">
              {{ step.description }}
            </p>
          </div>
        </li>
      </ol>
    </UContainer>
  </section>
</template>
