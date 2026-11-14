<script setup lang="ts">
import { trustItems } from '~/data/trust'
</script>

<template>
  <section
    aria-label="Por que confiar na PJ Tablados"
    class="border-y border-default bg-muted"
  >
    <UContainer class="py-10 sm:py-12">
      <ul class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="item in trustItems"
          :key="item.title"
          class="flex items-start gap-4"
        >
          <span class="flex size-12 shrink-0 items-center justify-center rounded-md bg-primary/10">
            <UIcon
              :name="item.icon"
              class="size-6 text-primary"
            />
          </span>
          <div>
            <p class="font-display text-xl font-bold text-highlighted">
              {{ item.title }}
            </p>
            <p class="mt-1 text-sm text-muted">
              {{ item.description }}
            </p>
          </div>
        </li>
      </ul>
    </UContainer>
  </section>
</template>
