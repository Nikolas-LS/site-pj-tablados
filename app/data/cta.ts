import { contact } from './site'

export const ctaSection = {
  title: 'Vamos tirar seu projeto do papel?',
  description: 'Chame a gente no WhatsApp, conte o tipo de obra e as medidas aproximadas e peça seu orçamento.',
  whatsappLabel: 'Chamar no WhatsApp'
}

export const location = {
  title: 'Onde estamos',
  address: contact.address,
  directionsLabel: 'Como chegar',
  // Link curto do Google Maps, usado no botão "Como chegar"
  mapsLink: 'https://maps.app.goo.gl/PFmENnzqig7Q1eWm6',
  // Mapa incorporado a partir do endereço, sem chave de API
  mapEmbed: `https://maps.google.com/maps?q=${encodeURIComponent(contact.address)}&z=16&hl=pt-BR&output=embed`,
  mapTitle: 'Mapa com a localização da PJ Tablados'
}
