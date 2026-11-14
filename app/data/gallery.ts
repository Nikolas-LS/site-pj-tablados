export const gallerySection = {
  title: 'Projetos realizados',
  // TODO: trocar pelas obras reais, com o local e o tipo de cada uma
  description: 'TODO: imagens de exemplo. Aqui entram as fotos reais das obras.'
}

// TODO: substituir por fotos reais horizontais (3:2), em WebP, com local e tipo de obra
export const galleryItems = [
  {
    src: '/images/exemplo/galeria-piscina.svg',
    alt: 'Deck de madeira ao lado de uma piscina (imagem de exemplo)',
    type: 'Deck de piscina',
    location: 'TODO: cidade'
  },
  {
    src: '/images/exemplo/galeria-pergola.svg',
    alt: 'Deck de madeira com pérgola (imagem de exemplo)',
    type: 'Deck com pérgola',
    location: 'TODO: cidade'
  },
  {
    src: '/images/exemplo/galeria-entardecer.svg',
    alt: 'Deck de madeira com guarda-corpo ao entardecer (imagem de exemplo)',
    type: 'Deck com guarda-corpo',
    location: 'TODO: cidade'
  },
  {
    src: '/images/exemplo/galeria-escada.svg',
    alt: 'Deck elevado de madeira com escada e espreguiçadeira (imagem de exemplo)',
    type: 'Deck elevado com escada',
    location: 'TODO: cidade'
  },
  {
    src: '/images/exemplo/galeria-passarela.svg',
    alt: 'Passarela de madeira entre a vegetação (imagem de exemplo)',
    type: 'Passarela de madeira',
    location: 'TODO: cidade'
  },
  {
    src: '/images/exemplo/galeria-guarda-sol.svg',
    alt: 'Deck de madeira visto de cima, com mesa e guarda-sol (imagem de exemplo)',
    type: 'Piso externo com área de convivência',
    location: 'TODO: cidade'
  }
].map(item => ({ ...item, width: 1200, height: 800 }))
