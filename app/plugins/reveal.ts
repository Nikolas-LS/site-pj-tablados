import type { DirectiveBinding } from 'vue'

// Diretiva v-reveal: faz um elemento surgir (fade + leve movimento) quando ele entra na tela ao rolar a página.
//
//   v-reveal                sobe 18 px e aparece (padrão)
//   v-reveal:left / :right  desliza de lado (no celular vira "sobe", porque as colunas ficam empilhadas)
//   v-reveal:zoom           cresce de leve (ícones)
//   v-reveal:grow           o filete dourado cresce do centro para as pontas
//   v-reveal:settle         a foto "assenta": começa um pouco maior e encolhe até o tamanho final (sem fade)
//   v-reveal:frame          a moldura dourada sai de trás da foto (usa a variável --frame-x do elemento)
//   v-reveal:stagger        vai no pai de uma lista: os filhos surgem um depois do outro
//
// O valor é um atraso extra em milissegundos: v-reveal:zoom="160".
// Irmãos que entram na tela juntos também surgem em sequência (90 ms entre eles), então uma fileira de cartões
// forma uma cascata e, no celular (um por linha), cada cartão surge sozinho, sem espera.
//
// O HTML nunca nasce escondido: sem JavaScript, ou com "reduzir movimento" ativo, tudo aparece normalmente.
// Os estilos de entrada ficam em main.css e são removidos depois que a animação termina, para não atrapalhar
// efeitos de hover do próprio elemento.
//
// Cuidado: o gatilho espera uns 6% de folga no pé da tela. Não use em elementos finos colados no fim da página
// (nunca passariam da folga). Rodapé: só no bloco alto das colunas.
const STEP = 90
const MAX_STEPS = 5
const CLEANUP_MS = 1700

export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | undefined
  const extraDelay = new WeakMap<HTMLElement, number>()
  const timers = new WeakMap<HTMLElement, number>()

  function cleanup(el: HTMLElement) {
    if (el.dataset.revealFx === 'stagger') {
      for (const child of Array.from(el.children) as HTMLElement[]) child.style.removeProperty('--i')
    }
    el.style.removeProperty('--reveal-delay')
    delete el.dataset.reveal
    delete el.dataset.revealFx
    timers.delete(el)
  }

  function show(el: HTMLElement, order: number) {
    // Em listas (stagger), este atraso é herdado pelos filhos, que somam o deles (ver main.css)
    const delay = (extraDelay.get(el) ?? 0) + Math.min(order, MAX_STEPS) * STEP
    el.style.setProperty('--reveal-delay', `${delay}ms`)
    el.dataset.reveal = 'shown'
    const total = delay + (el.dataset.revealFx === 'stagger' ? el.children.length * STEP : 0) + CLEANUP_MS
    timers.set(el, window.setTimeout(() => cleanup(el), total))
  }

  function onIntersect(entries: IntersectionObserverEntry[]) {
    // Agrupa por irmãos: quem entra junto surge em sequência (esquerda para a direita, de cima para baixo)
    const families = new Map<Element | null, HTMLElement[]>()
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      const el = entry.target as HTMLElement
      observer?.unobserve(el)
      const family = families.get(el.parentElement) ?? []
      family.push(el)
      families.set(el.parentElement, family)
    }
    for (const family of families.values()) {
      family.sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1))
      family.forEach((el, order) => show(el, order))
    }
  }

  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding: DirectiveBinding<number | undefined>) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
        return
      }

      // O que já aparece na primeira tela (ou fica acima dela, ao voltar para uma posição rolada) não anima
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
        return
      }

      const fx = binding.arg ?? 'up'
      el.dataset.revealFx = fx
      el.dataset.reveal = 'pending'
      if (binding.value) extraDelay.set(el, Number(binding.value))

      if (fx === 'stagger') {
        Array.from(el.children).forEach((child, index) => {
          (child as HTMLElement).style.setProperty('--i', String(Math.min(index, 6)))
        })
      }

      observer ??= new IntersectionObserver(onIntersect, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' })
      observer.observe(el)
    },
    unmounted(el: HTMLElement) {
      observer?.unobserve(el)
      const timer = timers.get(el)
      if (timer) window.clearTimeout(timer)
    },
    getSSRProps: () => ({})
  })
})
