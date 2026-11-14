import { services } from './services'

export const ctaSection = {
  title: 'Vamos tirar seu projeto do papel?',
  description: 'Conte o que você precisa e peça um orçamento. Se preferir, é só chamar no WhatsApp.',
  whatsappLabel: 'Chamar no WhatsApp'
}

export const quoteForm = {
  projectTypes: [...services.map(service => service.title), 'Outro'],
  submitLabel: 'Enviar pedido',
  subject: 'Novo pedido de orçamento - PJ Tablados',
  fromName: 'Site PJ Tablados',
  messages: {
    success: {
      title: 'Pedido enviado!',
      description: 'Recebemos seus dados e vamos entrar em contato em breve.'
    },
    error: {
      title: 'Não foi possível enviar agora.',
      description: 'Tente novamente em instantes ou fale com a gente pelo WhatsApp.'
    }
  }
}
