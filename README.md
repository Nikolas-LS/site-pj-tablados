# PJ Tablados

Site institucional da **PJ Tablados** (tablados de madeira para eventos: venda e fabricação sob medida). Uma página só, feita para gerar pedidos de orçamento pelo WhatsApp, com tema claro (padrão) e escuro.

**Tecnologias:** Nuxt 4, Nuxt UI 4, Tailwind CSS 4 e TypeScript. Gerenciador de pacotes: **pnpm**.

## Como rodar

```bash
pnpm install     # instala as dependências
pnpm dev         # servidor de desenvolvimento em http://localhost:3000
pnpm build       # gera a versão de produção
pnpm preview     # testa a versão de produção localmente
pnpm lint        # verifica o código
pnpm typecheck   # verifica os tipos
```

## WhatsApp

O número usado em todos os botões fica em `nuxt.config.ts` (`runtimeConfig.public.whatsappNumber`). Para trocar sem mexer no código, crie um `.env` a partir do `.env.example` e defina `NUXT_PUBLIC_WHATSAPP_NUMBER`.

## Onde mexer

| O quê | Onde |
|---|---|
| Textos, contatos, redes sociais, serviços, perguntas | `app/data/` |
| Seções da página | `app/components/sections/` |
| Cores, fontes e tema escuro | `app/assets/css/main.css` e `app/app.config.ts` |
| Imagens, ícones e vídeo usados no site | `public/` |
| Logo (ícone) | `public/images/logo-pj.webp`, usada em `app/components/AppLogo.vue` |

As mídias originais (logo em alta, fotos e vídeos brutos) ficam na pasta `imgs/`, que **não** vai para o Git.

## Documentação

- `CLAUDE.md`: decisões do projeto, identidade visual e regras de conteúdo.
- `docs/`: estrutura da página, design system e guia de domínio e entrega.

## Licença

MIT, herdada do template original (ver `LICENSE`).
