# CLAUDE.md - PJ Tablados

Copie o conteúdo abaixo para um arquivo chamado CLAUDE.md na raiz do projeto.

## Visão geral do projeto

Landing page institucional da **PJ Tablados**, empresa de tablados de madeira para eventos ("Tablados para Eventos"), que vende tablados e fabrica sob medida. O objetivo principal do site é converter visitantes em pedidos de orçamento pelo WhatsApp. O público é formado por pessoas e empresas que querem comprar tablados de madeira ou encomendar tablados sob medida para eventos, e a maior parte do acesso virá pelo celular.

Os textos do site são rascunhos gerais, sem promessas que não sejam conhecidas (sem anos de experiência, números de obras, garantias ou horários). Dados confirmados pelo cliente: telefone/WhatsApp (o da logo), endereço, Instagram e Facebook, serviços (venda de tablados e fabricação sob medida). Região atendida: todo o Brasil (a empresa está ampliando o atendimento para além do Sul; o endereço em Portão-RS é só o da sede). O site não terá seções de depoimentos, galeria de projetos nem "Como funciona" (decisão do cliente).

## Stack

- **Framework:** Nuxt 4 (Vue 3), com renderização estática ou híbrida para bom SEO.
- **Componentes:** Nuxt UI v4 (gratuito, open source, mais de 125 componentes).
- **Estilo:** Tailwind CSS v4, configurado em CSS pelo bloco `@theme` (não existe tailwind.config.js).
- **Linguagem:** TypeScript.
- **Fontes:** Inter para texto e Montserrat para títulos, carregadas pelo módulo de fontes do Nuxt.
- **Ícones:** Iconify, via Nuxt UI.
- **Pedido de orçamento:** só por WhatsApp (link `wa.me`). Não há formulário nem backend, porque a empresa não usa e-mail.
- **Hospedagem:** a definir, Vercel ou Netlify são as opções.
- **Gerenciador de pacotes:** pnpm (há `pnpm-lock.yaml`). Não usar npm nem yarn.

## Comandos

- Instalar dependências: `pnpm install`
- Rodar em desenvolvimento: `pnpm dev`
- Build de produção: `pnpm build`
- Pré-visualizar o build: `pnpm preview`
- Verificar tipos: `pnpm typecheck`
- Lint: `pnpm lint`

Rodar o build e a checagem de tipos antes de dar uma tarefa por concluída.

## Identidade visual

Direção: natural, firme, limpa e confiável, com base no verde-oliva escuro e no dourado da logo (arquivo em `imgs/logo.png`).

**Cores** (medidas na logo; o tom 700 do verde e o tom 400 do dourado são exatamente os dela):

- Principal, verde-oliva: `#202813` (tom 700 da escala `musgo`, o fundo da logo)
- Principal escuro (rodapé): `#151A0C`
- Principal claro, fundos suaves: `#EAEFE1`
- Apoio, dourado: `#CE9F60` (tom 400 da escala `ouro`, só sobre fundo escuro); `#9C6E30` (tom 600) para uso sobre fundo claro
- Creme da logo: `#F0EEEA`
- Fundo: `#FFFFFF`; fundo alternativo off-white: `#F7F5F0`
- Texto: `#1C2420`; texto secundário: `#5C6660`; bordas: `#D9DDD9`
- Sucesso: `#2E7D4F`; erro: `#B3402F`

**Mapeamento no Nuxt UI** (app.config.ts): `primary` = `musgo`, `secondary` = `ouro`, `neutral` = `stone`, `success` = `green`, `error` = `red`.

**Regras de uso:**

- Verde-oliva em botões principais, ícone da logo, rodapé e seção final de chamada.
- Dourado apenas em detalhes, ícones e filetes. O tom 400 só sobre fundo escuro; sobre branco usar o 600. Nunca como texto pequeno sem checar contraste.
- Seções alternando fundo branco e off-white, com a faixa de confiança e a chamada final em verde-oliva.
- **Tema claro e escuro:** o claro é o padrão. O escuro é opcional, escolhido no botão (sol/lua) do cabeçalho, e a escolha fica salva no navegador. O escuro usa a mesma paleta: fundo `musgo-900`/`800`, texto creme `#F0EEEA` e dourado (`ouro-400`) como cor de destaque e dos botões. As variáveis ficam no bloco `.dark` do `main.css`. Blocos de marca (faixa de confiança, contato, rodapé, painel do celular) usam `bg-musgo-700`/`text-white` fixos, iguais nos dois temas. Em componentes novos use as cores semânticas (`bg-default`, `text-muted`, `text-primary`...) e, se usar `ouro-700` ou `ouro-100` no claro, acrescente a variante `dark:`.
- **Seção atual no menu:** o item do cabeçalho (e do painel do celular) da seção que está na tela fica marcado (texto escuro e uma linha dourada única que cresce do centro ao aparecer e desliza entre os itens ao trocar de seção, a ~2 px do texto, no desktop; texto dourado no painel). Vem de `useActiveSection` e usa os ids das seções; ao criar uma seção nova com link no menu, basta pôr o link em `navItems` com o mesmo id.
- **Assinatura visual das seções:** rótulo dourado em caixa alta (`SectionEyebrow`), título, filete dourado curto, losangos da logo nos cantos só em telas grandes (`SectionDiamonds`) e moldura dourada deslocada atrás de fotos, vídeo e mapa. `SectionHeading` já traz rótulo e filete. Movimento sempre sutil (hover de 4 px, zoom leve na foto) e desligado com "reduzir movimento".
- Bordas pouco arredondadas: 6 px em botões e campos, 10 px em cartões.
- Sombras suaves e discretas.
- Espaçamento em múltiplos de 8 px, conteúdo com largura máxima de 1200 px.
- Tipografia: H1 de 40 a 48 px, H2 de 32 px, H3 de 24 px, corpo de 16 px.

