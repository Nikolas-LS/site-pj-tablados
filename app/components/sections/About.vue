<script setup lang="ts">
import { about } from '~/data/about'
</script>

<template>
  <section
    id="sobre"
    class="scroll-mt-(--ui-header-height) bg-muted"
  >
    <UContainer class="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
      <div>
        <h2 class="text-[2rem] leading-tight font-bold text-highlighted">
          {{ about.title }}
        </h2>

        <p
          v-for="paragraph in about.paragraphs"
          :key="paragraph"
          class="mt-4 text-base text-muted sm:text-lg"
        >
          {{ paragraph }}
        </p>

        <ul class="mt-8 flex flex-col gap-3">
          <li
            v-for="value in about.values"
            :key="value.label"
            class="flex items-center gap-3 text-base font-semibold text-highlighted"
          >
            <UIcon
              :name="value.icon"
              class="size-6 shrink-0 text-primary"
            />
            {{ value.label }}
          </li>
        </ul>
      </div>

      <img
        :src="about.image.src"
        :alt="about.image.alt"
        :width="about.image.width"
        :height="about.image.height"
        loading="lazy"
        class="aspect-[4/3] w-full rounded-[10px] object-cover shadow-lg lg:order-first"
      >
    </UContainer>
  </section>
</template>
