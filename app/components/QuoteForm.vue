<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '@nuxt/ui'
import { quoteForm } from '~/data/cta'

type Status = 'idle' | 'loading' | 'success' | 'error'

const config = useRuntimeConfig()
const whatsapp = useWhatsapp()

const status = ref<Status>('idle')

const state = reactive({
  name: '',
  phone: '',
  city: '',
  projectType: undefined as string | undefined,
  measures: '',
  // Honeypot: campo invisível que só robôs preenchem
  website: ''
})

function validate(values: Partial<typeof state>): FormError[] {
  const errors: FormError[] = []

  if (!values.name || values.name.trim().length < 2) {
    errors.push({ name: 'name', message: 'Informe seu nome.' })
  }

  if (!values.phone?.trim()) {
    errors.push({ name: 'phone', message: 'Informe seu telefone com DDD.' })
  } else if (!isValidBrPhone(values.phone)) {
    errors.push({ name: 'phone', message: 'Telefone inválido. Use o DDD e o número, como (51) 99999-9999.' })
  }

  return errors
}

async function onSubmit(event: FormSubmitEvent<typeof state>) {
  const data = event.data

  // Robôs preenchem o campo invisível: finge sucesso e não envia nada
  if (data.website) {
    status.value = 'success'
    return
  }

  const accessKey = config.public.web3formsKey
  if (!accessKey) {
    console.warn('Formulário sem chave: defina NUXT_PUBLIC_WEB3FORMS_KEY (ver .env.example).')
    status.value = 'error'
    return
  }

  status.value = 'loading'

  try {
    const response = await $fetch<{ success: boolean }>('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: {
        access_key: accessKey,
        subject: quoteForm.subject,
        from_name: quoteForm.fromName,
        name: data.name.trim(),
        phone: data.phone,
        city: data.city.trim(),
        project_type: data.projectType ?? '',
        measures: data.measures.trim(),
        botcheck: false
      }
    })

    status.value = response.success ? 'success' : 'error'
  } catch {
    status.value = 'error'
  }
}

function reset() {
  Object.assign(state, { name: '', phone: '', city: '', projectType: undefined, measures: '', website: '' })
  status.value = 'idle'
}
</script>

<template>
  <div class="focus-ring-dark rounded-[10px] bg-default p-6 text-default shadow-lg sm:p-8">
    <div
      v-if="status === 'success'"
      class="py-6 text-center"
      role="status"
    >
      <UIcon
        name="i-lucide-circle-check"
        class="mx-auto size-12 text-success"
        aria-hidden="true"
      />
      <p class="mt-4 font-display text-2xl font-semibold text-highlighted">
        {{ quoteForm.messages.success.title }}
      </p>
      <p class="mt-2 text-base text-muted">
        {{ quoteForm.messages.success.description }}
      </p>
      <UButton
        label="Enviar outro pedido"
        variant="outline"
        class="mt-6 min-h-11"
        @click="reset"
      />
    </div>

    <UForm
      v-else
      :state="state"
      :validate="validate"
      class="space-y-5"
      @submit="onSubmit"
    >
      <UFormField
        label="Nome"
        name="name"
        required
      >
        <UInput
          v-model="state.name"
          autocomplete="name"
          placeholder="Seu nome"
          size="xl"
          class="w-full"
          :ui="{ base: 'min-h-11' }"
        />
      </UFormField>

      <UFormField
        label="Telefone (com DDD)"
        name="phone"
        required
      >
        <UInput
          :model-value="state.phone"
          type="tel"
          inputmode="tel"
          autocomplete="tel-national"
          placeholder="(51) 99999-9999"
          size="xl"
          class="w-full"
          :ui="{ base: 'min-h-11' }"
          @update:model-value="state.phone = formatBrPhone(String($event))"
        />
      </UFormField>

      <UFormField
        label="Cidade"
        name="city"
      >
        <UInput
          v-model="state.city"
          autocomplete="address-level2"
          placeholder="Onde será a obra"
          size="xl"
          class="w-full"
          :ui="{ base: 'min-h-11' }"
        />
      </UFormField>

      <UFormField
        label="Tipo de obra"
        name="projectType"
      >
        <USelect
          v-model="state.projectType"
          :items="quoteForm.projectTypes"
          placeholder="Selecione"
          size="xl"
          class="w-full"
          :ui="{ base: 'min-h-11' }"
        />
      </UFormField>

      <UFormField
        label="Medidas aproximadas"
        name="measures"
      >
        <UInput
          v-model="state.measures"
          placeholder="Ex.: 4 m x 6 m"
          size="xl"
          class="w-full"
          :ui="{ base: 'min-h-11' }"
        />
      </UFormField>

      <!-- Honeypot: escondido de quem usa tela e teclado, mas visível para robôs -->
      <div
        class="absolute -start-[9999px] h-0 w-0 overflow-hidden"
        aria-hidden="true"
      >
        <label>
          Não preencha este campo
          <input
            v-model="state.website"
            type="text"
            name="website"
            tabindex="-1"
            autocomplete="off"
          >
        </label>
      </div>

      <div
        aria-live="polite"
        role="status"
      >
        <UAlert
          v-if="status === 'error'"
          color="error"
          variant="subtle"
          icon="i-lucide-circle-alert"
          :title="quoteForm.messages.error.title"
          :description="quoteForm.messages.error.description"
          :ui="{ title: 'text-red-800', description: 'text-red-800', icon: 'text-red-700' }"
          :actions="[{ label: 'Falar no WhatsApp', to: whatsapp.link(), target: '_blank', color: 'neutral', variant: 'outline', class: 'min-h-11' }]"
        />
      </div>

      <UButton
        type="submit"
        :label="status === 'loading' ? 'Enviando...' : quoteForm.submitLabel"
        :loading="status === 'loading'"
        :disabled="status === 'loading'"
        trailing-icon="i-lucide-send"
        size="xl"
        block
        class="min-h-11 justify-center"
      />
    </UForm>
  </div>
</template>
