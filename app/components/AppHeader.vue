<script setup lang="ts">
import { motion } from 'motion-v'
import type { VariantType } from 'motion-v'
import { navItems as items, site, social } from '~/data/site'

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

const menuOpen = ref(false)

// Item do menu da seção que está na tela: texto na cor da marca e sublinhado dourado
const activeId = useActiveSection(items.map(item => item.to.replace('#', '')))
const navItems = computed(() => items.map(item => ({ ...item, active: activeId.value === item.to.replace('#', '') })))

// Linha dourada sob o item atual: aparece crescendo do centro e desliza (mudando de largura) ao trocar de seção
const navWrap = useTemplateRef<HTMLElement>('navWrap')
const line = reactive({ x: 0, y: 0, w: 0, shown: false, animate: false })

function updateLine() {
  const wrap = navWrap.value
  const link = wrap?.querySelector<HTMLElement>('a[aria-current]')
  // Menu escondido (celular) ou nenhuma seção marcada: sem linha
  if (!wrap || !link || wrap.offsetParent === null) {
    line.shown = false
    return
  }
  const label = link.querySelector<HTMLElement>('span') ?? link
  const box = wrap.getBoundingClientRect()
  const text = label.getBoundingClientRect()
  line.x = text.left - box.left
  line.y = text.bottom - box.top + 2
  line.w = text.width
  if (!line.animate) {
    // Primeira vez: posiciona sem animar e, no quadro seguinte, faz a linha crescer
    requestAnimationFrame(() => {
      line.animate = true
      line.shown = true
    })
  } else {
    line.shown = true
  }
}

watch(activeId, () => nextTick(updateLine))
onMounted(() => {
  nextTick(updateLine)
  document.fonts?.ready.then(updateLine)
})
useResizeObserver(navWrap, updateLine)

// Painel lateral: abre deslizando da direita, com o fundo escurecendo, e fecha da mesma forma
const menuUi = {
  overlay: 'bg-black/55 backdrop-blur-[2px]',
  content: [
    'focus-ring-light w-[88vw] max-w-sm divide-white/10 rounded-s-[20px] border-s border-ouro-400/40 bg-musgo-700 text-white shadow-2xl ring-0 sm:ring-0',
    'data-[state=open]:animate-[slide-in-from-right_360ms_cubic-bezier(0.22,1,0.36,1)]',
    'data-[state=closed]:animate-[slide-out-to-right_260ms_cubic-bezier(0.4,0,1,1)]'
  ].join(' ')
}
</script>

<template>
  <UHeader
    v-model:open="menuOpen"
    mode="slideover"
    :menu="{ title: 'Menu de navegação', description: 'Links para as seções da página' }"
    :ui="menuUi"
  >
    <template #left>
      <NuxtLink
        to="/"
        :aria-label="`${site.name}, página inicial`"
        class="-ms-1 inline-flex min-h-[44px] items-center rounded-md p-1 whitespace-nowrap focus-visible:outline-3"
      >
        <AppLogo class="text-primary" />
      </NuxtLink>
    </template>

    <div
      ref="navWrap"
      class="relative"
    >
      <UNavigationMenu
        :items="navItems"
        variant="link"
        :ui="{ link: 'px-1 xl:px-2.5', list: 'gap-0 xl:gap-0.5' }"
      />
      <span
        aria-hidden="true"
        class="nav-line pointer-events-none absolute start-0 h-0.5 origin-center rounded-full bg-secondary"
        :style="{
          top: `${line.y}px`,
          width: `${line.w}px`,
          transform: `translateX(${line.x}px) scaleX(${line.shown ? 1 : 0})`,
          transition: line.animate ? undefined : 'none'
        }"
      />
    </div>

    <template #right>
      <ColorModeToggle />
    </template>

    <template #toggle="{ open, toggle, ui }">
      <UButton
        size="lg"
        variant="ghost"
        color="neutral"
        square
        :aria-label="open ? 'Fechar menu' : 'Abrir menu'"
        :aria-expanded="open"
        class="min-h-[44px] min-w-[44px]"
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

    <!-- Conteúdo do painel do celular: só o botão de fechar, os links e as redes sociais -->
    <template #content>
      <div class="flex h-(--ui-header-height) shrink-0 items-center justify-end border-b border-white/10 px-4">
        <UButton
          icon="i-lucide-x"
          color="neutral"
          variant="ghost"
          size="lg"
          square
          aria-label="Fechar menu"
          class="min-h-[44px] min-w-[44px] text-white hover:bg-white/10"
          @click="menuOpen = false"
        />
      </div>

      <div class="relative flex flex-1 flex-col overflow-x-hidden overflow-y-auto px-6 pt-4 pb-8">
        <!-- Losango da logo, bem suave, só de enfeite -->
        <div
          aria-hidden="true"
          class="pointer-events-none absolute -end-20 bottom-24 size-56 rotate-45 border border-ouro-400/15"
        />

        <nav
          aria-label="Menu principal"
          class="relative"
        >
          <ul>
            <li
              v-for="(item, index) in items"
              :key="item.to"
              class="menu-item"
              :style="{ '--i': index }"
            >
              <NuxtLink
                :to="item.to"
                class="group flex min-h-14 items-center gap-4 border-b border-white/10 py-2 font-display text-xl font-semibold transition-colors hover:text-ouro-300 focus-visible:outline-2 focus-visible:outline-offset-2"
                :class="activeId === item.to.replace('#', '') ? 'text-ouro-300' : 'text-white'"
                :aria-current="activeId === item.to.replace('#', '') ? 'location' : undefined"
                @click="menuOpen = false"
              >
                <span class="w-6 text-xs font-semibold tracking-[0.15em] text-ouro-400">
                  {{ String(index + 1).padStart(2, '0') }}
                </span>
                <span>{{ item.label }}</span>
                <UIcon
                  name="i-lucide-arrow-right"
                  class="ms-auto size-5 text-ouro-400 opacity-60 transition-all group-hover:opacity-100 motion-safe:group-hover:translate-x-1"
                />
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <ul
          class="menu-item relative mt-auto flex gap-2 pt-8"
          :style="{ '--i': items.length }"
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
              class="inline-flex size-[44px] items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <UIcon
                :name="network.icon"
                class="size-5"
              />
            </a>
          </li>
        </ul>
      </div>
    </template>
  </UHeader>
</template>
