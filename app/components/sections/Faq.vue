<script setup lang="ts">
import { faqItems, faqSection } from '~/data/faq'
</script>

<template>
  <section
    id="perguntas"
    class="relative scroll-mt-(--ui-header-height) overflow-hidden bg-muted"
  >
    <SectionDiamonds
      side="start"
      position="bottom"
    />

    <UContainer class="relative py-12 sm:py-20 lg:py-24">
      <SectionHeading
        :eyebrow="faqSection.eyebrow"
        :title="faqSection.title"
        :description="faqSection.description"
      />

      <!-- Sanfona: abre uma resposta por vez. Cada pergunta é um cartão; o aberto ganha borda dourada -->
      <UAccordion
        v-reveal:stagger
        :items="faqItems"
        type="single"
        collapsible
        class="mx-auto mt-12 max-w-3xl"
        :ui="{
          item: 'mb-3 rounded-[10px] border border-default bg-default px-5 dark:bg-elevated transition-colors last:mb-0 last:border-b data-[state=open]:border-ouro-400 data-[state=open]:shadow-sm',
          trigger: 'min-h-[44px] py-4 text-base font-semibold text-highlighted',
          trailingIcon: 'text-ouro-700 dark:text-ouro-300',
          body: 'pb-4 text-base text-muted'
        }"
      />
    </UContainer>
  </section>
</template>
