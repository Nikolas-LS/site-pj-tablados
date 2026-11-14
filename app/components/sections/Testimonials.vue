<script setup lang="ts">
import { testimonials, testimonialsSection } from '~/data/testimonials'
</script>

<template>
  <section
    id="depoimentos"
    class="scroll-mt-(--ui-header-height) bg-muted"
  >
    <UContainer class="py-16 sm:py-20 lg:py-24">
      <SectionHeading
        :title="testimonialsSection.title"
        :description="testimonialsSection.description"
      />

      <ul class="mt-12 grid gap-6 lg:grid-cols-3">
        <li
          v-for="(item, i) in testimonials"
          :key="i"
        >
          <UCard
            class="h-full"
            :ui="{ root: 'h-full', body: 'flex h-full flex-col' }"
          >
            <figure class="flex h-full flex-col">
              <UIcon
                name="i-lucide-quote"
                class="size-8 text-secondary"
                aria-hidden="true"
              />
              <blockquote class="mt-4 flex-1 text-base text-default">
                <p>{{ item.quote }}</p>
              </blockquote>
              <figcaption class="mt-6 border-t border-default pt-4">
                <span class="block font-semibold text-highlighted">{{ item.name }}</span>
                <span class="block text-sm text-muted">{{ item.city }}</span>
              </figcaption>
            </figure>
          </UCard>
        </li>
      </ul>
    </UContainer>
  </section>
</template>
