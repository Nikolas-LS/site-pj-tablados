<script setup lang="ts">
import { motion } from 'motion-v'
import type { VariantType } from 'motion-v'
import { navItems as items, quoteCta, site } from '~/data/site'

const variants: Record<string, VariantType | ((custom: unknown) => VariantType)> = {
  normal: {
    rotate: 0,
    y: 0,
    opacity: 1
  },
  close: (custom: unknown) => {
    const c = custom as number
    return {
      rotate: c === 1 ? 45 : c === 3 ? -45 : 0,
      y: c === 1 ? 6 : c === 3 ? -6 : 0,
      opacity: c === 2 ? 0 : 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20
      }
    }
  }
}
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink
        to="/"
        :aria-label="`${site.name}, página inicial`"
        class="focus-visible:outline-3 outline-primary/25 rounded-md p-1 -ms-1"
      >
        <AppLogo />
      </NuxtLink>
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
    />

    <template #right>
      <UButton
        :label="quoteCta.label"
        :to="quoteCta.to"
        class="hidden lg:flex"
      />
    </template>

    <template #toggle="{ open, toggle, ui }">
      <UButton
        size="lg"
        variant="ghost"
        color="neutral"
        square
        :aria-label="open ? 'Fechar menu' : 'Abrir menu'"
        :aria-expanded="open"
        class="min-h-11 min-w-11"
        :class="ui.toggle({ toggleSide: 'right' })"
        @click="toggle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <motion.line
            x1="4"
            y1="6"
            x2="20"
            y2="6"
            :variants="variants"
            :animate="open ? 'close' : 'normal'"
            :custom="1"
            tabindex="-1"
          />
          <motion.line
            x1="4"
            y1="12"
            x2="20"
            y2="12"
            :variants="variants"
            :animate="open ? 'close' : 'normal'"
            :custom="2"
            tabindex="-1"
          />
          <motion.line
            x1="4"
            y1="18"
            x2="20"
            y2="18"
            :variants="variants"
            :animate="open ? 'close' : 'normal'"
            :custom="3"
            tabindex="-1"
          />
        </svg>
      </UButton>
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        :ui="{ link: 'min-h-11' }"
      />

      <div class="mt-4">
        <UButton
          :label="quoteCta.label"
          :to="quoteCta.to"
          size="xl"
          block
          class="min-h-11 justify-center"
        />
      </div>
    </template>
  </UHeader>
</template>
