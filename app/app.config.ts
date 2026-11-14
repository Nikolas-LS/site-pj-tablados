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
    },
    // Mensagens de erro em vermelho mais escuro, para contraste suficiente sobre branco
    formField: {
      slots: {
        error: 'mt-2 text-red-700'
      }
    },
    // Cartões com raio de 10 px e sombra suave, como no design system
    card: {
      slots: {
        root: 'rounded-[10px] shadow-sm'
      }
    }
  }
})
