<script setup lang="ts">
import { differentials, differentialsSection } from '~/data/differentials'
</script>

<template>
  <section
    id="diferenciais"
    class="scroll-mt-(--ui-header-height) bg-default"
  >
    <UContainer class="py-16 sm:py-20 lg:py-24">
      <SectionHeading
        :title="differentialsSection.title"
        :description="differentialsSection.description"
      />

      <ul class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="item in differentials"
          :key="item.title"
          class="rounded-[10px] border border-default bg-muted p-6"
        >
          <span class="flex size-12 items-center justify-center rounded-md bg-secondary/10">
            <UIcon
              :name="item.icon"
              class="size-6 text-secondary"
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
