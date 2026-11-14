<script setup lang="ts">
import { galleryItems, gallerySection } from '~/data/gallery'

const open = ref(false)
const index = ref(0)
const current = computed(() => galleryItems[index.value]!)

function show(i: number) {
  index.value = i
  open.value = true
}

function step(direction: 1 | -1) {
  index.value = (index.value + direction + galleryItems.length) % galleryItems.length
}
</script>

<template>
  <section
    id="projetos"
    class="scroll-mt-(--ui-header-height) bg-muted"
  >
    <UContainer class="py-16 sm:py-20 lg:py-24">
      <SectionHeading
        :title="gallerySection.title"
        :description="gallerySection.description"
      />

      <ul class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="(item, i) in galleryItems"
          :key="item.src"
        >
          <button
            type="button"
            class="group block w-full rounded-[10px] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            :aria-label="`Ampliar foto: ${item.type}, ${item.location}`"
            @click="show(i)"
          >
            <span class="relative block overflow-hidden rounded-[10px] shadow-sm">
              <img
                :src="item.src"
                :alt="item.alt"
                :width="item.width"
                :height="item.height"
                loading="lazy"
                class="aspect-[3/2] w-full object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-105"
              >
              <span class="absolute end-3 bottom-3 flex size-9 items-center justify-center rounded-md bg-default/90 text-primary shadow-sm">
                <UIcon
                  name="i-lucide-maximize-2"
                  class="size-5"
                />
              </span>
            </span>
            <span class="mt-3 block font-semibold text-highlighted">{{ item.type }}</span>
            <span class="block text-sm text-muted">{{ item.location }}</span>
          </button>
        </li>
      </ul>
    </UContainer>

    <UModal
      v-model:open="open"
      :title="current.type"
      :description="current.location"
      :close="{ class: 'min-h-11 min-w-11 justify-center' }"
      :ui="{ content: 'max-w-4xl', close: 'top-2 end-2' }"
    >
      <template #body>
        <img
          :src="current.src"
          :alt="current.alt"
          :width="current.width"
          :height="current.height"
          class="h-auto w-full rounded-md"
        >
      </template>

      <template #footer>
        <div class="flex w-full justify-between gap-3">
          <UButton
            label="Anterior"
            icon="i-lucide-arrow-left"
            variant="outline"
            class="min-h-11"
            @click="step(-1)"
          />
          <UButton
            label="Próxima"
            trailing-icon="i-lucide-arrow-right"
            variant="outline"
            class="min-h-11"
            @click="step(1)"
          />
        </div>
      </template>
    </UModal>
  </section>
</template>
