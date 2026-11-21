export const servicesSection = {
  eyebrow: 'O que fazemos',
  title: 'Nossos serviços',
  description: 'Do tablado pronto à criação feita do zero.'
}

// Serviços confirmados pelo cliente: venda de tablados e fabricação sob medida (cada um com o seu texto de botão).
// Revisar as descrições com os donos
export const services = [
  {
    title: 'Venda de tablados',
    description: 'Peças prontas em madeira, para montar onde você precisar.',
    cta: { label: 'Consultar valores' },
    image: {
      src: '/images/evento-gramado.webp',
      alt: 'Tablado de madeira montado sob uma tenda, em área aberta com grama',
      position: 'object-[50%_62%]'
    }
  },
  {
    title: 'Fabricação sob medida',
    description: 'Painéis e tablados criados nas dimensões do seu local.',
    cta: { label: 'Contar meu projeto' },
    image: {
      src: '/images/paineis-patio.webp',
      alt: 'Painéis de tablado de madeira fabricados pela PJ Tablados, no pátio da empresa',
      position: 'object-[50%_72%]'
    }
  }
]
