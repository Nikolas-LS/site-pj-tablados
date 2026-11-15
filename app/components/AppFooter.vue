<script setup lang="ts">
import { contact, footerDescription, navItems, social } from '~/data/site'

const whatsapp = useWhatsapp()

const linkClass = 'rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverted'
</script>

<template>
  <footer class="focus-ring-light bg-primary-800 text-inverted">
    <UContainer class="py-12 lg:py-16">
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <AppLogo class="text-inverted" />
          <p class="mt-4 max-w-xs text-sm text-inverted/80">
            {{ footerDescription }}
          </p>
        </div>

        <nav aria-label="Rodapé">
          <h2 class="font-display text-base font-semibold">
            Menu
          </h2>
          <ul class="mt-2 grid grid-cols-2 gap-x-4">
            <li
              v-for="item in navItems"
              :key="item.to"
            >
              <NuxtLink
                :to="item.to"
                class="inline-flex min-h-11 items-center text-sm text-inverted/90"
                :class="linkClass"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div>
          <h2 class="font-display text-base font-semibold">
            Contato
          </h2>
          <ul class="mt-4 space-y-3 text-sm text-inverted/90">
            <li class="flex items-center gap-2">
              <UIcon
                name="i-simple-icons-whatsapp"
                class="size-4 shrink-0"
                aria-hidden="true"
              />
              <a
                :href="whatsapp.link()"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex min-h-11 items-center"
                :class="linkClass"
              >
                WhatsApp
              </a>
            </li>
            <li class="flex items-start gap-2">
              <UIcon
                name="i-lucide-phone"
                class="mt-0.5 size-4 shrink-0"
                aria-hidden="true"
              />
              {{ contact.phone }}
            </li>
          </ul>
        </div>

        <div>
          <h2 class="font-display text-base font-semibold">
            Atendimento
          </h2>
          <ul class="mt-4 space-y-3 text-sm text-inverted/90">
            <li class="flex items-start gap-2">
              <UIcon
                name="i-lucide-map-pin"
                class="mt-0.5 size-4 shrink-0"
                aria-hidden="true"
              />
              {{ contact.address }}
            </li>
            <li class="flex items-start gap-2">
              <UIcon
                name="i-lucide-map"
                class="mt-0.5 size-4 shrink-0"
                aria-hidden="true"
              />
              {{ contact.region }}
            </li>
            <li class="flex items-start gap-2">
              <UIcon
                name="i-lucide-clock"
                class="mt-0.5 size-4 shrink-0"
                aria-hidden="true"
              />
              {{ contact.hours }}
            </li>
          </ul>

          <ul
            v-if="social.length"
            class="mt-4 flex gap-1"
          >
            <li
              v-for="network in social"
              :key="network.label"
            >
              <a
                :href="network.to"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="network.label"
                class="inline-flex size-11 items-center justify-center rounded-md hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-inverted"
              >
                <UIcon
                  :name="network.icon"
                  class="size-5"
                />
              </a>
            </li>
          </ul>
          <p
            v-else
            class="mt-4 text-sm text-inverted/80"
          >
            TODO: redes sociais
          </p>
        </div>
      </div>

      <p class="mt-10 border-t border-white/15 pt-6 text-sm text-inverted/80">
        © {{ new Date().getFullYear() }} PJ Tablados. Todos os direitos reservados.
      </p>
    </UContainer>
  </footer>
</template>
