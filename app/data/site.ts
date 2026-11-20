// Dados globais do site. Textos e links editáveis ficam aqui, longe dos componentes.

export const site = {
  name: 'PJ Tablados',
  // Frase que acompanha a logo
  tagline: 'Tablados para Eventos'
}

// As âncoras apontam para as seções da landing, na ordem da página
export const navItems = [
  { label: 'Início', to: '#inicio' },
  { label: 'Serviços', to: '#servicos' },
  { label: 'Sobre', to: '#sobre' },
  { label: 'Diferenciais', to: '#diferenciais' },
  { label: 'Perguntas', to: '#perguntas' },
  { label: 'Contato', to: '#contato' }
]

export const whatsappMessage = 'Olá, quero um orçamento de tablado'

// Dados de contato. O telefone (o mesmo da logo), o endereço e a região atendida (todo o Brasil) vieram do cliente.
export const contact = {
  phone: '(51) 98686-3981',
  phoneHref: 'tel:+5551986863981',
  address: 'R. da Paz, 79 - Aparecida, Portão - RS, 93180-000',
  region: 'Atendemos todo o Brasil'
}

// Redes sociais da empresa, informadas pelo cliente (aparecem no rodapé)
export const social: { label: string, icon: string, to: string }[] = [
  { label: 'Instagram', icon: 'i-simple-icons-instagram', to: 'https://www.instagram.com/pj.tablados' },
  { label: 'Facebook', icon: 'i-simple-icons-facebook', to: 'https://www.facebook.com/share/1CPh7A8GwV/' }
]

// Texto do botão de orçamento. O destino é o WhatsApp (ver components/QuoteButton.vue)
export const quoteCta = {
  label: 'Pedir orçamento'
}
