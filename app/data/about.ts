// Revisar o texto com os donos (principalmente "oficina própria" e os três valores)
export const about = {
  eyebrow: 'Quem somos',
  title: 'O chão onde a sua festa acontece',
  cta: { label: 'Tirar minhas dúvidas' },
  paragraphs: [
    'Na PJ Tablados, a madeira passa pelas mãos da nossa equipe, da escolha das tábuas à montagem de cada painel, dentro da nossa própria oficina. Temos peças prontas e também criamos tablados nas dimensões e no formato que o seu espaço pede.'
  ],
  // Valores sugeridos na estrutura da landing; confirmar com a empresa
  values: [
    { icon: 'i-lucide-badge-check', label: 'Qualidade', description: 'Tábuas bem escolhidas e peças bem finalizadas.' },
    { icon: 'i-lucide-clock', label: 'Pontualidade', description: 'Cumprimos o que combinamos.' },
    { icon: 'i-lucide-handshake', label: 'Transparência', description: 'Conversa franca, sem letras miúdas.' }
  ],
  // Vídeo da oficina (original vertical 576x1024, exibido na proporção original, sem recorte).
  // Toca sozinho, sem som e em loop, só enquanto está visível. O arquivo escurece para uma vinheta preta aos 84,5 s,
  // por isso o loop usa só o trecho de 0 a 84 s.
  // Se possível, trocar por uma versão mais curta e leve, e conferir a autorização de quem aparece
  video: {
    src: '/videos/oficina.mp4',
    poster: '/images/oficina-poster.webp',
    label: 'Vídeo: equipe da PJ Tablados fabricando painéis de tablado na oficina',
    caption: 'Nos bastidores da fabricação',
    width: 576,
    height: 1024,
    loopStart: 0,
    loopEnd: 84
  }
}
