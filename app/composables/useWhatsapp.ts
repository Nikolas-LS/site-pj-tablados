import { whatsappMessage } from '~/data/site'

// Único ponto que monta links de WhatsApp. O número vem do nuxt.config.ts e pode ser trocado pela variável NUXT_PUBLIC_WHATSAPP_NUMBER.
export function useWhatsapp() {
  const config = useRuntimeConfig()

  const digits = String(config.public.whatsappNumber ?? '').replace(/\D/g, '')
  // Aceita o número com ou sem o código do país
  const number = digits && !digits.startsWith('55') && digits.length <= 11 ? `55${digits}` : digits

  // Sem número configurado, o wa.me abre o WhatsApp só com a mensagem pronta, sem destinatário
  function link(message: string = whatsappMessage) {
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
  }

  return { number, hasNumber: number.length > 0, link }
}
