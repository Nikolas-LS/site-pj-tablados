<script setup lang="ts">
import { ctaSection, location } from '~/data/cta'

const whatsapp = useWhatsapp()
</script>

<template>
  <section
    id="contato"
    class="focus-ring-light scroll-mt-(--ui-header-height) bg-primary text-inverted"
  >
    <UContainer class="grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-stretch lg:gap-16 lg:py-24">
      <div class="flex flex-col lg:py-4">
        <h2 class="text-[2rem] leading-tight font-bold text-inverted">
          {{ ctaSection.title }}
        </h2>
        <p class="mt-4 max-w-md text-base text-inverted/90 sm:text-lg">
          {{ ctaSection.description }}
        </p>

        <div>
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

        <div class="mt-10 border-t border-white/20 pt-8">
          <h3 class="font-display text-xl font-semibold text-inverted">
            {{ location.title }}
          </h3>
          <p class="mt-3 flex items-start gap-2 text-base text-inverted/90">
            <UIcon
              name="i-lucide-map-pin"
              class="mt-1 size-5 shrink-0"
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
            class="mt-5 min-h-11 justify-center bg-transparent text-inverted ring-white/60 hover:bg-white/10"
          />
        </div>
      </div>

      <div class="min-h-80 overflow-hidden rounded-[10px] bg-default shadow-lg sm:min-h-96">
        <iframe
          :src="location.mapEmbed"
          :title="location.mapTitle"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
          class="block size-full min-h-80 border-0 sm:min-h-96"
        />
      </div>
    </UContainer>
  </section>
</template>
