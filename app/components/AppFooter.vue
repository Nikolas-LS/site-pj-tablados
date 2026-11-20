<script setup lang="ts">
import { contact, social } from '~/data/site'

const whatsapp = useWhatsapp()

const linkClass = 'rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
</script>

<template>
  <footer class="focus-ring-light border-t border-ouro-400/40 bg-musgo-800 dark:bg-musgo-950 text-white">
    <UContainer class="py-12 lg:py-16">
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto]">
        <div class="lg:self-center">
          <AppLogo class="text-white" />
        </div>

        <div>
          <h2 class="font-display text-base font-semibold">
            Contato
          </h2>
          <ul class="mt-2 text-sm text-white/90">
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
                class="inline-flex min-h-10 items-center"
                :class="linkClass"
              >
                WhatsApp
              </a>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-phone"
                class="size-4 shrink-0"
                aria-hidden="true"
              />
              <a
                :href="contact.phoneHref"
                class="inline-flex min-h-10 items-center"
                :class="linkClass"
              >
                {{ contact.phone }}
              </a>
            </li>
          </ul>

          <ul
            v-if="social.length"
            class="-ms-3 flex gap-1"
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
                class="inline-flex size-11 items-center justify-center rounded-md hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white"
              >
                <UIcon
                  :name="network.icon"
                  class="size-5"
                />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="font-display text-base font-semibold">
            Atendimento
          </h2>
          <ul class="mt-4 space-y-3 text-sm text-white/90">
            <li class="flex items-start gap-2 lg:whitespace-nowrap">
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
          </ul>
        </div>
      </div>

      <p class="mt-10 border-t border-white/15 pt-6 text-sm text-white/80">
        © {{ new Date().getFullYear() }} PJ Tablados. Todos os direitos reservados.
      </p>
    </UContainer>
  </footer>
</template>
