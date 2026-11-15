// Dados globais do site. Textos e links editáveis ficam aqui, longe dos componentes.

export const site = {
  name: 'PJ Tablados'
}

// As âncoras apontam para as seções da landing, na ordem da página
export const navItems = [
  { label: 'Início', to: '#inicio' },
  { label: 'Serviços', to: '#servicos' },
  { label: 'Sobre', to: '#sobre' },
  { label: 'Diferenciais', to: '#diferenciais' },
  { label: 'Projetos', to: '#projetos' },
  { label: 'Como funciona', to: '#como-funciona' },
  { label: 'Depoimentos', to: '#depoimentos' },
  { label: 'Perguntas', to: '#perguntas' },
  { label: 'Contato', to: '#contato' }
]

export const whatsappMessage = 'Olá, quero um orçamento de tablado'

// TODO: preencher com os dados reais. Não publicar contatos inventados.
export const contact = {
  phone: 'TODO: telefone',
  // Endereço da empresa, informado pelo cliente (link do Google Maps)
  address: 'R. da Paz, 79 - Aparecida, Portão - RS, 93180-000',
  region: 'TODO: região atendida',
  hours: 'TODO: horário de atendimento'
}

// TODO: adicionar as redes sociais reais, por exemplo
// { label: 'Instagram', icon: 'i-simple-icons-instagram', to: 'https://instagram.com/...' }
export const social: { label: string, icon: string, to: string }[] = []

export const footerDescription = 'Tablados e decks de madeira com qualidade e durabilidade. TODO: descrição curta da empresa.'

// Texto do botão de orçamento. O destino é o WhatsApp (ver components/QuoteButton.vue)
export const quoteCta = {
  label: 'Pedir orçamento'
}
