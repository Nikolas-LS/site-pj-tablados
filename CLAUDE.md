# CLAUDE.md - PJ Tablados

Copie o conteúdo abaixo para um arquivo chamado CLAUDE.md na raiz do projeto.

## Visão geral do projeto

Landing page institucional da **PJ Tablados**, empresa que trabalha com tablados e decks de madeira. O objetivo principal do site é converter visitantes em pedidos de orçamento, por formulário ou WhatsApp. O público é formado por pessoas e empresas que querem contratar a construção ou a manutenção de tablados, decks e pisos externos de madeira, e a maior parte do acesso virá pelo celular.

Ainda faltam definir: lista real de serviços, contato (WhatsApp, telefone, e-mail), região atendida, fotos reais, depoimentos e números da empresa. Enquanto isso, usar textos de exemplo claramente marcados com `TODO` e nunca inventar dados como telefone, endereço, anos de experiência ou nomes de clientes.

## Stack

- **Framework:** Nuxt 4 (Vue 3), com renderização estática ou híbrida para bom SEO.
- **Componentes:** Nuxt UI v4 (gratuito, open source, mais de 125 componentes).
- **Estilo:** Tailwind CSS v4, configurado em CSS pelo bloco `@theme` (não existe tailwind.config.js).
- **Linguagem:** TypeScript.
- **Fontes:** Inter para texto e Montserrat para títulos, carregadas pelo módulo de fontes do Nuxt.
- **Ícones:** Iconify, via Nuxt UI.
- **Formulário:** Web3Forms ou Formspree, sem backend próprio.
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

Direção: natural, firme, limpa e confiável, com base no verde musgo escuro da logo e no marrom amadeirado da madeira.

**Cores** (códigos aproximados, o verde exato deve ser conferido na logo):

- Principal, verde musgo: `#1F4D3A` (tom 700 da escala `musgo`)
- Principal escuro, hover: `#163828`
- Principal claro, fundos suaves: `#E3EDE7`
- Apoio, marrom madeira: `#8B5E3C` (tom 600 da escala `madeira`)
- Apoio claro, bege: `#E8D9C7`
- Fundo: `#FFFFFF`; fundo alternativo off-white: `#F7F5F0`
- Texto: `#1C2420`; texto secundário: `#5C6660`; bordas: `#D9DDD9`
- Sucesso: `#2E7D4F`; erro: `#B3402F`

**Mapeamento no Nuxt UI** (app.config.ts): `primary` = `musgo`, `secondary` = `madeira`, `neutral` = `stone`, `success` = `green`, `error` = `red`.

**Regras de uso:**

- Verde musgo em botões principais, cabeçalho, rodapé e seção final de chamada.
- Marrom madeira apenas em detalhes, ícones e destaques, nunca como texto pequeno sobre branco sem checar contraste.
- Seções alternando fundo branco e off-white.
- Bordas pouco arredondadas: 6 px em botões e campos, 10 px em cartões.
- Sombras suaves e discretas.
- Espaçamento em múltiplos de 8 px, conteúdo com largura máxima de 1200 px.
- Tipografia: H1 de 40 a 48 px, H2 de 32 px, H3 de 24 px, corpo de 16 px.

## Estrutura da landing page

Implementar nesta ordem, uma seção por componente, em `app/components/sections/`:

1. **Cabeçalho:** logo à esquerda, menu (Início, Serviços, Projetos, Sobre, Contato), botão "Pedir orçamento", fixo no topo, menu hambúrguer no celular.
2. **Hero:** título forte, subtítulo curto, botões "Pedir orçamento" e "Ver projetos", foto grande de tablado pronto.
3. **Faixa de confiança:** de três a quatro números ou selos (experiência, obras, madeira tratada, garantia).
4. **Serviços:** cartões com foto, título e descrição (tablados, decks, pisos externos, manutenção).
5. **Sobre a empresa:** texto curto, foto da equipe ou de obra, valores.
6. **Diferenciais:** grade de três a seis itens com ícone e uma linha de texto.
7. **Galeria de projetos:** grade de fotos horizontais, ampliar ao clicar, legenda com local e tipo de obra.
8. **Como funciona:** quatro passos em linha do tempo (contato, visita e medição, orçamento, execução).
9. **Depoimentos:** dois a três, com nome e cidade.
10. **Perguntas frequentes:** formato sanfona.
11. **Chamada final com formulário:** fundo verde musgo, campos nome, telefone, cidade, tipo de obra e medidas aproximadas, mais botão de WhatsApp.
12. **Rodapé:** logo, links, contatos, região atendida, horário, redes sociais.

**Elementos fixos:** botão flutuante de WhatsApp no canto inferior direito, visível em todas as seções.

## Formulário e WhatsApp

- WhatsApp por link direto no formato `https://wa.me/55DDDNUMERO?text=...`, com mensagem pronta como "Olá, quero um orçamento de tablado". O número deve vir de uma variável de ambiente ou de um arquivo de configuração único, nunca espalhado pelo código.
- Formulário enviado para Web3Forms ou Formspree, com a chave em variável de ambiente.
- Validação no cliente: nome e telefone obrigatórios, telefone com máscara brasileira.
- Mostrar estado de carregando, sucesso e erro de forma clara.
- Proteger contra spam com campo oculto (honeypot) ou captcha simples.

## Convenções de código

- Usar `<script setup lang="ts">` em todos os componentes.
- Nomes de componentes em PascalCase, arquivos de composables em camelCase com prefixo `use`.
- Preferir componentes do Nuxt UI (`UButton`, `UCard`, `UAccordion`, `UForm`, `UFormField`, `UInput`, etc.) antes de criar HTML próprio.
- Estilizar com classes do Tailwind e com as cores do tema (`primary`, `secondary`), evitando valores hexadecimais soltos no código.
- Conteúdo editável (textos, serviços, perguntas, depoimentos, contatos) centralizado em arquivos de dados, como `app/data/`, para facilitar trocas sem mexer nos componentes.
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
- Não inventar informações da empresa; usar `TODO` quando faltar dado.
- Não adicionar dependências sem necessidade.
- Seguir sempre as cores e regras visuais deste arquivo.
- Depois de editar, rodar o build e a checagem de tipos e relatar qualquer erro.

## Próximos passos

1. Criar o projeto a partir do template de landing do Nuxt UI (landing-template.nuxt.dev).
2. Aplicar o tema: escalas `musgo` e `madeira` no `main.css` e mapeamento de cores no `app.config.ts`.
3. Trocar o tom 700 do musgo pelo verde exato da logo.
4. Montar as seções na ordem acima.
5. Preencher os dados reais da empresa e as fotos.
6. Configurar formulário, WhatsApp, SEO e publicar.
