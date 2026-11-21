# Design System PJ Tablados

Direção visual para o site e materiais da PJ Tablados: natural, firme e acolhedora, com base no verde-oliva escuro e no dourado da logo.

## 1. Princípios

- **Natural:** cores terrosas e verdes que lembram madeira e jardim.
- **Firme:** tipografia forte e bordas pouco arredondadas, passando solidez e durabilidade.
- **Limpo:** muito espaço em branco e fotos grandes dos tablados e da produção.
- **Confiável:** contraste alto, textos legíveis e botões claros para pedir orçamento.

## 2. Paleta de cores

Os códigos principais foram medidos no arquivo da logo (`imgs/logo.png`).

| Função | Nome | Código |
|---|---|---|
| Principal | Verde-oliva da logo | #202813 |
| Principal escuro (rodapé) | Verde-oliva profundo | #151A0C |
| Principal claro (fundos suaves) | Verde-oliva claro | #EAEFE1 |
| Apoio | Dourado da logo | #CE9F60 (sobre fundo escuro) / #9C6E30 (sobre claro) |
| Apoio claro | Dourado claro | #F3E7D8 |
| Fundo | Branco | #FFFFFF |
| Fundo alternativo | Off-white quente | #F7F5F0 |
| Texto | Cinza esverdeado escuro | #1C2420 |
| Texto secundário | Cinza médio | #5C6660 |
| Bordas | Cinza claro | #D9DDD9 |
| Sucesso | Verde vivo | #2E7D4F |
| Erro | Vermelho terroso | #B3402F |

**Uso sugerido:** verde musgo em botões principais, cabeçalho e rodapé; dourado em detalhes, ícones e filetes; off-white como fundo de seções alternadas.

## 3. Tipografia

Todas gratuitas no Google Fonts.

- **Títulos:** Montserrat Bold ou Poppins SemiBold, firmes e modernas.
- **Texto corrido:** Inter Regular, muito legível em tela.
- **Alternativa mais rústica para títulos:** Merriweather Bold, com serifa, passa tradição.

| Elemento | Tamanho | Peso |
|---|---|---|
| H1 | 40 a 48 px | Bold |
| H2 | 32 px | Bold |
| H3 | 24 px | SemiBold |
| Corpo | 16 px | Regular |
| Legenda | 14 px | Regular |

## 4. Espaçamento e formas

- Escala de espaçamento em múltiplos de 8 px: 8, 16, 24, 32, 48, 64.
- Raio de borda pequeno, 6 px em botões e campos, 10 px em cartões.
- Sombras suaves, sem exagero, só para destacar cartões e menus.
- Largura máxima do conteúdo: 1200 px.

## 5. Componentes

### Botões
- **Primário:** fundo verde musgo, texto branco, hover verde floresta.
- **Secundário:** borda verde musgo, fundo transparente, texto verde.
- **Destaque (WhatsApp):** verde vivo com ícone, sempre visível no mobile.

### Campos de formulário
- Borda cinza clara, foco com borda verde musgo.
- Rótulo acima do campo, mensagem de erro em vermelho terroso.
- O site não tem formulário de orçamento: o pedido é feito pelo WhatsApp.

### Cartões
- Cartão de serviço: foto, título, descrição curta e link.

### Navegação
- Cabeçalho branco com logo à esquerda, menu enxuto e alternador de tema à direita (sem botão de orçamento).
- Rodapé em verde musgo com contatos, endereço, redes sociais e horário.

### Seções recomendadas para o site
1. Hero com foto grande de um tablado pronto e botão de orçamento.
2. Serviços: venda de tablados e fabricação sob medida.
3. Diferenciais: madeira tratada, garantia, prazo.
4. Perguntas frequentes.
5. Contato e orçamento.

## 6. Imagens e ícones

- Fotos reais das obras, com boa luz e enquadramento horizontal.
- Ícones de traço simples, na cor verde musgo ou marrom.
- Evitar bancos de imagem genéricos sempre que possível.

## 7. Acessibilidade

- Texto branco sobre verde musgo tem contraste alto, bom para botões.
- Não usar o marrom como cor de texto pequeno sobre fundo branco sem checar o contraste.
- Botões com no mínimo 44 px de altura no celular.

## 8. Implementação com Nuxt e Tailwind

Definir as cores no tema do Tailwind com nomes como musgo (verde-oliva) e ouro (dourado), e reaproveitar nos componentes. Nuxt UI ou shadcn podem servir de base de componentes, só trocando as cores pelo tema da PJ Tablados.
