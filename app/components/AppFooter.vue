<template>
  <UFooter
    :ui="{
      container: 'border-t border-default lg:py-8'
    }"
  >
    <template #left>
      <p class="text-sm text-muted">
        © {{ new Date().getFullYear() }} PJ Tablados. TODO: rodapé completo (contatos, região atendida, horário).
      </p>
    </template>
  </UFooter>
</template>
