// Revisar o texto com os donos (principalmente "oficina própria" e os três valores)
export const about = {
  title: 'O chão do seu evento começa aqui',
  paragraphs: [
    'Na PJ Tablados, a madeira passa pelas mãos da nossa equipe, da seleção dos tablados à montagem de cada painel, na nossa própria oficina. Vendemos tablados prontos e também fabricamos sob medida, no tamanho e no formato que o seu projeto pede.'
  ],
  // Valores sugeridos na estrutura da landing; confirmar com a empresa
  values: [
    { icon: 'i-lucide-badge-check', label: 'Qualidade', description: 'Madeira bem selecionada e acabamento cuidadoso.' },
    { icon: 'i-lucide-clock', label: 'Pontualidade', description: 'Prazo combinado e cumprido.' },
    { icon: 'i-lucide-handshake', label: 'Transparência', description: 'Orçamento claro, sem surpresas.' }
  ],
  // Vídeo da oficina (original vertical 576x1024, exibido na proporção original, sem recorte).
  // Toca sozinho, sem som e em loop, só enquanto está visível. O arquivo escurece para uma vinheta preta aos 84,5 s,
  // por isso o loop usa só o trecho de 0 a 84 s.
  // Se possível, trocar por uma versão mais curta e leve, e conferir a autorização de quem aparece
  video: {
    src: '/videos/oficina.mp4',
    poster: '/images/oficina-poster.webp',
    label: 'Vídeo: equipe da PJ Tablados fabricando painéis de tablado na oficina',
    caption: 'Direto da nossa oficina',
    width: 576,
    height: 1024,
    loopStart: 0,
    loopEnd: 84
  }
}
