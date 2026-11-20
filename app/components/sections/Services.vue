<script setup lang="ts">
import { services, servicesSection } from '~/data/services'
</script>

<template>
  <section
    id="servicos"
    class="relative scroll-mt-(--ui-header-height) overflow-hidden bg-default"
  >
    <SectionDiamonds
      side="end"
      position="top"
    />

    <UContainer class="relative py-16 sm:py-20 lg:py-24">
      <SectionHeading
        :eyebrow="servicesSection.eyebrow"
        :title="servicesSection.title"
        :description="servicesSection.description"
      />

      <ul class="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
        <li
          v-for="(service, index) in services"
          :key="service.title"
        >
          <UCard
            class="group h-full transition-shadow duration-300 hover:shadow-lg motion-safe:transition-transform motion-safe:hover:-translate-y-1"
            :ui="{
              root: 'flex h-full flex-col',
              header: 'p-0 sm:p-0',
              body: 'flex-1',
              footer: 'py-2 sm:py-2'
            }"
          >
            <template #header>
              <div class="overflow-hidden">
                <img
                  :src="service.image.src"
                  :alt="service.image.alt"
                  width="800"
                  height="600"
                  loading="lazy"
                  class="aspect-[4/3] w-full object-cover dark:brightness-90 motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105"
                  :class="service.image.position"
                >
              </div>
            </template>

            <p class="font-display text-sm font-semibold tracking-[0.2em] text-ouro-700 dark:text-ouro-300">
              {{ String(index + 1).padStart(2, '0') }}
            </p>
            <h3 class="mt-1 font-display text-2xl font-semibold text-highlighted">
              {{ service.title }}
            </h3>
            <p class="mt-2 text-base text-muted">
              {{ service.description }}
            </p>

            <template #footer>
              <QuoteButton
                trailing-icon="i-lucide-arrow-right"
                variant="link"
                size="lg"
                class="min-h-11 px-0"
              />
            </template>
          </UCard>
        </li>
      </ul>
    </UContainer>
  </section>
</template>
