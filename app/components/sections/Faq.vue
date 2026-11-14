<script setup lang="ts">
import { faqItems, faqSection } from '~/data/faq'
</script>

<template>
  <section
    id="perguntas"
    class="scroll-mt-(--ui-header-height) bg-default"
  >
    <UContainer class="py-16 sm:py-20 lg:py-24">
      <SectionHeading
        :title="faqSection.title"
        :description="faqSection.description"
      />

      <!-- Sanfona: abre uma resposta por vez -->
      <UAccordion
        :items="faqItems"
        type="single"
        collapsible
        class="mx-auto mt-12 max-w-3xl"
        :ui="{
          trigger: 'min-h-11 py-4 text-base font-semibold text-highlighted',
          body: 'pb-4 text-base text-muted'
        }"
      />
    </UContainer>
  </section>
</template>
