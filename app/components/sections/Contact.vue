<script setup lang="ts">
import { ctaSection, location } from '~/data/cta'

const whatsapp = useWhatsapp()
</script>

<template>
  <section
    id="contato"
    class="focus-ring-light relative scroll-mt-(--ui-header-height) overflow-hidden bg-musgo-700 text-white"
  >
    <SectionDiamonds
      side="end"
      position="top"
      tone="dark"
    />

    <UContainer class="relative grid gap-10 py-12 sm:py-20 lg:grid-cols-2 lg:items-stretch lg:gap-16 lg:py-24">
      <div class="flex flex-col lg:py-4">
        <SectionEyebrow
          v-reveal
          tone="dark"
        >
          {{ ctaSection.eyebrow }}
        </SectionEyebrow>
        <h2
          v-reveal
          class="mt-3 text-[1.75rem] leading-tight font-bold text-white sm:text-4xl"
        >
          {{ ctaSection.title }}
        </h2>
        <div
          v-reveal:grow
          class="mt-5 h-1 w-14 rounded-full bg-ouro-400"
        />
        <p
          v-reveal
          class="mt-5 max-w-md text-base text-white/90 sm:text-lg"
        >
          {{ ctaSection.description }}
        </p>

        <div v-reveal>
          <UButton
            :label="ctaSection.whatsappLabel"
            :to="whatsapp.link()"
            target="_blank"
            rel="noopener noreferrer"
            icon="i-simple-icons-whatsapp"
            color="neutral"
            size="xl"
            class="mt-8 min-h-[44px] justify-center bg-white text-musgo-700 hover:bg-musgo-50"
          />
        </div>

        <div
          v-reveal
          class="mt-10 border-t border-ouro-400/30 pt-8"
        >
          <h3 class="font-display text-xl font-semibold text-white">
            {{ location.title }}
          </h3>
          <p class="mt-3 flex items-start gap-2 text-base text-white/90">
            <UIcon
              name="i-lucide-map-pin"
              class="mt-1 size-5 shrink-0 text-ouro-400"
              aria-hidden="true"
            />
            <span>{{ location.address }}</span>
          </p>

          <UButton
            :label="location.directionsLabel"
            :to="location.mapsLink"
            target="_blank"
            rel="noopener noreferrer"
            trailing-icon="i-lucide-arrow-up-right"
            variant="outline"
            color="neutral"
            size="lg"
            class="mt-5 min-h-[44px] justify-center bg-transparent text-white ring-white/60 hover:bg-white/10"
          />
        </div>
      </div>

      <!-- Mapa com moldura dourada deslocada atrás, como no hero e no vídeo -->
      <div
        v-reveal:right
        class="relative"
      >
        <div
          v-reveal:frame="300"
          aria-hidden="true"
          class="absolute -end-3 -bottom-3 size-full rounded-[14px] border-2 border-ouro-400/60"
        />
        <div class="relative h-full min-h-80 overflow-hidden rounded-[10px] bg-default shadow-xl sm:min-h-96">
          <iframe
            :src="location.mapEmbed"
            :title="location.mapTitle"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
            class="block size-full min-h-80 border-0 sm:min-h-96 dark:brightness-90 dark:contrast-90 dark:hue-rotate-180 dark:invert"
          />
        </div>
      </div>
    </UContainer>
  </section>
</template>
