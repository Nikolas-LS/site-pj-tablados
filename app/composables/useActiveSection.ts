// Descobre qual seção está na tela, para marcar o item correspondente no menu.
// Vale a última seção (na ordem da página) cujo topo já passou de uma linha a ~35% da altura da tela, abaixo do cabeçalho.
// No fim da página vale sempre a última. A faixa de confiança, sem link no menu, conta como parte do início.
export function useActiveSection(ids: string[]) {
  const active = ref<string | null>(null)
  let frame = 0

  function update() {
    frame = 0
    const headerHeight = 64
    const line = headerHeight + window.innerHeight * 0.35
    let current = ids[0] ?? null
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el && el.getBoundingClientRect().top <= line) current = id
    }
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      current = ids[ids.length - 1] ?? current
    }
    active.value = current
  }

  // Um cálculo por quadro, mesmo com muitos eventos de rolagem
  function schedule() {
    if (!frame) frame = requestAnimationFrame(update)
  }

  onMounted(update)
  useEventListener('scroll', schedule, { passive: true })
  useEventListener('resize', schedule)
  onBeforeUnmount(() => {
    if (frame) cancelAnimationFrame(frame)
  })

  return active
}
