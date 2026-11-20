# Configuração Nuxt UI para PJ Tablados

Guia para aplicar as cores e a tipografia da PJ Tablados no Nuxt UI v4, que usa Tailwind CSS v4. O tema fica em três camadas: o arquivo main.css define as cores e fontes, o app.config.ts liga essas cores aos papéis do sistema, e o nuxt.config.ts carrega o CSS.

**Importante:** as escalas abaixo foram geradas a partir dos códigos aproximados do documento de design system. Quando você tiver o verde exato da logo, basta trocar o tom 700 (o verde musgo principal) e ajustar o resto da escala.

## 1. Instalação

Criar o projeto com o template de landing do Nuxt UI (https://landing-template.nuxt.dev) ou adicionar o módulo a um projeto Nuxt existente: `npx nuxi module add ui`.

## 2. Arquivo nuxt.config.ts

```ts
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css']
})
```

## 3. Arquivo assets/css/main.css

Define as escalas de cor `musgo` (verde-oliva da logo, principal) e `ouro` (dourado da logo, de apoio), além das fontes.

```css
@import "tailwindcss";
@import "@nuxt/ui";

@theme static {
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-display: 'Montserrat', 'Inter', sans-serif;

  /* Verde-oliva da logo (principal) - tom 700 = #202813, o fundo exato da logo */
  --color-musgo-50: #f6f8f2;
  --color-musgo-100: #eaefe1;
  --color-musgo-200: #d4dec4;
  --color-musgo-300: #b5c69a;
  --color-musgo-400: #92ad67;
  --color-musgo-500: #6e8943;
  --color-musgo-600: #4b6029;
  --color-musgo-700: #202813;
  --color-musgo-800: #151a0c;
  --color-musgo-900: #0f1309;
  --color-musgo-950: #0a0c06;

  /* Dourado da logo (apoio) - tom 400 = #ce9f60 */
  --color-ouro-50: #faf6ef;
  --color-ouro-100: #f3e7d8;
  --color-ouro-200: #e8d2b5;
  --color-ouro-300: #dbb88a;
  --color-ouro-400: #ce9f60;
  --color-ouro-500: #c3893c;
  --color-ouro-600: #9c6e30;
  --color-ouro-700: #795525;
  --color-ouro-800: #5a3f1c;
  --color-ouro-900: #3e2c13;
  --color-ouro-950: #23190b;
}

:root {
  --ui-bg: #ffffff;
  --ui-bg-muted: #f7f5f0;
  --ui-text: #1c2420;
  --ui-text-muted: #5c6660;
  --ui-border: #d9ddd9;
  --ui-radius: 0.375rem;
}

/* Títulos com a fonte de destaque */
h1, h2, h3 {
  font-family: var(--font-display);
}

/* O verde principal usa um tom mais escuro (700) no modo claro */
:root {
  --ui-primary: var(--color-musgo-700);
}
.dark {
  --ui-primary: var(--color-musgo-400);
}
```

## 4. Arquivo app.config.ts

Liga as cores aos papéis do Nuxt UI. O `primary` vira o verde musgo, o `secondary` vira o dourado, e o `neutral` usa um cinza.

```ts
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'musgo',
      secondary: 'ouro',
      success: 'green',
      info: 'sky',
      warning: 'amber',
      error: 'red',
      neutral: 'stone'
    }
  }
})
```

## 5. Exemplos de uso nos componentes

```vue
<template>
  <!-- Botão principal em verde musgo -->
  <UButton color="primary" size="xl" label="Pedir orçamento" />

  <!-- Botão secundário com borda -->
  <UButton color="primary" variant="outline" size="xl" label="Ver serviços" />

  <!-- Destaque em dourado -->
  <UBadge color="secondary" label="Madeira tratada" />

  <!-- Campo de formulário -->
  <UFormField label="Telefone">
    <UInput placeholder="(51) 99999-9999" />
  </UFormField>
</template>
```

## 6. Fontes

O Nuxt UI usa o módulo de fontes do Nuxt, que baixa e otimiza automaticamente as fontes do Google que aparecem no CSS. Por isso basta declarar Inter e Montserrat no main.css, sem precisar de link externo.

## 7. Pontos de atenção

- Se algum componente continuar azul ou com a cor padrão, confira se o app.config.ts está na raiz do projeto e se o nome da cor bate com o definido no main.css.
- O Tailwind v4 não usa mais o arquivo tailwind.config.js, tudo é configurado em CSS pelo bloco `@theme`.
- Texto branco sobre o tom 700 do verde musgo tem contraste alto, ótimo para botões.
- Conferir o contraste do marrom antes de usá-lo como cor de texto pequeno.
- Os nomes de variáveis do Nuxt UI podem mudar entre versões, então vale consultar a documentação de tema em ui.nuxt.com se algo não aplicar.

## 8. Próximos passos

1. Trocar o tom 700 do musgo pelo verde exato da logo e regenerar a escala.
2. Montar as seções da landing usando os blocos do template (hero, features, depoimentos, perguntas frequentes e rodapé).
3. Adicionar as fotos reais das obras e os textos da empresa.