## Estrutura da landing page

Implementar nesta ordem, uma seção por componente, em `app/components/sections/`:

1. **Cabeçalho:** logo à esquerda, menu (Início, Serviços, Sobre, Diferenciais, Perguntas, Contato), botão "Pedir orçamento", fixo no topo, no celular, menu em painel lateral verde-oliva (abre deslizando, links numerados e redes sociais; sem logo, botão de orçamento, endereço ou tagline).
2. **Hero:** título forte, subtítulo curto, botões "Pedir orçamento" e "Ver serviços", foto grande de tablado pronto.
3. **Faixa de confiança:** de três a quatro números ou selos (experiência, obras, madeira tratada, garantia).
4. **Serviços:** dois cartões com foto real, título e descrição: venda de tablados e fabricação sob medida (serviços confirmados pelo cliente).
5. **Sobre a empresa:** título, um parágrafo de apresentação e três valores, com o vídeo da oficina ao lado (em loop, sem som e só com botão de pausar) e botão de orçamento. Sem frase de abertura e sem citação (a pedido do cliente).
6. **Diferenciais:** grade de três a seis itens com ícone e uma linha de texto.
7. **Perguntas frequentes:** formato sanfona.
8. **Chamada final:** fundo verde musgo, botão de WhatsApp, endereço com botão "Como chegar" e mapa do Google incorporado.
9. **Rodapé:** logo, contato (WhatsApp, telefone e redes sociais), endereço e região atendida. Sem menu de navegação, sem frase da logo e sem descrição da empresa (a pedido do cliente).

**Elementos fixos:** só o cabeçalho. Não há botão flutuante de WhatsApp (removido a pedido do cliente). O pedido de orçamento fica nos botões "Pedir orçamento" e na seção de contato.

## WhatsApp e mapa

- WhatsApp por link direto no formato `https://wa.me/55DDDNUMERO?text=...`, com mensagem pronta como "Olá, quero um orçamento de tablado". O número deve vir de uma variável de ambiente ou de um arquivo de configuração único, nunca espalhado pelo código.
- Todos os botões "Pedir orçamento" usam `components/QuoteButton.vue` e abrem o WhatsApp. O mapa vem do endereço em `app/data/site.ts` (`contact.address`), incorporado sem chave de API.

## Convenções de código

- Usar `<script setup lang="ts">` em todos os componentes.
- Nomes de componentes em PascalCase, arquivos de composables em camelCase com prefixo `use`.
- Preferir componentes do Nuxt UI (`UButton`, `UCard`, `UAccordion`, `UForm`, `UFormField`, `UInput`, etc.) antes de criar HTML próprio.
- Estilizar com classes do Tailwind e com as cores do tema (`primary`, `secondary`), evitando valores hexadecimais soltos no código.
- Conteúdo editável (textos, serviços, perguntas, contatos) centralizado em arquivos de dados, como `app/data/`, para facilitar trocas sem mexer nos componentes.
- Componentes pequenos e reutilizáveis, sem duplicar blocos de código.
- Comentários apenas onde a lógica não for óbvia.

## Acessibilidade e desempenho

- Contraste alto: texto branco sobre verde musgo é permitido; conferir qualquer outra combinação.
- Todas as imagens com texto alternativo descritivo.
- Botões com no mínimo 44 px de altura no celular.
- Navegação completa por teclado e foco visível.
- Imagens em formato WebP ou AVIF, com carregamento preguiçoso fora da primeira dobra (usar `NuxtImg` se o módulo de imagem estiver instalado).
- Meta tags de SEO (título, descrição, Open Graph), idioma `pt-BR` e dados estruturados de negócio local quando houver informações reais.
- Meta de Lighthouse acima de 90 em desempenho, acessibilidade e SEO.

## Como trabalhar neste projeto

- Responder e escrever os textos do site em português do Brasil, com tom próximo, profissional e direto.
- Trabalhar uma seção por vez, explicando em poucas linhas o que foi feito.
- Antes de mudanças grandes (estrutura de pastas, troca de biblioteca, novas dependências), perguntar primeiro.
- Não inventar números, prazos, garantias ou horários da empresa. Sem dado confirmado, usar texto geral e verdadeiro (nunca deixar `TODO` visível no site) e anotar em comentário "Revisar com os donos".
- Não adicionar dependências sem necessidade.
- Seguir sempre as cores e regras visuais deste arquivo.
- Depois de editar, rodar o build e a checagem de tipos e relatar qualquer erro.

## Próximos passos

1. Criar o projeto a partir do template de landing do Nuxt UI (landing-template.nuxt.dev).
2. Aplicar o tema: escalas `musgo` e `ouro` no `main.css` e mapeamento de cores no `app.config.ts`.
3. Trocar o tom 700 do musgo pelo verde exato da logo.
4. Montar as seções na ordem acima.
5. Preencher os dados reais da empresa e as fotos.
6. Configurar WhatsApp, SEO e publicar.
