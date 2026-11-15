// Diretiva v-reveal: o conteúdo da seção surge com um fade e um leve deslize ao entrar na tela.
// Sem JavaScript, ou com "reduzir movimento" ativo, tudo aparece normalmente (o HTML nunca nasce escondido).
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
        return
      }

      // Seções que já aparecem na primeira tela (ou ao voltar para uma posição rolada) não precisam animar
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
        return
      }

      el.dataset.reveal = 'pending'

      const observer = new IntersectionObserver((entries) => {
        if (entries.some(entry => entry.isIntersecting)) {
          el.dataset.reveal = 'shown'
          observer.disconnect()
        }
      }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' })

      observer.observe(el)
    },
    getSSRProps: () => ({})
  })
})
