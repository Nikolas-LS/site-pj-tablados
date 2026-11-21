<script setup lang="ts">
// Alterna entre o tema claro (padrão) e o escuro. A escolha fica salva no navegador.
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

function toggle() {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <!-- O tema só é conhecido no navegador; até lá fica um espaço do mesmo tamanho, para o cabeçalho não pular -->
  <ClientOnly>
    <UButton
      :icon="isDark ? 'i-lucide-sun' : 'i-lucide-moon'"
      color="neutral"
      variant="ghost"
      square
      size="lg"
      class="size-[44px] rounded-full hover:bg-transparent active:bg-transparent hover:text-primary"
      :aria-label="isDark ? 'Ativar o tema claro' : 'Ativar o tema escuro'"
      @click="toggle"
    />
    <template #fallback>
      <div
        class="size-[44px]"
        aria-hidden="true"
      />
    </template>
  </ClientOnly>
</template>
