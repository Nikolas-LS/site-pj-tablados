<script setup lang="ts">
import { ctaSection } from '~/data/cta'

const whatsapp = useWhatsapp()
</script>

<template>
  <section
    id="contato"
    class="focus-ring-light scroll-mt-(--ui-header-height) bg-primary text-inverted"
  >
    <UContainer class="grid items-start gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
      <div class="lg:pt-4">
        <h2 class="text-[2rem] leading-tight font-bold text-inverted">
          {{ ctaSection.title }}
        </h2>
        <p class="mt-4 max-w-md text-base text-inverted/90 sm:text-lg">
          {{ ctaSection.description }}
        </p>

        <UButton
          :label="ctaSection.whatsappLabel"
          :to="whatsapp.link()"
          target="_blank"
          rel="noopener noreferrer"
          icon="i-simple-icons-whatsapp"
          color="neutral"
          size="xl"
          class="mt-8 min-h-11 justify-center bg-default text-primary hover:bg-muted"
        />
      </div>

      <QuoteForm />
    </UContainer>
  </section>
</template>
