<script setup lang="ts">
import ButtonYellow from './ButtonYellow.vue'
import IconCircleLoader from '@/components/icons/IconCircleLoader.vue'
import { pay } from '@/plugins/cloudpayments'
import { t } from '@/i18n'

const props = defineProps<{
    description: string
    amount: number
    text: string
}>()

const emit = defineEmits(['pay'])

const CPInit = window.isCPInit

const cpConfig = {
    description: props.description,
    amount: props.amount,
    currency: t('currency')
}

function openPay() {
    if (!CPInit.value) return false

    pay(
        cpConfig,
        (options: any) => {
            emit('pay', options)
        },
        (reason: any, options: any) => {
            console.log(reason)
        }
    )
}
</script>

<template>
    <ButtonYellow @click="openPay()">
        <span v-if="CPInit">{{ text }}</span>
        <IconCircleLoader class="loader" v-else />
    </ButtonYellow>
</template>
