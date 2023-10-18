<script setup lang="ts">
import InputCommon from '@/components/inputs/InputCommon.vue'
import { mask } from 'vue-the-mask'
import { t } from '@/i18n'

defineProps<{
    modelValue: string
    isError?: boolean
    errorText?: string
}>()

const emit = defineEmits(['update:modelValue'])

const vMask = {
    mounted: mask
}

function onUpdate(value: string) {
    emit('update:modelValue', value)
}

function onFocus(event: Event) {
    if ((event.target as HTMLInputElement).value === '')
        (event.target as HTMLInputElement).value = '+7 ('
}
</script>

<template>
    <InputCommon
        :label="t('loginScreen.phoneNumber')"
        type="tel"
        name="phone"
        :placeholder="t('loginScreen.phone')"
        :value="modelValue"
        v-mask="'+7 (###) ###-##-##'"
        :is-error="isError"
        :error-text="errorText"
        @update="onUpdate"
        @focus="onFocus"
    />
</template>

<style scoped></style>
