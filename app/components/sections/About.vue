<script setup lang="ts">
import { about } from '~/data/about'
import { site } from '~/data/site'

const video = useTemplateRef<HTMLVideoElement>('video')
const playing = ref(false)
const visible = ref(false)
// null = automático; 'play' ou 'pause' = escolha feita pelo visitante nos botões
const manual = ref<'play' | 'pause' | null>(null)
const reducedMotion = usePreferredReducedMotion()

// Sem "reduzir movimento" nem "economizar dados", o vídeo toca sozinho (sem som) enquanto está visível
function canAutoplay() {
  if (import.meta.server) return false
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
  return reducedMotion.value !== 'reduce' && !connection?.saveData
}

useIntersectionObserver(video, ([entry]) => {
  visible.value = entry?.isIntersecting ?? false
}, { threshold: 0.35 })

const shouldPlay = computed(() => visible.value && (manual.value === 'play' || (manual.value === null && canAutoplay())))

watch(shouldPlay, (play) => {
  const el = video.value
  if (!el) return
  if (play) el.play().catch(() => {})
  else el.pause()
})

function togglePlay() {
  manual.value = playing.value ? 'pause' : 'play'
}

// O arquivo termina numa vinheta preta; o loop volta ao início antes dela
function onTimeUpdate() {
  const el = video.value
  if (el && el.currentTime >= about.video.loopEnd) el.currentTime = about.video.loopStart
}

const roundButton = 'inline-flex size-11 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-colors hover:bg-black/75 focus-visible:outline-2 focus-visible:outline-offset-2'
</script>

<template>
  <section
    id="sobre"
    class="relative scroll-mt-(--ui-header-height) overflow-hidden bg-muted"
  >
    <SectionDiamonds
      side="start"
      position="top"
    />

    <UContainer class="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-28">
      <!-- Vídeo: moldura dourada deslocada atrás, como um filete da logo -->
      <div class="relative mx-auto w-full max-w-[22rem] lg:order-first">
        <div
          aria-hidden="true"
          class="absolute -start-3 -bottom-3 size-full rounded-[14px] border-2 border-ouro-400/60"
        />
        <div class="focus-ring-light relative overflow-hidden rounded-[10px] bg-musgo-700 shadow-xl">
          <video
            ref="video"
            loop
            playsinline
            muted
            preload="none"
            :poster="about.video.poster"
            :width="about.video.width"
            :height="about.video.height"
            :aria-label="about.video.label"
            class="aspect-[9/16] w-full object-cover"
            @play="playing = true"
            @pause="playing = false"
            @timeupdate="onTimeUpdate"
          >
            <source
              :src="about.video.src"
              type="video/mp4"
            >
            Seu navegador não reproduz este vídeo.
          </video>

          <div class="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/60 to-transparent" />

          <p class="absolute start-3 bottom-4 flex items-center gap-2 rounded-full bg-black/55 px-3 py-1.5 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
            <span
              aria-hidden="true"
              class="size-2 rounded-full bg-ouro-400"
            />
            {{ about.video.caption }}
          </p>

          <div class="absolute end-3 bottom-3 flex gap-2">
            <button
              type="button"
              :class="roundButton"
              :aria-label="playing ? 'Pausar o vídeo' : 'Reproduzir o vídeo'"
              @click="togglePlay"
            >
              <UIcon
                :name="playing ? 'i-lucide-pause' : 'i-lucide-play'"
                class="size-5"
              />
            </button>
          </div>
        </div>
      </div>

      <div>
        <SectionEyebrow>
          {{ site.tagline }}
        </SectionEyebrow>
        <h2 class="mt-3 text-[2rem] leading-tight font-bold text-highlighted sm:text-4xl">
          {{ about.title }}
        </h2>
        <div class="mt-5 h-1 w-14 rounded-full bg-ouro-400" />
        <p
          v-for="paragraph in about.paragraphs"
          :key="paragraph"
          class="mt-6 text-base text-muted sm:text-lg"
        >
          {{ paragraph }}
        </p>

        <ul class="mt-8 grid gap-5 sm:grid-cols-3">
          <li
            v-for="value in about.values"
            :key="value.label"
            class="flex items-start gap-3 sm:flex-col sm:gap-2"
          >
            <span class="flex size-10 shrink-0 items-center justify-center rounded-full bg-ouro-100 text-ouro-700 dark:bg-ouro-400/15 dark:text-ouro-300">
              <UIcon
                :name="value.icon"
                class="size-5"
              />
            </span>
            <span>
              <span class="block font-display text-base font-semibold text-highlighted">{{ value.label }}</span>
              <span class="mt-0.5 block text-sm text-muted">{{ value.description }}</span>
            </span>
          </li>
        </ul>

        <QuoteButton
          size="xl"
          trailing-icon="i-lucide-arrow-right"
          class="mt-10 min-h-11 justify-center"
        />
      </div>
    </UContainer>
  </section>
</template>
