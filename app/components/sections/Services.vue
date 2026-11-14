<script setup lang="ts">
import { services, servicesSection } from '~/data/services'
import { quoteCta } from '~/data/site'
</script>

<template>
  <section
    id="servicos"
    class="scroll-mt-(--ui-header-height) bg-default"
  >
    <UContainer class="py-16 sm:py-20 lg:py-24">
      <SectionHeading
        :title="servicesSection.title"
        :description="servicesSection.description"
      />

      <ul class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="service in services"
          :key="service.title"
        >
          <UCard
            class="h-full"
            :ui="{
              root: 'flex h-full flex-col',
              header: 'p-0 sm:p-0',
              body: 'flex-1',
              footer: 'py-2 sm:py-2'
            }"
          >
            <template #header>
              <img
                :src="service.image.src"
                :alt="service.image.alt"
                width="800"
                height="600"
                loading="lazy"
                class="aspect-[4/3] w-full object-cover"
              >
            </template>

            <h3 class="font-display text-2xl font-semibold text-highlighted">
              {{ service.title }}
            </h3>
            <p class="mt-2 text-base text-muted">
              {{ service.description }}
            </p>

            <template #footer>
              <UButton
                :label="quoteCta.label"
                :to="quoteCta.to"
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
