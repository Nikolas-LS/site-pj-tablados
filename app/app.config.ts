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
    },
    // Mensagens de erro em vermelho mais escuro, para contraste suficiente sobre branco
    formField: {
      slots: {
        error: 'mt-2 text-red-700'
      }
    },
    // Botões: leve elevação ao passar o mouse e um pequeno afundar ao clicar (desligado com "reduzir movimento")
    button: {
      slots: {
        base: 'transition-all duration-200 ease-out motion-safe:hover:-translate-y-px motion-safe:active:translate-y-0 motion-safe:active:scale-[0.98] motion-reduce:transition-none'
      },
      variants: {
        variant: {
          solid: 'shadow-sm hover:shadow-md'
        }
      }
    },
    // Cartões com raio de 10 px e sombra suave, como no design system
    card: {
      slots: {
        root: 'rounded-[10px] shadow-sm dark:bg-elevated'
      }
    }
  }
})
