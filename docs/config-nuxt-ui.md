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

Define as escalas de cor `musgo` (verde principal) e `madeira` (marrom de apoio), além das fontes.

```css
@import "tailwindcss";
@import "@nuxt/ui";

@theme static {
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-display: 'Montserrat', 'Inter', sans-serif;

  /* Verde musgo (principal) - tom 700 = #1F4D3A */
  --color-musgo-50: #eef5f1;
  --color-musgo-100: #e3ede7;
  --color-musgo-200: #c4dacf;
  --color-musgo-300: #9bbfad;
  --color-musgo-400: #6c9d85;
  --color-musgo-500: #3f7a5f;
  --color-musgo-600: #2e6049;
  --color-musgo-700: #1f4d3a;
  --color-musgo-800: #163828;
  --color-musgo-900: #0f2a1e;
  --color-musgo-950: #081a12;

  /* Marrom amadeirado (apoio) - tom 600 = #8b5e3c */
  --color-madeira-50: #f8f3ee;
  --color-madeira-100: #e8d9c7;
  --color-madeira-200: #d6bc9f;
  --color-madeira-300: #c19c75;
  --color-madeira-400: #a97b52;
  --color-madeira-500: #96693f;
  --color-madeira-600: #8b5e3c;
  --color-madeira-700: #6f4a2f;
  --color-madeira-800: #553724;
  --color-madeira-900: #3b2619;
  --color-madeira-950: #22150e;
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

Liga as cores aos papéis do Nuxt UI. O `primary` vira o verde musgo, o `secondary` vira o marrom madeira, e o `neutral` usa um cinza.

```ts
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'musgo',
      secondary: 'madeira',
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
  <UButton color="primary" variant="outline" size="xl" label="Ver projetos" />

  <!-- Destaque em marrom madeira -->
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
