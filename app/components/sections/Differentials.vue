<script setup lang="ts">
import { differentials, differentialsSection } from '~/data/differentials'
</script>

<template>
  <section
    id="diferenciais"
    class="relative scroll-mt-(--ui-header-height) overflow-hidden bg-default"
  >
    <SectionDiamonds
      side="end"
      position="bottom"
    />

    <UContainer class="relative py-16 sm:py-20 lg:py-24">
      <SectionHeading
        :eyebrow="differentialsSection.eyebrow"
        :title="differentialsSection.title"
        :description="differentialsSection.description"
      />

      <ul class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="item in differentials"
          :key="item.title"
          class="group rounded-[10px] border border-default bg-muted p-6 transition-all duration-300 hover:border-ouro-400 hover:shadow-md motion-safe:hover:-translate-y-1"
        >
          <span class="flex size-12 items-center justify-center rounded-full bg-ouro-100 text-ouro-700 transition-colors duration-300 group-hover:bg-musgo-700 group-hover:text-ouro-400 dark:bg-ouro-400/15 dark:text-ouro-300 dark:group-hover:bg-ouro-400 dark:group-hover:text-musgo-900">
            <UIcon
              :name="item.icon"
              class="size-6"
            />
          </span>
          <h3 class="mt-4 font-display text-xl font-semibold text-highlighted">
            {{ item.title }}
          </h3>
          <p class="mt-2 text-base text-muted">
            {{ item.description }}
          </p>
        </li>
      </ul>
    </UContainer>
  </section>
</template>
